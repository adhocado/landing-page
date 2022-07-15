import "./footer.scss";
import json from "../../../siteData.json";
import logo from "../../assets/logo.webp";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <img height="28px" src={logo} />
        <div className="footer-content">
          <p>
            Your feedback matters. If you are interested in what Adhocado has to
            offer, send in an inquiry and we will get back to you!
          </p>
          <div className="contact-info">
            Email us at{" "}
            <a href={"mailto:" + json.company_email}>{json.company_email}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
