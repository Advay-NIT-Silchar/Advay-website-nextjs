import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="social-media-icons z-10">
      <a
        href="https://www.facebook.com/advaynits"
        target="_blank"
        title="Facebook"
        className="icon"
        aria-label="Facebook"
      >
        <span>
          <FaFacebookF />
        </span>
      </a>
      <a
        href="https://www.instagram.com/advaynits"
        target="_blank"
        title="Instagram"
        className="icon"
        aria-label="Instagram"
      >
        <FaInstagram />
      </a>
      <a
        href="https://www.linkedin.com/company/advaynits/"
        target="_blank"
        className="icon"
        aria-label="LinkedIn"
      >
        <FaLinkedinIn />
      </a>
      <a
        href="https://www.youtube.com/@advaynits"
        target="_blank"
        className="icon"
        aria-label="YouTube"
      >
        <FaYoutube />
      </a>
    </div>
  );
};

export default Sidebar;
