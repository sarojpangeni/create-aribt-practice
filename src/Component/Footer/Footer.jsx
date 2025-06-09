import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { useState } from 'react'
import { toast } from 'react-toastify';

function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage("Please enter the valid email address");
      return
    }
    console.log("Subscribed with email:", email);
    toast.success("Thank you for subscribing");
    setEmail("");
  }
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
        <div>
          <h2 className="text-xl font-semibold mb-4">About Us</h2>
          <p className="text-sm text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, culpa labore explicabo ea ab nulla laborum dolorem.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Features</h2>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">Testimonials</li>
            <li className="hover:text-white cursor-pointer">Contact Us</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4 text-xl">
            <a href="#"><FaFacebook className="hover:text-blue-500" /></a>
            <a href="#"><FaTwitter className="hover:text-sky-400" /></a>
            <a href="#"><FaInstagram className="hover:text-pink-500" /></a>
            <a href="#"><FaLinkedin className="hover:text-blue-400" /></a>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Subscribe Newsletter</h2>
          <div className="flex">
            <form onSubmit={handleSubmit}
              className='flex'>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-600 bg-transparent text-white placeholder-gray-400 px-4 py-2 rounded-l-full focus:outline-none"
                placeholder="Enter Email"
                required
              />
              <button
                type="button"
                className="bg-blue-600 cursor-pointer text-white px-4 py-2 rounded-r-full hover:bg-blue-700"
                id="button-addon2"
              >
                Send
              </button>
            </form>
            {message && <p className="text-sm mt-2 text-green-400">{message}</p>}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        <p>
          © 2025 All rights reserved | This template is made with <span className="text-red-500">❤️</span> by <span className="text-white font-medium">Saroj</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
