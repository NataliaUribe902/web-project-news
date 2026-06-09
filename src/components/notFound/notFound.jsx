import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="notfound">
      <h1 className="notfound__title">404</h1>
      <p className="notfound__text">
        La página que buscas no existe o fue movida.
      </p>

      <Link to="/" className="notfound__link">
        Volver al inicio →
      </Link>
    </div>
  );
}

export default NotFound;
