import React from "react";
import { DiGithubBadge } from "react-icons/di";
import "./Footer.css";
function Footer() {
  return (
    <div className="Footer">
      <div className="Footer-container"></div>
      <DiGithubBadge variant={"light"} />
    </div>
  );
}

export default Footer;
