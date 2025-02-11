import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Sun, Moon, ShoppingCart } from "lucide-react";
import CartWidget from "./CartWidget";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="bg-blue-600 dark:bg-gray-900 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">
          MyWebsite
        </Link>
        <div className="flex items-center">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-white mr-4"
          >
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <CartWidget />
          <button onClick={() => setIsOpen(!isOpen)} className="text-white md:hidden">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <ul
          className={`md:flex md:space-x-6 absolute md:static left-0 top-16 w-full md:w-auto bg-blue-600 dark:bg-gray-900 md:bg-transparent transition-transform transform ${
            isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          } md:flex-row flex flex-col items-center md:items-start md:py-0 py-4`}
        >
          <li>
            <Link to="/" className="text-white hover:text-gray-300 p-2 block">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-gray-300 p-2 block">
              Sobre Nosotros
            </Link>
          </li>
          <li>
            <Link to="/services" className="text-white hover:text-gray-300 p-2 block">
              Servicios
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-gray-300 p-2 block">
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
