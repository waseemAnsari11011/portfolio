"use client";
import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiHome, FiBriefcase } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { RiServiceLine } from "react-icons/ri";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaCode,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

import { FiFileText, FiMessageSquare } from "react-icons/fi";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import { Link as ScrollLink } from "react-scroll";
const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <header className="bg-linkedin-blue fixed top-0 left-0 right-0 backdrop-filter backdrop-blur-lg" style={{ zIndex: 2 }}>
      <div className="container p-4 mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link href="/">Waseem</Link>
        </div>

        <div className="text-white text-xl">
          {/* Hamburger icon for mobile */}
          <button
            className="focus:outline-none focus:text-white"
            onClick={toggleSidebar}
          >
            {showSidebar ? (
              <FiX className="h-6 w-6 fill-current" />
            ) : (
              <FiMenu className="h-6 w-6 fill-current" />
            )}
          </button>
        </div>
        {/* Sidebar menu for mobile */}
        <Transition
          show={showSidebar}
          enter="transition-all duration-300 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition-all duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
          className="fixed top-0 left-0 h-screen w-56 sm:w-64 md:w-72 lg:w-80 bg-slate-100 flex flex-col justify-between"
        >
          {/* Sidebar content */}
          <div>
            <div className="flex flex-col items-center my-5">
              <div className="rounded-full overflow-hidden w-16 h-16 border-white border-2">
                <Image
                  src="/waseem.jpg"
                  alt="My Image"
                  width={100}
                  height={100}
                />
              </div>
              <p className="mt-1">Waseem</p>
            </div>
            {/* Other links */}
            {/* <Link href="/projects" className="block p-5 flex items-center">
              <FiHome className="h-5 w-5 mr-3" />
              <h3>Home</h3>
            </Link> */}

            <ScrollLink
              to="intro-section" // Replace with the ID of the home section
              smooth={true}
              onClick={() => setShowSidebar(false)} // Close sidebar on click
              className="block px-5 py-3 flex items-center cursor-pointer"
            >
              <FiHome className="h-5 w-5 mr-3" />
              <h3>Home</h3>
            </ScrollLink>
            <ScrollLink
              to="about-section" // Replace with the ID of the home section
              smooth={true}
              onClick={() => setShowSidebar(false)} // Close sidebar on click
              className="block px-5 py-3 flex items-center cursor-pointer"
            >
              <AiOutlineUser className="h-5 w-5 mr-3" />
              <h3>About me</h3>
            </ScrollLink>
            <ScrollLink
              to="projects-section" // Replace with the ID of the home section
              smooth={true}
              onClick={() => setShowSidebar(false)} // Close sidebar on click
              className="block px-5 py-3 flex items-center cursor-pointer"
            >
              <FiFileText className="h-5 w-5 mr-3" />
              <h3>Projects</h3>
            </ScrollLink>
            <ScrollLink
              to="skills-section" // Replace with the ID of the home section
              smooth={true}
              onClick={() => setShowSidebar(false)} // Close sidebar on click
              className="block px-5 py-3 flex items-center cursor-pointer"
            >
              <FaCode className="h-5 w-5 mr-3" />
              <h3>Skills</h3>
            </ScrollLink>
            <ScrollLink
              to="services-section" // Replace with the ID of the home section
              smooth={true}
              onClick={() => setShowSidebar(false)} // Close sidebar on click
              className="block px-5 py-3 flex items-center cursor-pointer"
            >
              <RiServiceLine className="h-5 w-5 mr-3" />
              <h3>Services</h3>
            </ScrollLink>
            {/* <ScrollLink
              to="testimonials-section" // Replace with the ID of the home section
              smooth={true}
              onClick={() => setShowSidebar(false)} // Close sidebar on click
              className="block px-5 py-3 flex items-center cursor-pointer"
            >
              <FiMessageSquare className="h-5 w-5 mr-3" />
              <h3>Testimonials</h3>
            </ScrollLink> */}
            <ScrollLink
              to="contact-section" // Replace with the ID of the home section
              smooth={true}
              onClick={() => setShowSidebar(false)} // Close sidebar on click
              className="block px-5 py-3 flex items-center cursor-pointer"
            >
              <HiOutlineMail className="h-5 w-5 mr-3" />
              <h3>Contact me</h3>
            </ScrollLink>
          </div>
          <div className="flex justify-center pb-5">
            {/* Social media icons */}
            <Link href="/" className="mr-3">
              <FaFacebook className="h-5 w-5" />
            </Link>
            <Link href="/" className="mr-3">
              <FaTwitter className="h-5 w-5" />
            </Link>
            <Link href="/" className="mr-3">
              <FaInstagram className="h-5 w-5" />
            </Link>
            <Link href="/" className="mr-3">
              <FaLinkedin className="h-5 w-5" />
            </Link>
          </div>
        </Transition>
      </div>
    </header>
  );
};

export default Header;
