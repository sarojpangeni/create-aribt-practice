import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function SubHeader() {
    return (
        <div className='flex md:items-center justify-between p-2 px-8 md:px-32 w-full bg-gray-500'>
            <div className='flex gap-5'>
                <div className=''>
                    <h1
                        className='text-white font-bold'>
                        Phone:
                        <span
                            className='text-green-300 font-light pl-2'>
                            +9779867673699
                        </span>
                    </h1>
                </div>
                <div>
                    <h1
                        className='text-white font-bold'>
                        Email:
                        <span
                            className='text-green-300 font-light pl-2'>
                            sarojpangeni14@gmail.com
                        </span></h1>
                </div>
            </div>
            <div className='md:flex gap-4 justify-end text-green-300 cursor-pointer hidden'>
                <FaFacebookF />
                <FaTwitter />
                <FaInstagram />
                <FaLinkedinIn />
            </div>
        </div>
    )
}

export default SubHeader