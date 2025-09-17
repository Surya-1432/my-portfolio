// import React from "react";

// function Navbar({ setActiveSection, activeSection }) {
//   return (
//     <nav className="fixed top-0 left-0 w-full bg-[#08354C] shadow-md z-50">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//         <h1
//           className="text-2xl font-bold text-cyan-400 cursor-pointer"
//           onClick={() => setActiveSection("home")}
//         >
//           MyPortfolio
//         </h1>
//         <ul className="flex space-x-6 text-lg">
//           {["home", "about", "skills", "experience", "education", "projects", "contact"].map(
//             (section) => (
//               <li
//                 key={section}
//                 onClick={() => setActiveSection(section)}
//                 className={`cursor-pointer transition ${
//                   activeSection === section ? "text-cyan-400" : "hover:text-cyan-300"
//                 }`}
//               >
//                 {section.charAt(0).toUpperCase() + section.slice(1)}
//               </li>
//             )
//           )}
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
