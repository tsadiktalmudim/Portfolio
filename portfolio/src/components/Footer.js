import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="footer-pin">
      <div className="footer">
        <div>
          <h5>
            © All code by
            <p>Xan Hamilton</p>
          </h5>
        </div>
        <div>
          <ul className="social-menu">
            <li>
              <a href="https://www.facebook.com/xan.hamilton.7/">
                <FontAwesomeIcon className="i" icon={faFacebookSquare}/>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/thomas-hamilton-522b17181/">
                <FontAwesomeIcon className="i" icon={faLinkedin} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
