// components/Footer.js

export default function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-4">
      <div className="container">
        <p>&copy; 2024 Gabriela Ceolin. All rights reserved.</p>
        <p>
          <a
            href="https://www.linkedin.com/in/gabriela-ceolin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-decoration-none mx-2"
          >
            LinkedIn
          </a>
          |
          <a
            href="https://github.com/gabriela-ceolin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-decoration-none mx-2"
          >
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
}
