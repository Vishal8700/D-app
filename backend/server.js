
require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Database Connection
const mongoDBURI = process.env.MONGODB_URI; // Use environment variable

mongoose.connect(mongoDBURI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Admin Schema and Model
const adminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const Admin = mongoose.model('Admin', adminSchema);

// Employee Schema and Model
const employeeSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const Employee = mongoose.model('Employee', employeeSchema);

// Middleware for checking token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => { // Use environment variable
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Admin Routes
app.post('/admin/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingAdmin = await Admin.findOne({ username });
    if (existingAdmin) {
      return res.status(400).send('Admin already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const admin = new Admin({ username, password: hashedPassword });
    await admin.save();
    res.status(201).send('Admin registered');
  } catch (error) {
    console.error('Error registering admin:', error);
    if (error.name === 'ValidationError') {
      return res.status(400).send(`Validation error: ${error.message}`);
    }
    res.status(500).send('Server error');
  }
});

app.post('/admin/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const admin = await Admin.findOne({ username });
    if (!admin || !(await bcrypt.compare(password, admin.password))) {
      return res.status(400).send('Invalid credentials');
    }
    const token = jwt.sign({ username: admin.username, role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).send('Login failed');
  }
});

// Employee Routes
app.post('/employee/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingEmployee = await Employee.findOne({ username });
    if (existingEmployee) {
      return res.status(400).send('Employee already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const employee = new Employee({ username, password: hashedPassword });
    await employee.save();
    res.status(201).send('Employee registered');
  } catch (error) {
    console.error('Error registering employee:', error);
    if (error.name === 'ValidationError') {
      return res.status(400).send(`Validation error: ${error.message}`);
    }
    res.status(500).send('Server error');
  }
});

app.post('/employee/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const employee = await Employee.findOne({ username });
    if (!employee || !(await bcrypt.compare(password, employee.password))) {
      return res.status(400).send('Invalid credentials');
    }
    const token = jwt.sign({ username: employee.username, role: 'employee' }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).send('Login failed');
  }
});

// Example Protected Route
app.get('/protected', authenticateToken, (req, res) => {
  res.send(`Hello ${req.user.username}, you have access to this protected route.`);
});

// API Routes
app.get("/", (req, res) => {
  res.send("Express app is running");
});

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: path.join(__dirname, 'upload/images'),
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage });

// Start Server
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

