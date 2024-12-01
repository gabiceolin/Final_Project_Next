//Gabriela Ceolin 200550539
// components/Navbar.js
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <Link href="/" className="navbar-brand">
        Gabriela Ceolin
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link href="/about" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link href="/resume" className="nav-link">Resume</Link>
          </li>
          <li className="nav-item">
            <Link href="/portfolio" className="nav-link">Portfolio</Link>
          </li>
          <li className="nav-item">
            <Link href="/blog" className="nav-link">Blog</Link>
          </li>
          <li className="nav-item">
            <Link href="/contact" className="nav-link">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;

