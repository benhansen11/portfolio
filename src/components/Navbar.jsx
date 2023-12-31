import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import logo from "../assets/c_of_i_logo.png";
import { Link } from "react-scroll";
import Resume from "../assets/Ben_Hansen_Resume_2023.pdf";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="header flex justify-between items-center px-4 bg-[#794d85] text-gray-300">
      <div className="hover-effect">
        <a href="https://www.collegeofidaho.edu/">
          <img src={logo} alt="logo image" style={{ width: "100px" }} />
        </a>
      </div>
      {/* menu */}
      <ul className="hidden md:flex">
        <li className="hover-effect">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover-effect">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="hover-effect">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="hover-effect">
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="hover-effect">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-screen h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link on onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            on
            onClick={handleClick}
            to="about"
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            on
            onClick={handleClick}
            to="skills"
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            on
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            on
            onClick={handleClick}
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/ben-hansen-56801724a/"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/benhansen11"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <Link to="contact" smooth={true} duration={500}>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
              <a className="flex justify-between items-center w-full text-gray-300">
                Email <HiOutlineMail size={30} />
              </a>
            </li>
          </Link>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href={Resume}
              download="Ben_Hansen_Resume_2023.pdf"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>

      {/* Switch social icons to navbar
      <div className="lg:hidden flex flex-row fixed left-[35%] top-5">
        <ul>
          <li className="w-[60px] h-[60px] flex justify-between items-center ml-[-100px] bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/ben-hansen-56801724a/"
            >
               <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[60px] h-[60px] flex justify-between items-center ml-[-100px] bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/benhansen11"
            >
               <FaGithub size={30} />
            </a>
          </li>
          <Link to="contact" smooth={true} duration={500}>
            <li className="w-[60px] h-[60px] flex justify-between items-center ml-[-100px] bg-[#6fc2b0]">
              <a className="flex justify-between items-center w-full text-gray-300">
                 <HiOutlineMail size={30} />
              </a>
            </li>
          </Link>
          <li className="w-[60px] h-[60px] flex justify-between items-center ml-[-100px] bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href={Resume}
              download="Ben_Hansen_Resume_2023.pdf"
            >
               <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default Navbar;
