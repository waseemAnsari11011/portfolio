import Image from "next/image";
import Link from 'next/link';

const Projects = () => {
  return (
    <div
      id="projects-section"
      className="p-5 md:p-10 lg:p-16 relative bg-stone-50"
      style={{ zIndex: 1 }}
    >
      <h1 className="text-2xl md:text-4xl lg:text-3xl font-light mb-10">
        Projects
      </h1>
      {/* <div className="flex flex-col lg:flex-row justify-between bg-slate-100 p-5 lg:p-10 border-b border-gray-300">
        <div className="mb-5 lg:mb-0 lg:mr-8 lg:w-1/4">
          <Image src="/canteen.jpg" alt="My Image" width={500} height={500} />
        </div>
        <div className="w-full lg:w-3/4">
          <h2 className="font-bold text-xl lg:text-2xl">Food ordering app</h2>
          <h3 className="text-xs text-slate-500">
            Aug 2022 - Sep 2022
          </h3>
          <p className="mt-3 text-base text-slate-500">
            The user version of the app allows customers to browse through a wide range of categories, view menus, place orders, and track their deliveries.
            On the other hand, the shop owner version of the app enables restaurant owners to manage their orders, accept, or reject them.
          </p>
          <div className="flex flex-row  mt-5">
            <div className="flex items-center mr-3">
              <Link target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1f-PEK_ZdxoEalqfxR4VO-_ELCKqdWUa3/view?usp=drivesdk" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 text-sm whitespace-nowrap">
                Live Preview
              </Link>
            </div>
            <div className="flex items-center">
              <Link target="_blank" rel="noopener noreferrer" href="https://github.com/waseemAnsari11011/canteen_app" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 text-sm whitespace-nowrap">
                Source Code
              </Link>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="flex flex-col lg:flex-row justify-between bg-slate-100 p-5 lg:p-10 border-b border-gray-300">
        <div className="mb-5 lg:mb-0 lg:mr-8 lg:w-1/4">
          <Image src="/ess.jpg" alt="My Image" width={500} height={500} />
        </div>
        <div className="w-full lg:w-3/4">
          <h2 className="font-bold text-xl lg:text-2xl">Ess app</h2>
          <h3 className="text-xs text-slate-500">
          nov 2022 - jan 2023
          </h3>
          <p className="mt-3 text-base text-slate-500">
          The app simplifies the process of clocking in for employees. The primary function of this app is to enable employees to easily punch in their attendance through the app. To achieve this, I incorporated a third-party library to fetch the user's current location and retrieve the office location (coordinates- latitude & longitude) from the database. By comparing the user's location with the office location, the app determines if the employee is within a 1-kilometer radius. If they are, the app allows them to punch in. However, if they are outside the designated radius, the app notifies them that they are not within range.
          </p>
          <div className="flex flex-row  mt-5">
            <div className="flex items-center mr-3">
              <Link target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1exkEoMD3HP2hntTNZMvwPa61CMOfk2et/view" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 text-sm whitespace-nowrap">
                Live Preview
              </Link>
            </div>
            <div className="flex items-center">
              <Link target="_blank" rel="noopener noreferrer" href="https://github.com/waseemAnsari11011/Ess" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 text-sm whitespace-nowrap">
                Source Code
              </Link>
            </div>
          </div>
        </div>
      </div> */}

      <div className="flex flex-col lg:flex-row justify-between bg-slate-100 p-5 lg:p-10 border-b border-gray-300">
        <div className="mb-5 lg:mb-0 lg:mr-8 lg:w-1/4">
          <Image src="/setufi.png" alt="My Image" width={500} height={500} />
        </div>
        <div className="w-full lg:w-3/4">
          <h2 className="font-bold text-xl lg:text-2xl">Setufi</h2>
          <h3 className="text-xs text-slate-500">
            july 2023 - current
          </h3>
          <p className="mt-3 text-base text-slate-500">
            It is a cashflow management solution that helps businesses automate their receivable collections and improve their
            working capital. It is a cloud-based platform that integrates with popular accounting software, such as Tally.
          </p>
          <div className="flex flex-row  mt-5">
            <div className="flex items-center mr-3">
              <Link target="_blank" rel="noopener noreferrer" href="https://portal.setufi.com/" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 text-sm whitespace-nowrap">
                Live Preview
              </Link>
            </div>
            {/* <div className="flex items-center">
              <Link target="_blank" rel="noopener noreferrer" href="https://github.com/waseemAnsari11011/tutor" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 text-sm whitespace-nowrap">
                Source Code
              </Link>
            </div> */}
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between bg-slate-100 p-5 lg:p-10 ">
        <div className="mb-5 lg:mb-0 lg:mr-8 lg:w-1/4">
          <Image src="/audiobook.jpg" alt="My Image" width={500} height={500} />
        </div>
        <div className="w-full lg:w-3/4">
          <h2 className="font-bold text-xl lg:text-2xl">Audiobook app</h2>
          <h3 className="text-xs text-slate-500">
            july 2022- aug 2022
          </h3>
          <p className="mt-3 text-base text-slate-500">
            The heart of the app lies in the immersive audio player. With intuitive controls, users can start, pause, rewind, and skip through chapters seamlessly. I've integrated the Razorpay payment gateway. This enables users to purchase their chosen audiobooks with ease while ensuring their financial information remains safeguarded.
          </p>
          <div className="flex flex-row  mt-5">
            <div className="flex items-center mr-3">
              <Link target="_blank" rel="noopener noreferrer" href="https://github.com/waseemAnsari11011/saheehIlm-client" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 text-sm whitespace-nowrap">
                source code
              </Link>
            </div>
            {/* <div className="flex items-center">
              <Link target="_blank" rel="noopener noreferrer" href="https://github.com/waseemAnsari11011/tutor" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 text-sm whitespace-nowrap">
                server Code
              </Link>
            </div> */}
          </div>
        </div>
      </div>



    </div>
  );
};

export default Projects;
