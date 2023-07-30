import { FaAndroid } from "react-icons/fa";
import { AiFillAndroid } from "react-icons/ai";
import { IoLogoApple } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import Image from "next/image";

const Skills = () => {
  return (
    <div
      id="skills-section"
      className="p-5 md:p-10 lg:p-16 relative bg-stone-50"
      style={{ zIndex: 1 }}
    >
      <h1 className="text-2xl md:text-4xl lg:text-3xl font-light mb-10">
        SKILLS
      </h1>
      <p className="mt-3 text-base text-slate-500">
        I have extensive experience working with a variety of technologies as a
        developer. I've developed and maintained multiple projects using these
        technologies, and I'm always eager to learn more.
      </p>
      <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex">
          <Image
            src="/android.png"
            alt="Android Icon"
            width={70}
            height={70}
            className="mr-3"
          />
          <div>
            <h2 className="font-bold text-xl lg:text-2xl">Android</h2>
            <p className="text-base text-slate-500">Android App development</p>
          </div>
        </div>

        <div className="flex">
          <Image
            src="/apple.png"
            alt="Android Icon"
            width={70}
            height={70}
            className="mr-3"
          />
          <div>
            <h2 className="font-bold text-xl lg:text-2xl">IOS</h2>
            <p className="text-base text-slate-500">IOS App development</p>
          </div>
        </div>

        <div className="flex">
          <Image
            src="/atom.png"
            alt="Android Icon"
            width={70}
            height={70}
            className="mr-3"
          />
          <div>
            <h2 className="font-bold text-xl lg:text-2xl">React</h2>
            <p className="text-base text-slate-500">
              JavaScript library for building user interfaces.
            </p>
          </div>
        </div>

        <div className="flex">
          <Image
            src="/atom.png"
            alt="Android Icon"
            width={70}
            height={70}
            className="mr-3"
          />
          <div>
            <h2 className="font-bold text-xl lg:text-2xl">React Native</h2>
            <p className="text-base text-slate-500">
              Cross-platform mobile app development.
            </p>
          </div>
        </div>

        <div className="flex">
          <Image
            src="/nodejs.png"
            alt="Android Icon"
            width={70}
            height={70}
            className="mr-3"
          />
          <div>
            <h2 className="font-bold text-xl lg:text-2xl">Node js</h2>
            <p className="text-base text-slate-500">
              JavaScript runtime environment for servers.
            </p>
          </div>
        </div>

        <div className="flex">
          <Image
            src="/mongo.png"
            alt="Android Icon"
            width={70}
            height={70}
            className="mr-3"
          />
          <div>
            <h2 className="font-bold text-xl lg:text-2xl">MongoDB</h2>
            <p className="text-base text-slate-500">
              Flexible, Scalable, NoSQL.
            </p>
          </div>
        </div>

        <div className="flex">
          <Image
            src="/nextjs.png"
            alt="Android Icon"
            width={70}
            height={70}
            className="mr-3"
          />
          <div>
            <h2 className="font-bold text-xl lg:text-2xl">Nextjs</h2>
            <p className="text-base text-slate-500">
              Server-side rendering for React.
            </p>
          </div>
        </div>

        <div className="flex">
          <Image
            src="/aws.jpg"
            alt="Android Icon"
            width={70}
            height={70}
            className="mr-3"
          />
          <div>
            <h2 className="font-bold text-xl lg:text-2xl">AWS</h2>
            <p className="text-base text-slate-500">
              Cloud computing platform by Amazon.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
