import logo from "../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Header.css";

function Header() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();

    if (!search.trim()) return;

    navigate(`/search/${search}`);
  }
  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <img className="header__logo-image" src={logo} alt="Logo" />
      </Link>

      <nav className="header__menu">
        <NavLink to="/books">BOOKS</NavLink>

        <NavLink to="/podcasts">PODCASTS</NavLink>

        <NavLink to="/museum">MUSEUMS</NavLink>

        <NavLink to="/documentaries">DOCUMENTARIES</NavLink>
      </nav>

      <div className="header__search">
        <form className="header__search-form" onSubmit={handleSubmit}>
          <input
            className="header__search-input"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
          />

          <button className="header__search-button" type="submit">
            <FontAwesomeIcon
              className="header__search-icon"
              icon={faMagnifyingGlass}
            />
          </button>
        </form>
      </div>
    </header>
  );
}

export default Header;
