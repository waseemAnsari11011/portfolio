import {
  FaCode,
  FaTools,
  FaExchangeAlt,
  FaCloud,
  FaLaptopCode,
  FaCogs,
} from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdCart } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { AiOutlineDatabase } from "react-icons/ai";

const Work = () => {
  return (
    <div
      id="services-section"
      className="p-5 md:p-10 lg:p-16 relative bg-stone-50"
      style={{ zIndex: 1 }}
    >
      <h1 className="text-2xl md:text-4xl lg:text-3xl font-light mb-10">
        WHAT I DO?
      </h1>
      <div className="mt-10 grid gap-10  md:grid-cols-2">
        <div className="flex p-5 bg-slate-100 group hover:bg-blue-500 hover:text-white">
          <FaCogs size={100} className="mr-3" />
          <div>
            <h2 className="font-semibold text-lg lg:text-xl">
              Custom Software Development
            </h2>
            <p className="text-sm mt-2">
              build software applications from scratch to address unique
              business challenges and enhance efficiency.
            </p>
          </div>
        </div>

        <div className="flex p-5 bg-slate-100 group hover:bg-blue-500 hover:text-white">
          <FaCode size={100} className="mr-3" />
          <div>
            <h2 className="font-semibold text-lg lg:text-xl">
              Web Development
            </h2>
            <p className="text-sm mt-2">
              create dynamic and interactive websites with a focus on user
              experience and responsiveness.
            </p>
          </div>
        </div>

        <div className="flex p-5 bg-slate-100 group hover:bg-blue-500 hover:text-white">
          <IoPhonePortraitOutline size={100} className="mr-3" />
          <div>
            <h2 className="font-semibold text-lg lg:text-xl">
              Mobile App Development
            </h2>
            <p className="text-sm mt-2">
              Design and develop mobile applications for iOS, Android, or
              cross-platform solutions.
            </p>
          </div>
        </div>

        <div className="flex p-5 bg-slate-100 group hover:bg-blue-500 hover:text-white">
          <IoMdCart size={100} className="mr-3" />
          <div>
            <h2 className="font-semibold text-lg lg:text-xl">
              E-commerce Solutions
            </h2>
            <p className="text-sm mt-2">
              Develop online stores and integrate secure payment gateways for
              businesses to sell products and services online.
            </p>
          </div>
        </div>

        <div className="flex p-5 bg-slate-100 group hover:bg-blue-500 hover:text-white">
          <FaExchangeAlt size={100} className="mr-3" />
          <div>
            <h2 className="font-semibold text-lg lg:text-xl">
              API Development and Integration
            </h2>
            <p className="text-sm mt-2">
              Build APIs that allow different software systems to communicate
              and share data seamlessly.
            </p>
          </div>
        </div>

        <div className="flex p-5 bg-slate-100 group hover:bg-blue-500 hover:text-white">
          <FaCheckCircle size={100} className="mr-3" />
          <div>
            <h2 className="font-semibold text-lg lg:text-xl">
              Software Testing and Quality Assurance
            </h2>
            <p className="text-sm mt-2">
              Ensure the functionality, performance, and security of software
              applications through testing and debugging.
            </p>
          </div>
        </div>

        <div className="flex p-5 bg-slate-100 group hover:bg-blue-500 hover:text-white">
          <FaTools size={100} className="mr-3" />
          <div>
            <h2 className="font-semibold text-lg lg:text-xl">
              Maintenance and Support
            </h2>
            <p className="text-sm mt-2">
              Provide ongoing maintenance and support services to ensure the
              smooth operation of software and timely resolution of issues.
            </p>
          </div>
        </div>

        <div className="flex p-5 bg-slate-100 group hover:bg-blue-500 hover:text-white">
          <AiOutlineDatabase size={100} className="mr-3" />
          <div>
            <h2 className="font-semibold text-lg lg:text-xl">
              Database Development and Management
            </h2>
            <p className="text-sm mt-2">
              Design and implement robust database solutions to store and manage
              critical data efficiently.
            </p>
          </div>
        </div>

        <div className="flex p-5 bg-slate-100 group hover:bg-blue-500 hover:text-white">
          <FaCloud size={100} className="mr-3" />
          <div>
            <h2 className="font-semibold text-lg lg:text-xl">
              Cloud Computing Solutions
            </h2>
            <p className="text-sm mt-2">
              Leverage cloud services to develop scalable, flexible, and
              cost-effective software applications.
            </p>
          </div>
        </div>

        <div className="flex p-5 bg-slate-100 group hover:bg-blue-500 hover:text-white">
          <FaLaptopCode size={100} className="mr-3" />
          <div>
            <h2 className="font-semibold text-lg lg:text-xl">
              Software Consulting
            </h2>
            <p className="text-sm mt-2">
              Offering expertise and guidance to clients on technology choices,
              best practices, and software architecture.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
