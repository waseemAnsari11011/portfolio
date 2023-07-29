import Image from 'next/image';

const Projects = () => {
    return (
        <div className=" p-10 relative bg-stone-50" style={{ zIndex: 1 }}>
            <h1 className="text-2xl md:text-4xl lg:text-3xl font-light mb-10">Projects</h1>
            <div className='flex flex-col lg:flex-row justify-between bg-slate-100 p-5 lg:p-10 border-b border-gray-300'>
                <div className='mb-5 lg:mb-0 lg:mr-8'>
                    <Image
                        src="/a1.png"
                        alt="My Image"
                        width={500}
                        height={500}
                    />
                </div>
                <div className="flex-grow">
                    <h2 className='font-bold text-xl lg:text-2xl'>Front-end Developer</h2>
                    <h3 className='text-xs text-slate-500'>WeLab | Remote | Jan 2019 - Present</h3>
                    <p className='mt-3 text-base text-slate-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</p>
                </div>
                <div className="flex items-end mt-5 lg:mt-0">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 text-sm whitespace-nowrap">
                        Contact me
                    </button>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row justify-between bg-slate-100 p-5 lg:p-10 border-b border-gray-300'>
                <div className='mb-5 lg:mb-0 lg:mr-8'>
                    <Image
                        src="/a1.png"
                        alt="My Image"
                        width={500}
                        height={500}
                    />
                </div>
                <div className="flex-grow">
                    <h2 className='font-bold text-xl lg:text-2xl'>Front-end Developer</h2>
                    <h3 className='text-xs text-slate-500'>WeLab | Remote | Jan 2019 - Present</h3>
                    <p className='mt-3 text-base text-slate-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</p>
                </div>
                <div className="flex items-end mt-5 lg:mt-0">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 text-sm whitespace-nowrap">
                        Contact me
                    </button>
                </div>
            </div>



        </div>
    )
}

export default Projects