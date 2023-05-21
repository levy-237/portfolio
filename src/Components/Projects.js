import React from "react";
import { Link } from "react-router-dom";
export default function Projects() {
  return (
    <div className="projects" id="projects">
      <div className="project" id="project">
        <Link to="https://printshop-nu.vercel.app" target="_blank">
          <div className="project-photo1"></div>
        </Link>
        <div className="project-description">
          Printshop Website is online platform that allows customers to print
          presented photos.Website allows users to favorite or add items to cart
          where they can simply check out. This project is built and designed by
          me from scratch.
          <div className="project-r">
            <span className="r">React</span>
            <span>CSS3</span>
          </div>
          <div className="project-end">
            <Link to="https://github.com/levy-237/printshop" target="_blank">
              <span className="project-github">
                <i class="ri-github-fill ri-2x"></i>
              </span>
            </Link>
            LIVE DEMO
            <Link to="https://printshop-nu.vercel.app" target="_blank">
              <span className="project-live">
                <i class="ri-code-s-slash-line ri-2x"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="project">
        <div className="project-photo3"></div>
        <div className="project-description">
          Yelpcamp demo website made with nodeJS and Bootstrap. Users can view
          many campgrounds all around the world. to be able to add campground by
          yourself you have to do real registration. uploader of campground can
          delete edit and review it. Project has been built by me with guidance
          of Bootcamp mentors.
          <div className="project-r">
            <span className="r">NodeJS</span>
            <span>Bootstrap</span>
          </div>
          <div className="project-end">
            <Link
              to="https://github.com/levy-237/yelpcamp-demo"
              target="_blank"
            >
              <span className="project-github">
                <i class="ri-github-fill ri-2x"></i>
              </span>
            </Link>
            LIVE DEMO
            <Link
              to="https://yelpcamp-demo.onrender.com/"
              target="_blank"
            >
              <span className="project-live">
                <i class="ri-code-s-slash-line ri-2x"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="project">
        <div className="project-photo2"></div>
        <div className="project-description">
          Movie searching website built to search any movie you want
          <div className="project-r">
            <span className="r">React</span>
            <span>CSS3</span>
          </div>
          <div className="project-end">
            <Link to="https://github.com/levy-237/movie" target="_blank">
              <span className="project-github">
                <i class="ri-github-fill ri-2x"></i>
              </span>
            </Link>
            LIVE DEMO
            <Link to="https://movie-drab-ten.vercel.app" target="_blank">
              <span className="project-live">
                <i class="ri-code-s-slash-line ri-2x"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
