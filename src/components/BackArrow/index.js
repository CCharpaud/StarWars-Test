import React from "react";

// Package
import { Link } from "react-router-dom";

// Style
import "../BackArrow/style.css";

export default function BackArrow() {
  return (
    <Link>
      <div className="wrapper">
        <div className="backArrowContainer">
          <Link to={"/home"}>Back to Home</Link>
        </div>
      </div>
    </Link>
  );
}
