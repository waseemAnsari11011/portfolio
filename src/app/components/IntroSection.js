import Image from 'next/image';
import ParticleBackground from './ParticleBackground';

const IntroSection = () => {
    return (
        <div>
            <ParticleBackground />
            {/* Intro Content */}
            <div className="flex flex-col-reverse lg:flex-row justify-between p-10 relative" style={{ zIndex: 1 }}>
                <div className="mt-10">
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">Hello, I am</h1>
                    <div className="my-6">
                        <h2 className="text-5xl md:text-7xl font-black ">Sergio</h2>
                        <h2 className="text-5xl md:text-7xl font-black ">Gadot</h2>
                    </div>

                    <p className="text-xl md:text-2xl font-bold">I Am Passionate</p>
                    <p className="text-base md:text-lg mt-6 font-medium text-zinc-500">
                        I design and develop services for customers of all sizes, specializing in
                        creating stylish, modern websites, web services, and online stores.
                    </p>

                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 shadow-2xl mt-10 ">
                        Download CV
                    </button>
                </div>
                <div className="rounded-full overflow-hidden mt-10 lg:ml-10">
                    <Image
                        src="/home-banner.png"
                        alt="My Image"
                        width={950}
                        height={950}
                    />
                </div>
            </div>
        </div>
    );
}

export default IntroSection;