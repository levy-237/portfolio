import React from "react";
import { Link } from "react-router-dom";
export default function Description() {
  return (
    <div className="description">
      <h1>
        Hi, i'm Levan | Software <br></br>Engineer
      </h1>

      <div className="icons">
        <span>
          <Link to="https://github.com/levy-237" target="_blank">
            <i class="ri-github-fill ri-2x"></i>
          </Link>
        </span>
        <Link
          to="https://www.linkedin.com/in/levan-lominashvili-92b770220/"
          target="_blank"
        >
          <i class="ri-linkedin-box-fill ri-2x"></i>
        </Link>
        <p>
          Passionate and dedicated web developer with a strong love for
          coding.🚀
        </p>
      </div>

      <div className="dev">
        <span>Tech Stack</span>
        <span>
          <i class="ri-javascript-fill ri-3x"></i>
        </span>{" "}
        <span>
          {" "}
          <i class="ri-reactjs-fill ri-3x"></i>{" "}
        </span>{" "}
        <span>
          {" "}
          <i class="ri-html5-fill ri-3x"></i>{" "}
        </span>{" "}
        <span>
          {" "}
          <i class="ri-css3-fill ri-3x"></i>{" "}
        </span>{" "}
        <span>
          {" "}
          <i class="ri-npmjs-line ri-3x"></i>{" "}
        </span>
      </div>
    </div>
  );
}
