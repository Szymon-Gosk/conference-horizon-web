
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Strona Główna", path: "/" },
    { name: "Program", path: "/program" },
    { name: "Prelegenci", path: "/prelegenci" },
    { name: "Komitety", path: "/komitety" },
    { name: "Patronaty", path: "/patronaty" },
    { name: "Regulamin", path: "/regulamin" },
    { name: "Kontakt", path: "/kontakt" },
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-md fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center space-x-4">
              {/* First logo */}
              <img
                className="h-12 w-auto"
                src="/logos/university.png"
                alt="University Logo"
                loading="lazy"
              />
              {/* Second logo */}
              <img
                className="h-12 w-auto"
                src="/logos/group.png"
                alt="Group Logo"
                loading="lazy"
              />
            </div>
            <div className="hidden lg:ml-6 lg:flex lg:space-x-6 items-center">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`${
                    location.pathname === item.path
                      ? "text-primary border-b-2 border-primary"
                      : "text-gray-700 hover:text-primary transition-colors"
                  } px-3 py-2 text-sm font-medium`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <a
              href="https://docs.google.com/forms/d/1PMJ23ZdFKyMurQVGjYjmHZJ3jbpS7oFvxzGd_4RPfNM"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-hover text-white px-6 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Rejestracja
            </a>
            <button
              className="lg:hidden ml-4 text-gray-700"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`${
                  location.pathname === item.path
                    ? "bg-primary text-white"
                    : "text-gray-700 hover:bg-primary-light hover:text-primary"
                } block px-3 py-2 rounded-md text-base font-medium`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
