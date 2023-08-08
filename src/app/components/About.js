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
        I'm a passionate Full Stack Developer.
        </p>
        <p className="text-base md:text-lg font-light text-slate-600 text-zinc-500">
        Hi there! I'm Waseem, a passionate Full Stack Developer based in Noida, India. Ever since I wrote my first line of code, I've been captivated by the power of technology to shape the digital world. I enjoy creating seamless user experiences and building robust applications that make a positive impact.

        </p>
        {/* <div className="flex  justify-between items-center my-7">
          <div className="flex items-center mb-4 md:mb-0">
            <p className="text-5xl md:text-6xl font-black mr-2">6</p>
            <p className="text-base md:text-lg font-light text-slate-600 text-zinc-500">
              Projects completed
            </p>
          </div>
          <div className="flex items-center">
            <p className="text-5xl md:text-6xl font-black mr-2">3</p>
            <p className="text-base md:text-lg font-light text-slate-600 text-zinc-500">
              Satisfied clients
            </p>
          </div>
        </div> */}

        {/* <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 shadow-2xl">
          Contact me
        </button> */}
      </div>
    </div>
  );
};

export default About;
