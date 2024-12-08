import kwesforms from "kwesforms";
import Image from "next/image";
import { useEffect } from "react";
import { motion } from "framer-motion";

function Contact() {
  useEffect(() => {
    kwesforms.init();
  }, []);

  return (
    <motion.div
      className="flex flex-col items-center bg-kl-lightGray dark:bg-gray-900 main-container pt-10 pb-12 px-10 sm:px-16"
      id="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h3 
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-kl-dark dark:text-white mb-10"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Contact
      </motion.h3>

      <div className="flex items-center w-full">
        <div className="w-0 md:w-1/2 p-5 hidden lg:flex">
          <Image
            height={620}
            width={620}
            src="/static/images/illustration1.svg"
            alt="3D Illustration"
          />
        </div>
        <motion.form
          className="kwes-form flex flex-col items-start w-full lg:w-1/2 bg-white dark:bg-gray-800 rounded-2xl px-7 py-8 sm:px-12 sm:py-12 border border-transparent hover:border-gray-200 hover:shadow-md space-y-6 text-sm sm:text-base"
          action="https://kwesforms.com/api/foreign/forms/QSyKMiVLGQjxX63ifSDL"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex flex-col w-full space-y-4">
            <motion.div 
              className="flex flex-col items-start text-gray-500 dark:text-gray-300 space-y-3"
              whileHover={{ scale: 1.05 }}
            >
              <label htmlFor="name" className="text-base sm:text-lg sr-only">
                Your Name
              </label>

              <input
                type="text"
                name="name"
                data-kw-rules="required|min:2|max:50"
                placeholder="Your Name *"
                className="w-full rounded-xl px-5 py-4 sm:px-6 sm:py-5 bg-kl-lightGray dark:bg-gray-700 focus:outline-none border border-transparent hover:shadow-inner hover:border-gray-200"
              />
            </motion.div>
            <motion.div 
              className="flex flex-col items-start text-gray-500 dark:text-gray-300 space-y-3"
              whileHover={{ scale: 1.05 }}
            >
              <label htmlFor="email" className="text-base sm:text-lg sr-only">
                Email
              </label>

              <input
                type="text"
                name="email"
                data-kw-rules="required|email"
                placeholder="Your Email *"
                className="w-full rounded-xl px-5 py-4 sm:px-6 sm:py-5 bg-kl-lightGray dark:bg-gray-700 focus:outline-none border border-transparent hover:shadow-inner hover:border-gray-200"
              />
            </motion.div>

            <motion.div 
              className="flex flex-col items-start text-gray-500 dark:text-gray-300 space-y-3"
              whileHover={{ scale: 1.05 }}
            >
              <label htmlFor="message" className="text-base sm:text-lg sr-only">
                Message
              </label>

              <textarea
                rows="5"
                name="message"
                data-kw-rules="required|min:50|max:1000"
                placeholder="Write a Message *"
                className="w-full rounded-xl px-5 py-4 sm:px-6 sm:py-5 bg-kl-lightGray dark:bg-gray-700 focus:outline-none border border-transparent hover:shadow-inner hover:border-gray-200"
              ></textarea>
            </motion.div>
          </div>
          <motion.button
            type="submit"
            className="bg-gray-500 dark:bg-gray-700 text-white text-sm md:text-sm lg:text-base xl:text-lg px-3 py-3 sm:px-4 sm:py-3 lg:px-5 lg:py-4 rounded-xl hover:shadow-xl hover:bg-gray-200 dark:hover:bg-gray-600 hover:text-gray-500 border border-transparent hover:border-gray-300 focus:outline-none"
            whileHover={{ scale: 1.05 }}
          >
            Submit
          </motion.button>
        </motion.form>
      </div>
    </motion.div>
  );
}

export default Contact;