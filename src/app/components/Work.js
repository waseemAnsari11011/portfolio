import { FaCode } from 'react-icons/fa';
import { IoColorPaletteOutline } from 'react-icons/io5';
import { IoPhonePortraitOutline } from 'react-icons/io5';
import { IoSearchOutline } from 'react-icons/io5';




const Work = () => {
    return (
        <div className=" p-10 relative bg-stone-50" style={{ zIndex: 1 }}>
            <h1 className="text-2xl md:text-4xl lg:text-3xl font-light mb-10">WHAT I DO?</h1>
            <div className="mt-10 grid gap-10  md:grid-cols-2">
                <div className="flex p-5 bg-slate-100 group hover:bg-green-500 hover:text-white">
                    <IoColorPaletteOutline size={100} className="mr-3" />
                    <div>
                        <h2 className="font-semibold text-lg lg:text-xl">Web Design</h2>
                        <p className="text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>

                <div className="flex p-5 bg-slate-100 group hover:bg-green-500 hover:text-white">
                    <FaCode size={100} className="mr-3" />
                    <div>
                        <h2 className="font-semibold text-lg lg:text-xl">Web Development</h2>
                        <p className="text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>


                <div className="flex p-5 bg-slate-100 group hover:bg-green-500 hover:text-white">
                    <IoPhonePortraitOutline size={100} className="mr-3" />
                    <div>
                        <h2 className="font-semibold text-lg lg:text-xl">App Development</h2>
                        <p className="text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>

                <div className="flex p-5 bg-slate-100 group hover:bg-green-500 hover:text-white">
                    <IoSearchOutline size={100} className="mr-3" />
                    <div>
                        <h2 className="font-semibold text-lg lg:text-xl">SEO Marketing</h2>
                        <p className="text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Work