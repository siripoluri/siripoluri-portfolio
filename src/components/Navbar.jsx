import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        {/* LinkedIn Icon */}
        <a
          href="https://www.linkedin.com/in/siri-poluri"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        {/* GitHub Icon */}
        <a
          href="https://github.com/siripoluri"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        {/* Email Icon */}
        <a
          href="mailto:siripoluri09@gmail.com"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
