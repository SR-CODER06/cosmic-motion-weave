
import { Link } from 'react-scroll';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#221F26]/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <ul className="flex justify-center space-x-8">
          <li>
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={1000}
              className="text-white hover:text-purple-400 cursor-pointer transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              duration={1000}
              className="text-white hover:text-purple-400 cursor-pointer transition-colors"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              duration={1000}
              className="text-white hover:text-purple-400 cursor-pointer transition-colors"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={1000}
              className="text-white hover:text-purple-400 cursor-pointer transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
