"use client"
import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX, FiHome, FiBriefcase } from 'react-icons/fi';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineFundView } from 'react-icons/ai';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import Image from 'next/image';
import { Transition } from '@headlessui/react';

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <header className="bg-gray-800 relative" style={{ zIndex: 2 }}>
      <div className="container p-4 mx-auto flex justify-between items-center relative">
        <div className="text-white text-2xl font-bold">
          <Link href="/">Your Name</Link>
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
          className=" absolute top-0 left-0 h-screen w-56 bg-slate-100 flex flex-col justify-between"
        >
          <div>
            <div className="flex flex-col items-center my-5">
              <div className="rounded-full overflow-hidden w-16 h-16 border-white border-2">
                <Image
                  src="/profile.jpg"
                  alt="My Image"
                  width={100}
                  height={100}
                />
              </div>
              <p className="mt-1">Your name</p>
            </div>
            {/* Other links */}
            <Link href="/projects" className="block p-5 flex items-center">
              <FiHome className="h-5 w-5 mr-3" />
              <h3>Home</h3>
            </Link>
            <Link href="/about" className="block p-5 flex items-center">
              <AiOutlineUser className="h-5 w-5 mr-3" />
              <h3>About me</h3>
            </Link>
            <Link href="/projects" className="block p-5 flex items-center">
              <FiBriefcase className="h-5 w-5 mr-3" />
              <h3>Services</h3>
            </Link>
            <Link href="/projects" className="block p-5 flex items-center">
              <AiOutlineFundView className="h-5 w-5 mr-3" />
              <h3>Projects</h3>
            </Link>
            <Link href="/skills" className="block p-5 flex items-center">
              <HiOutlineMail className="h-5 w-5 mr-3" />
              <h3>Contact me</h3>
            </Link>
          </div>
          <div className="flex justify-center pb-5">
            {/* Social media icons */}
            <Link href="/skills" className="mr-3">
              <FaFacebook className="h-5 w-5" />
            </Link>
            <Link href="/skills" className="mr-3">
              <FaTwitter className="h-5 w-5" />
            </Link>
            <Link href="/skills" className="mr-3">
              <FaInstagram className="h-5 w-5" />
            </Link>
            <Link href="/skills" className="mr-3">
              <FaLinkedin className="h-5 w-5" />
            </Link>
          </div>
        </Transition>
      </div>
    </header>
  );
};

export default Header;
