// import React from "react";
// import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";

// function AboutCard() {
//   return (
//     <Card className="quote-card-view">
//       <Card.Body>
//         <blockquote className="blockquote mb-0">
//           <p style={{ textAlign: "justify" }}>
//             Hi Everyone, I am <span className="purple">Soumyajit Behera</span> 
//             from <span className="purple">Bhubaneswar, India.</span>
//             <br />
//             I am currently employed as a software developer at Juspay.
//             <br />
//             I have completed Integrated MSc (IMSc) in Maths and Computing at BIT 
//             Mesra.
//             <br />
//             <br />
//             Apart from coding, some other activities that I love to do!
//           </p>
//           <ul>
//             <li className="about-activity">
//               <ImPointRight /> Playing Games
//             </li>
//             <li className="about-activity">
//               <ImPointRight /> Writing Tech Blogs
//             </li>
//             <li className="about-activity">
//               <ImPointRight /> Travelling
//             </li>
//           </ul>
//           <p style={{ color: "rgb(155 126 172)" }}>
//             "Strive to build things that make a difference!"
//           </p>
//           <footer className="blockquote-footer">Soumyajit</footer>
//         </blockquote>
//       </Card.Body>
//     </Card>
//   );
// }

// export default AboutCard;

import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Diptendu Kumar Jashu </span> 
            from <span className="purple">Kolkata, India.</span>
            <br />
            I am currently pursuing a B.Tech in Computer Science and Engineering 
            with a specialization in AI & ML at SRM University, Andhra Pradesh.
            <br />
            Previously, I completed a Diploma in Mechanical Engineering at Jnan Chandra 
            Ghosh Polytechnic, Kolkata.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring AI & ML Innovations
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Web Development
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
          </ul>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Building tech solutions that create an impact!"
          </p>
          <footer className="blockquote-footer">Diptendu</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
