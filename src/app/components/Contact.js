import { FaMap } from 'react-icons/fa';
import { AiOutlineMap } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlinePhone } from 'react-icons/ai';


const Contact = () => {
    return (
        <div className=" p-10 relative bg-stone-50" style={{ zIndex: 1 }}>
            <h1 className="text-2xl md:text-4xl lg:text-3xl font-light mb-10">GET IN TOUCH.</h1>

            <div className="flex justify-between">
                <div className="p-10 bg-slate-100">
                    <h2 className='font-bold text-xl lg:text-2xl'>What’s your story? Get in touch</h2>
                    <p className='mt-3 text-base text-slate-500'>Always available for freelancing if the right project comes along, Feel free to contact me.</p>
                    <div className="mt-5">
                        <div className="flex">
                            <FaMap size={24} />
                            <p className="font-semibold text-lg ml-3">123 Stree New York City , United States Of America 750065.</p>
                        </div>

                        <div className="flex my-2">
                            <AiOutlineMail size={24} />
                            <p className="font-semibold text-lg ml-3">support@domain.com
                            </p>
                        </div>

                        <div className="flex">
                            <AiOutlinePhone size={24} />
                            <p className="font-semibold text-lg ml-3">+044 9696 9696 3636
                            </p>
                        </div>

                    </div>
                </div>

                <div className="p-10 bg-slate-100">
                    <h2 className='font-bold text-xl lg:text-2xl'>Say Something
                    </h2>

                    <input
                        type="text"
                        placeholder="Enter your name"
                        // value={value}
                        onChange={(e) => onChange(e.target.value)}
                    />

                </div>
            </div>


        </div>
    )
}

export default Contact