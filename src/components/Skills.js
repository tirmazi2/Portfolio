import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faHtml5,
  faCss3,
  faJs,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";
import CustomHook from "./CustomHook";

function Skills() {
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);
  const [listSkills] = useState([
    {
      name: "HTML",
      des: "Foundational markup language for structuring web content. Proficient in creating semantic, accessible, and SEO-friendly page layouts that form the backbone of modern web applications.",
      icon: faHtml5,
    },
    {
      name: "CSS",
      des: "Styling language used to design and layout web pages. Skilled in responsive design, CSS animations, and modern layout techniques like Flexbox and Grid to create visually appealing and user-friendly interfaces.",
      icon: faCss3,
    },
    {
      name: "JavaScript",
      des: "Core programming language of the web. Experienced in both client-side and server-side JavaScript, including ES6+ features, asynchronous programming, and DOM manipulation for creating dynamic and interactive web applications.",
      icon: faJs,
    },
    {
      name: "ReactJs",
      des: "Popular JavaScript library for building user interfaces. Proficient in component-based architecture, state management (Redux/Context API), and hooks for developing efficient, maintainable, and scalable front-end applications.",
      icon: faReact,
    },
    {
      name: "NextJs",
      des: "React framework for production-grade applications. Experienced in server-side rendering, static site generation, and API routes to build high-performance, SEO-friendly web applications with improved developer experience.",
      icon: faCodepen, // Using Node.js icon as a close alternative
    },
    {
      name: "Solidity",
      des: "Object-oriented programming language for writing smart contracts on various blockchain platforms, primarily Ethereum. Skilled in developing decentralized applications (DApps) and implementing blockchain-based solutions.",
      icon: faCodepen, // Using Ethereum icon as it's closely associated with Solidity
    },
  ]);
  return (
    <section className="skills" ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        Technical Expertise
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
        With a robust technical skill set, I specialize in a range of front-end
        and blockchain technologies, delivering dynamic, scalable, and efficient
        solutions.
      </div>
      <div className="list">
        {listSkills.map((value, key) => (
          <div
            className={"item "}
            key={key}
            ref={(el) => el && divs.current.push(el)}
          >
            <FontAwesomeIcon icon={value.icon} />
            <h3>{value.name}</h3>
            <div className="des">{value.des}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
