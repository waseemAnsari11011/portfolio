import Image from "next/image";

const About = () => {
  return (
    <div
      id="about-section"
      className="flex flex-col lg:flex-row items-center relative bg-stone-50 p-5 md:p-10 lg:p-16"
      style={{ zIndex: 1 }}
    >
      <div className="flex-1 mt-10 lg:mr-10">
        <Image src="/about-me.png" alt="My Image" width={450} height={450} />
      </div>

      <div className="flex-1 mt-10">
        <h1 className="text-2xl md:text-4xl lg:text-3xl font-light">
          ABOUT ME
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl my-6 font-semibold">
          I'm a Freelancer Front-end Developer with over 3 years of experience.
        </p>
        <p className="text-base md:text-lg font-light text-slate-600 text-zinc-500">
          I'm a Freelancer Front-end Developer with over 3 years of experience.
          I'm from San Francisco. I code and create web elements for amazing
          people around the world. I like to work with new people. New people,
          new experiences.
        </p>
        <div className="flex  justify-between items-center my-7">
          <div className="flex items-center mb-4 md:mb-0">
            <p className="text-5xl md:text-6xl font-black mr-2">5k</p>
            <p className="text-base md:text-lg font-light text-slate-600 text-zinc-500">
              Projects completed
            </p>
          </div>
          <div className="flex items-center">
            <p className="text-5xl md:text-6xl font-black mr-2">5k</p>
            <p className="text-base md:text-lg font-light text-slate-600 text-zinc-500">
              Satisfied clients
            </p>
          </div>
        </div>

        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 shadow-2xl">
          Contact me
        </button>
      </div>
    </div>
  );
};

export default About;
