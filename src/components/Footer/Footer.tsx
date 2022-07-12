import "./footer.scss";
import json from "../../../siteData.json";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>
          Your feedback matters. If you are interested in what Adhocado has to
          offer, send in an inquiry and we will get back to you!
        </p>
        <div className="contact-info">Email: {json.company_email}</div>
      </div>
    </footer>
  );
};

export default Footer;
