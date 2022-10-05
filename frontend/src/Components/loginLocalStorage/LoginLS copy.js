// // Using Local Storage
// // https://www.youtube.com/watch?v=UBV2vtkKR5o
// // https://github.com/AkajithAk/youtubeReact/tree/main/src/Components/LoginWithLocalstorage

// import React from 'react';
// import { useRef } from 'react';

// // import login home page
// import LoginLSHome from './LoginLSHome';

// const LoginLS = () => {
//   // set variables for login
//   const username = useRef();
//   const password = useRef();

//   // get the variables from local storage
//   const getUsername=localStorage.getItem("usernameData");
//   const getPassword=localStorage.getItem("passwordData");

//   // set the variables to local storage
//   const handleSubmit = () => {
//     if (username.current.value=="adminuser"&&password.current.value=="admin123"){
//       localStorage.setItem("usernameData", "adminuser");
//       localStorage.setItem("passwordData", "admin123");
//     }
//   }

//   // ternary for either home page or login form
//   return (
//     <div>
//       {
//         getUsername && getPassword ? <LoginLSHome /> :
//         <form onSubmit={handleSubmit}>
//           <div>
//             <input type="text" ref={username} placeholder="username" />
//           </div>
//           <div>
//           <input type="password" ref={password} placeholder="password" />
//           </div>
//           <button>Login</button>
//         </form>
//       }
//     </div>
//   )
// }

// export default LoginLS;