import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
function ProjectItem({ image, name, id, linkToPage }) {
  const navigate = useNavigate();
  return (
    <a
      href={linkToPage}
      target="_blank"
      style={{ textDecoration: "none" }}
      className="link"
    >
      <div className="projectItem">
        <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
        <h1> {name} </h1>
      </div>
    </a>
  );
}

export default ProjectItem;