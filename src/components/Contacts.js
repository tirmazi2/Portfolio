import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import CustomHook from "./CustomHook";

function Contacts() {
  const [listContacts] = useState([
    {
      icon: faPhone,
      value: "+491636443930",
    },
    {
      icon: faEnvelope,
      value: "alihamzatirmazi@gmail.com",
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    // Create a mailto link
    const mailtoLink = `mailto:alihamzatirmazi@gmail.com?subject=Contact from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;

    // Open the user's email client with the filled-out information
    window.location.href = mailtoLink;
  };

  return (
    <>
      <section className="contacts" ref={scrollTab}>
        <div className="title" ref={(el) => el && divs.current.push(el)}>
          Contact Me
        </div>
        <div className="des" ref={(el) => el && divs.current.push(el)}>
          Feel free to reach out to me using any of the contact methods below.
        </div>
        <div className="list" ref={(el) => el && divs.current.push(el)}>
          {listContacts.map((item, key) => (
            <div className="item" key={key}>
              <FontAwesomeIcon icon={item.icon} size="2x" />
              <div>{item.value}</div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="contact-form" ref={(el) => el && divs.current.push(el)}>
          <h3>Send a Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
      <footer>
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Made with ❤️ and React.js</p>
        </div>
      </footer>
    </>
  );
}

export default Contacts;
