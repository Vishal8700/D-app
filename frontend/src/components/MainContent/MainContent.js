// import React, { useState } from 'react';
// import './MainContent.css';
// import About from '../About/About';
// import AdminLogin from '../Admin/AdminLogin';
// import AdminSignup from '../Admin/AdminSignup';
// import EmployeeLogin from '../Employee/EmployeLogin';
// import EmployeeSignup from '../Employee/EmployeSignup';

// function MainContent({ activeItem }) {
//   // States to manage login and signup forms for Admin and Employee
//   const [isLoggedIn, setIsLoggedIn] = useState({ admin: false, employee: false });
//   const [isSignup, setIsSignup] = useState({ admin: true, employee: true });

//   // Handler to set the login state for a specific role
//   const handleLogin = (role) => {
//     setIsLoggedIn(prevState => ({ ...prevState, [role]: true }));
//   };

//   // Handler to toggle between signup and login forms for a specific role
//   const handleSignupSwitch = (role) => {
//     setIsSignup(prevState => ({ ...prevState, [role]: !prevState[role] }));
//   };

//   // Function to render the content based on the active item
//   const renderContent = () => {
//     switch (activeItem) {
//       case 'Dashboard':
//         return (
//           <div className="dashboard-content">
//             <div className="active-item">Welcome to the Dashboard!</div>
//             <div className="unique-notices">
//               <div className="unique-notice-item">
//                 <h3>Field Application Engineer Intern Recruitment</h3>
//                 <p>Texas Instruments - 2 Months Summer Intern recruitment for 2026 Batch</p>
//                 <span className="unique-notice-date">Sun Aug 25 2024, 23:23</span>
//               </div>
//               <div className="unique-notice-item">
//                 <h3>Intern Trainee (Software)</h3>
//                 <p>NatWest Digital Services - Details will be shared later</p>
//                 <span className="unique-notice-date">Sat Aug 24 2024, 16:54</span>
//               </div>
//               {/* Add more notices as needed */}
//             </div>
//           </div>
//         );
//       case 'About':
//         return <About />;
//       case 'Admin':
//       case 'Employee':
//         const role = activeItem.toLowerCase();
//         if (isLoggedIn[role]) {
//           return <div className="active-item">{activeItem} Dashboard Content</div>;
//         }
//         return (
//           <div className="auth-forms">
//             {isSignup[role] ? (
//               role === 'admin' ? (
//                 <AdminSignup onSwitch={() => handleSignupSwitch('admin')} />
//               ) : (
//                 <EmployeeSignup onSwitch={() => handleSignupSwitch('employee')} />
//               )
//             ) : (
//               role === 'admin' ? (
//                 <AdminLogin onLogin={() => handleLogin('admin')} onSwitch={() => handleSignupSwitch('admin')} />
//               ) : (
//                 <EmployeeLogin onLogin={() => handleLogin('employee')} onSwitch={() => handleSignupSwitch('employee')} />
//               )
//             )}
//           </div>
//         );
//       default:
//         return <div className="active-item">Select an option from the sidebar</div>;
//     }
//   };

//   return (
//     <div className="main-content">
//       <div className="unique-main-section">
//         {renderContent()} {/* Main content section */}
//       </div>
//     </div>
//   );
// }

// export default MainContent;

import React, { useState } from 'react';
import './MainContent.css';
import About from '../About/About';
import AdminLogin from '../Admin/AdminLogin';
import AdminSignup from '../Admin/AdminSignup';
import EmployeeLogin from '../Employee/EmployeLogin';
import EmployeeSignup from '../Employee/EmployeSignup';
import AdminDashboard from '../AdminDashboard/AdminDashboard'; // Import AdminDashboard
import EmployeeDashboard from '../EmployeeDashboard/EmployeeDashboard'; // Import EmployeeDashboard

function MainContent({ activeItem }) {
  const [isLoggedIn, setIsLoggedIn] = useState({ admin: false, employee: false });
  const [isSignup, setIsSignup] = useState({ admin: true, employee: true });

  const handleLogin = (role) => {
    setIsLoggedIn(prevState => ({ ...prevState, [role]: true }));
  };

  const handleSignupSwitch = (role) => {
    setIsSignup(prevState => ({ ...prevState, [role]: !prevState[role] }));
  };

  const renderContent = () => {
    switch (activeItem) {
      case 'Dashboard':
        return (
          <div className="dashboard-content">
            <div className="active-item">Welcome to the Dashboard!</div>
            <div className="unique-notices">
              <div className="unique-notice-item">
                <h3>Field Application Engineer Intern Recruitment</h3>
                <p>Texas Instruments - 2 Months Summer Intern recruitment for 2026 Batch</p>
                <span className="unique-notice-date">Sun Aug 25 2024, 23:23</span>
              </div>
              <div className="unique-notice-item">
                <h3>Intern Trainee (Software)</h3>
                <p>NatWest Digital Services - Details will be shared later</p>
                <span className="unique-notice-date">Sat Aug 24 2024, 16:54</span>
              </div>
            </div>
          </div>
        );
      case 'About':
        return <About />;
      case 'Admin':
        if (isLoggedIn.admin) {
          return <AdminDashboard />; // Render AdminDashboard after login
        }
        return (
          <div className="auth-forms">
            {isSignup.admin ? (
              <AdminSignup onSwitch={() => handleSignupSwitch('admin')} />
            ) : (
              <AdminLogin onLogin={() => handleLogin('admin')} onSwitch={() => handleSignupSwitch('admin')} />
            )}
          </div>
        );
      case 'Employee':
        if (isLoggedIn.employee) {
          return <EmployeeDashboard />; // Render EmployeeDashboard after login
        }
        return (
          <div className="auth-forms">
            {isSignup.employee ? (
              <EmployeeSignup onSwitch={() => handleSignupSwitch('employee')} />
            ) : (
              <EmployeeLogin onLogin={() => handleLogin('employee')} onSwitch={() => handleSignupSwitch('employee')} />
            )}
          </div>
        );
      default:
        return <div className="active-item">Select an option from the sidebar</div>;
    }
  };

  return (
    <div className="main-content">
      <div className="unique-main-section">
        {renderContent()} 
      </div>
    </div>
  );
}

export default MainContent;

