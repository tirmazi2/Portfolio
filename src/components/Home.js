import React, { useRef } from "react";
import CustomHook from "./CustomHook";
function Home() {
  const scrollTab = useRef();
  CustomHook(scrollTab);

  return (
    <section ref={scrollTab} className="home">
      <div className="content">
        <div className="name">
          Hi, I'm <span>Tirmazi</span>
        </div>
        <div className="des">
          {/* 30 */}
          Full-stack developer turning ambitious ideas into powerful, scalable
          web applications. With expertise spanning both front-end finesse and
          back-end robustness, I craft end-to-end digital solutions that drive
          business growth. Let's collaborate to bring your vision to life and
          create your next digital success story.
        </div>

        <a
          href="https://github.com/tirmazi2"
          target="_blank"
          rel="noopener noreferrer"
          className="animation active "
        >
          Check My Github
        </a>
      </div>
      <div className="avatar">
        <div className="card">
          <img src="/dev.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Home;
