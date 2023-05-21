import React from "react";
import { HashLink } from "react-router-hash-link";
export default function Header() {
  return (
    <header className="header">
      <HashLink smooth to="/#about">
        ABOUT
      </HashLink>
      <HashLink smooth to="/#project">
        PROJECTS
      </HashLink>
      <HashLink smooth to="/#contact">
        CONTACT
      </HashLink>
    </header>
  );
}
