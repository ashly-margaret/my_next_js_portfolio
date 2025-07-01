// ContactSection.js
"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactSection() {
  return (
    <div className="min-h-screen">
      <div className=" bg-[#14092B] flex items-center justify-center px-4 py-6">
        <h3 className="bg-gradient-to-r from-[#5DFFFF] to-[#AE0CA7] bg-clip-text text-transparent font-bold text-3xl">
          Contact
        </h3>
      </div>

      <div className="flex justify-center items-center gap-10 px-6 py-12 bg-[#14092B] text-white">
        {/* Left Info */}
        <div className="flex-1 flex flex-col justify-center">
          <h3 className="text-3xl font-semibold text-[#38BDF8] mb-4">
            Drop me a message
          </h3>
          <p className="text-white mb-8 max-w-md">
            A web app for visualizing personalized Spotify data. View your top
            artists, top tracks, recently played tracks, and detailed audio
            information about each track.
          </p>
          <ul className="space-y-6 text-white">
            <li className="flex items-center gap-4">
              <span className="  p-3 rounded-full">
                <FaPhoneAlt className="text-[#38BDF8] text-xl" />
              </span>
              +971 542463204
            </li>
            <li className="flex items-center gap-4">
              <span className=" bg-opacity-20 p-3 rounded-full">
                <FaEnvelope className="text-[#C084FC] text-xl" />
              </span>
              ashlymargaret030@gmail.com
            </li>
            <li className="flex items-center gap-4">
              <span className=" bg-opacity-20 p-3 rounded-full">
                <FaMapMarkerAlt className="text-[#A78BFA] text-xl" />
              </span>
              Abu Dhabi, UAE
            </li>
          </ul>
        </div>
        {/* Right Form */}
        <div className="flex-1 flex items-center justify-center">
          <form className="w-full max-w-md bg-gradient-to-br from-[#210B38] to-[#1a1026] bg-opacity-80 rounded-2xl shadow-xl p-8 space-y-6 backdrop-blur-md">
            <div>
              <label className="block text-white mb-2">Name</label>
              <input
                type="text"
                placeholder="Ashly Margaret"
                className="w-full px-4 py-2 rounded-lg bg-[#2B2342] text-white focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-white mb-2">Email</label>
              <input
                type="email"
                placeholder="ashlymargaret030@gmail.com"
                className="w-full px-4 py-2 rounded-lg bg-[#2B2342] text-white focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-white mb-2">Message</label>
              <textarea
                rows={3}
                placeholder="How can I help?"
                className="w-full px-4 py-2 rounded-lg bg-[#2B2342] text-white focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="mt-4 w-fit px-6 py-2 rounded-lg bg-gradient-to-r from-[#38BDF8] to-[#C084FC] text-white font-semibold shadow-md hover:opacity-90 transition"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
