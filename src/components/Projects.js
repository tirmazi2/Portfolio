import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonCircleQuestion,
  faEarthAmericas,
} from "@fortawesome/free-solid-svg-icons";
import CustomHook from "./CustomHook";

function Projects() {
  const [listProjects] = useState([
    {
      name: "Real-time Chat Application",
      des: "Developed a responsive web-based chat application with real-time message updates, user presence indicators, and message history. Implemented end-to-end encryption for secure communication.",
      mission:
        "Full-stack development, real-time data handling, security implementation",
      language: "React, Node.js, Socket.IO, MongoDB, JWT for authentication",
      images: "/project1.PNG",
    },
    {
      name: "E-commerce Platform",
      des: "Built a scalable e-commerce platform with features including product catalog, shopping cart, secure checkout process, and user account management. Integrated with payment gateways and implemented an admin dashboard for inventory management.",
      mission:
        "Front-end development, back-end API design, database modeling, third-party integrations",
      language:
        "Next.js, Express.js, PostgreSQL, Stripe API, Redux for state management",
      images: "/project2.PNG",
    },
    {
      name: "Data Visualization Dashboard",
      des: "Created an interactive dashboard for visualizing complex datasets. Implemented various chart types and filtering options to allow users to explore data trends. Optimized for performance with large datasets.",
      mission:
        "Front-end development, data processing, performance optimization",
      language: "Vue.js, D3.js, Node.js, Express.js, MongoDB for data storage",
      images: "/project3.PNG",
    },
  ]);
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);
  return (
    <section className="projects" ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        My Recent Work
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        Following is a collection of my latest projects, demonstrating a range
        of skills from responsive web design to complex full-stack applications.
      </div>
      <div className="list">
        {listProjects.map((value, key) => (
          <div
            className="item"
            key={key}
            ref={(el) => el && divs.current.push(el)}
          >
            <div className="images">
              <img src={value.images} alt="" />
            </div>
            <div className="content">
              <h3>{value.name}</h3>
              <div className="des">{value.des}</div>
              <div className="mission">
                <div>
                  <FontAwesomeIcon icon={faPersonCircleQuestion} />
                </div>
                <div>
                  <h4>Mission</h4>
                  <div className="des">{value.mission}</div>
                </div>
              </div>
              <div className="mission">
                <div>
                  <FontAwesomeIcon icon={faEarthAmericas} />
                </div>
                <div>
                  <h4>Languages</h4>
                  <div className="des">{value.language}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Projects;
