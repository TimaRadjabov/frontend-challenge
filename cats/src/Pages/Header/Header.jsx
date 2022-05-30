import { Link } from "react-router-dom";
import "./HeaderStyles.css";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header-nav">
        <div className="header-item">
          <Link to="/" className="header-link">
            Все котики
          </Link>
        </div>
        <div className="header-item">
          <Link to="/favorites" className="header-link">
            Любимые котики
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Header;
