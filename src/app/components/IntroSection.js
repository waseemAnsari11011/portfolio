"use client"
import Image from "next/image";
import ParticleBackground from "./ParticleBackground";
import { Link as ScrollLink } from "react-scroll";

const IntroSection = () => {
  return (
    <div>
      <ParticleBackground />
      {/* Intro Content */}
      <div
        id="intro-section"
        className="flex flex-col-reverse lg:flex-row justify-between p-5 md:p-10 lg:p-16 relative"
        style={{ zIndex: 1 }}
      >
        <div className="mt-10">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
            Hello, I am
          </h1>
          <div className="my-6">
            <h2 className="text-5xl md:text-7xl font-black ">Waseem</h2>
            <h2 className="text-5xl md:text-7xl font-black ">Ahmad</h2>
          </div>

          <p className="text-xl md:text-2xl font-bold">I'm a passionate Full Stack Developer</p>
          <p className="text-base md:text-lg mt-6 font-medium text-zinc-500">
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services, mobile apps and
            online stores.
          </p>

          <div className="mt-5">
          <ScrollLink
              to="contact-section" // Replace with the ID of the home section
              smooth={true}
              // onClick={() => setShowSidebar(false)} // Close sidebar on click
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4"
            >
              Contact me
            </ScrollLink>
          </div>

          

    
        </div>
        <div className="w-950 h-950 rounded-full overflow-hidden mt-20 lg:ml-10">
          <Image
            src="/waseem.jpg"
            alt="My Image"
            width={950}
            height={950}
            layout="responsive"
            objectFit="cover"
            className="rounded-full"
          />
        </div>

      </div>
    </div>
  );
};

export default IntroSection;
