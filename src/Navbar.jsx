// Navbar.jsx
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="prims.svg" alt="Logo" className="logo" />

        {/* Transparent input field replacing text */}
        <input
          type="text"
          placeholder="Search..."
          className="navbar-search"
        />
      </div>

      <div className="navbar-right">
        <a href="#">Home</a>
        <a href="#">Docs</a>
        <a href="#">About</a>
      </div>
    </nav>
  );
}
