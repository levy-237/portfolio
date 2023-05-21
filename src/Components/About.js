import React from "react";
import image from "../images/laptop.webp";
export default function About() {
  return (
    <div className="about-grid">
      <div className="about" id="about">
        <div className="about-p">
          <h2>ABOUT ME</h2>
          <h3>
            A dedicated full-stack web developer from Georgia based in Vienna,
            Austria📍
          </h3>
          <p>
            Aspiring web developer from Georgia, currently a student at the
            University of Vienna, seeking opportunities in web development.
            Passionate about coding and eager to apply my skills and knowledge
            in a professional setting. Committed to learning and growing as a
            web developer.
          </p>
        </div>
      </div>
      <div className="contact" id="contact">
        <h2>Contact Me</h2>
        <h3>
          If you're in search of a motivated web developer to join your
          organization, I'd love to hear from you. Feel free to reach out using
          the contact details below, and let's embark on an incredible journey
          together.
        </h3>
        <p className="email">
          <b>Email:</b> levanilominashvili23@gmail.com
        </p>
        <p className="phone">
          <b>Phone Number:</b> +43 676 9312986
        </p>
      </div>
    </div>
  );
}
