import "./Footer.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo-container">
        <img className="footer__logo" src={logo} alt="TAN Logo" />
      </div>

      <div className="footer__column">
        <h3 className="footer__heading">CHAPTER</h3>

        <Link className="footer__link" to="/documentaries">
          DOCUMENTARIES
        </Link>

        <Link className="footer__link" to="/museum">
          MUSEUM & HERITAGE
        </Link>

        <Link className="footer__link" to="/books">
          BOOKS
        </Link>

        <Link className="footer__link" to="/podcasts">
          PODCASTS
        </Link>
      </div>

      <div className="footer__column">
        <h3 className="footer__heading">SOCIAL</h3>

        <a
          className="footer__link"
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          FACEBOOK
        </a>

        <a
          className="footer__link"
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          INSTAGRAM
        </a>

        <a
          className="footer__link"
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          YOUTUBE
        </a>
      </div>

      <div className="footer__column">
        <h3 className="footer__heading">CONTACT</h3>

        <a className="footer__link" href="mailto:tan@info.com">
          TAN@info.com
        </a>

        <a className="footer__link" href="tel:+99999999999">
          +99 (999) 99-99-999
        </a>
      </div>
    </footer>
  );
}

export default Footer;
