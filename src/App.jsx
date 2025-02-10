// import React, { useState, useEffect } from "react";
// import Preloader from "../src/components/Pre";
// import Navbar from "./components/Navbar";
// import Home from "./components/Home/Home";
// import About from "./components/About/About";
// import Projects from "./components/Projects/Projects";
// import Footer from "./components/Footer";
// import Resume from "./components/Resume/ResumeNew";
// import Cursor from "./components/Cursor"; // Import animated cursor

// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Navigate
// } from "react-router-dom";
// import ScrollToTop from "./components/ScrollToTop";
// import "./style.css";
// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";

// function App() {
//   const [load, upadateLoad] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       upadateLoad(false);
//     }, 1200);

//     return () => clearTimeout(timer);
//   }, []);

 
//   return (
//   <Router>
//     <Preloader load={load} />
//     <div className="App" id={load ? "no-scroll" : "scroll"}>
//       <Cursor /> {/* Animated Cursor */}
//       <Navbar />
//       <ScrollToTop />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/project" element={<Projects />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/resume" element={<Resume />} />
//         <Route path="*" element={<Navigate to="/" />} />
//       </Routes>
//       <Footer />
//     </div>
//   </Router>
// );

// }

// export default App;

//2


// import React, { useState, useEffect } from "react";
// import Preloader from "../src/components/Pre";
// import Navbar from "./components/Navbar";
// import Home from "./components/Home/Home";
// import About from "./components/About/About";
// import Projects from "./components/Projects/Projects";
// import Footer from "./components/Footer";
// import Resume from "./components/Resume/ResumeNew";
// import Cursor from "./components/Cursor"; // Import animated cursor

// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Navigate
// } from "react-router-dom";
// import ScrollToTop from "./components/ScrollToTop";
// import "./style.css";
// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";

// function App() {
//   const [load, updateLoad] = useState(true); // Fixed typo here

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       updateLoad(false); // Fixed typo here
//     }, 1200);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <Router>
//       <Preloader load={load} />
//       <div className="App" id={load ? "no-scroll" : "scroll"}>
//         <Cursor /> {/* Animated Cursor */}
//         <Navbar />
//         <ScrollToTop />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/project" element={<Projects />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/resume" element={<Resume />} />
//           <Route path="*" element={<Navigate to="/" />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

//3

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import Cursor from "./components/Cursor";
import ScrollToTop from "./components/ScrollToTop";
import LoadingSpinner from "./components/LoadingSpinner"; // Import Loader
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // Adjust timing if needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {loading ? (
        <LoadingSpinner /> // Show spinningBubbles loader while loading
      ) : (
        <div className="App">
          {/* <Cursor /> */}
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;
