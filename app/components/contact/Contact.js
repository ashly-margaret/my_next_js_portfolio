"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <div className="bg-gradient-to-br from-[#0a0118] via-[#14092B] to-[#1a0b2e] py-12 px-6 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-[#5DFFFF]/20 to-[#AE0CA7]/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-r from-[#AE0CA7]/20 to-[#38BDF8]/20 rounded-full blur-xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h3 className="bg-gradient-to-r from-[#5DFFFF] to-[#AE0CA7] bg-clip-text text-transparent font-bold text-3xl mb-2">
            Contact
          </h3>
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#5DFFFF] to-[#AE0CA7] mx-auto rounded-full"></div>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {/* Phone */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.5 }}
            className="group relative"
          >
            <div className="bg-gradient-to-br from-[#210B38] to-[#2a1446] p-4 rounded-xl shadow-lg border border-[#38BDF8]/20 hover:border-[#38BDF8]/50 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-[#38BDF8]/20 to-[#5DFFFF]/20 rounded-lg">
                  <FaPhoneAlt className="text-[#38BDF8] w-5 h-5 group-hover:text-[#5DFFFF] transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-300 mb-1">Phone</h4>
                  <p className="text-white text-sm">+971 542463204</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Email */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.5 }}
            className="group relative"
          >
            <div className="bg-gradient-to-br from-[#210B38] to-[#2a1446] p-4 rounded-xl shadow-lg border border-[#C084FC]/20 hover:border-[#C084FC]/50 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-[#C084FC]/20 to-[#AE0CA7]/20 rounded-lg">
                  <FaEnvelope className="text-[#C084FC] w-5 h-5 group-hover:text-[#AE0CA7] transition-colors duration-300" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-sm font-semibold text-gray-300 mb-1">Email</h4>
                  <p className="text-white text-sm truncate">ashlymargaret030@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.5 }}
            className="group relative"
          >
            <div className="bg-gradient-to-br from-[#210B38] to-[#2a1446] p-4 rounded-xl shadow-lg border border-[#A78BFA]/20 hover:border-[#A78BFA]/50 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-[#A78BFA]/20 to-[#C084FC]/20 rounded-lg">
                  <FaMapMarkerAlt className="text-[#A78BFA] w-5 h-5 group-hover:text-[#C084FC] transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-300 mb-1">Location</h4>
                  <p className="text-white text-sm">Abu Dhabi, UAE</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <button className="px-6 py-2 bg-gradient-to-r from-[#5DFFFF] to-[#AE0CA7] text-white font-medium rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm">
            Get In Touch
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center items-center gap-6 mt-6"
        >
          <motion.a
            href="https://www.linkedin.com/in/ashly-margaret/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            className="text-[#5DFFFF] hover:text-[#AE0CA7] transition-colors duration-300 text-xl"
          >
            <FaLinkedin size={24} />
          </motion.a>

          <motion.a
            href="https://github.com/ashly-margaret"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            className="text-[#5DFFFF] hover:text-[#AE0CA7] transition-colors duration-300 text-xl"
          >
            <FaGithub size={24} />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
