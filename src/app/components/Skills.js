import { FaAndroid } from 'react-icons/fa';
import { AiFillAndroid } from 'react-icons/ai';
import { IoLogoApple } from 'react-icons/io';
import { FaReact } from 'react-icons/fa';
const Skills = () => {
    return (
        <div className=" p-10 relative bg-stone-50" style={{ zIndex: 1 }}>
            <h1 className="text-2xl md:text-4xl lg:text-3xl font-light mb-10">SKILLS</h1>
            <p className='mt-3 text-base text-slate-500'>I have extensive experience working with a variety of technologies as a developer. I've developed and maintained multiple projects using these technologies, and I'm always eager to learn more.</p>
            <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                <div className="flex">
                    <AiFillAndroid size={70} className="mr-3" />
                    <div>
                        <h2 className="font-bold text-xl lg:text-2xl">Android</h2>
                        <p className="text-base text-slate-500">Android Apps, ROMs, & Kernels</p>
                    </div>
                </div>

                <div className="flex">
                    <IoLogoApple size={70} className="mr-3" />
                    <div>
                        <h2 className="font-bold text-xl lg:text-2xl">IOS</h2>
                        <p className="text-base text-slate-500">Android Apps, ROMs, & Kernels</p>
                    </div>
                </div>


                <div className="flex">
                    <FaReact size={70} className="mr-3" />
                    <div>
                        <h2 className="font-bold text-xl lg:text-2xl">React</h2>
                        <p className="text-base text-slate-500">Android Apps, ROMs, & Kernels</p>
                    </div>
                </div>


                <div className="flex">
                    <FaReact size={70} className="mr-3" />
                    <div>
                        <h2 className="font-bold text-xl lg:text-2xl">React Native</h2>
                        <p className="text-base text-slate-500">Android Apps, ROMs, & Kernels</p>
                    </div>
                </div>


                <div className="flex">
                    <AiFillAndroid size={70} className="mr-3" />
                    <div>
                        <h2 className="font-bold text-xl lg:text-2xl">Android</h2>
                        <p className="text-base text-slate-500">Android Apps, ROMs, & Kernels</p>
                    </div>
                </div>


                <div className="flex">
                    <AiFillAndroid size={70} className="mr-3" />
                    <div>
                        <h2 className="font-bold text-xl lg:text-2xl">Android</h2>
                        <p className="text-base text-slate-500">Android Apps, ROMs, & Kernels</p>
                    </div>
                </div>


                <div className="flex">
                    <AiFillAndroid size={70} className="mr-3" />
                    <div>
                        <h2 className="font-bold text-xl lg:text-2xl">Android</h2>
                        <p className="text-base text-slate-500">Android Apps, ROMs, & Kernels</p>
                    </div>
                </div>

                {/* Add more divs as needed */}
                {/* Each div will automatically adjust based on the screen size */}
            </div>
        </div>
    )
}

export default Skills