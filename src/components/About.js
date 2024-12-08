import Image from "next/image";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      className="flex flex-col items-center bg-white dark:bg-gray-900 pt-10 pb-12 px-4 sm:px-16"
      id="about"
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
        About me
      </motion.h3>
      <motion.div 
        className="flex items-center justify-center w-36 h-36 sm:w-40 sm:h-40 object-contain bg-kl-lightGray dark:bg-gray-800 p-3 rounded-full shadow-xl hover:shadow-inner cursor-pointer hover:border-gray-100"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Image
          src="/static/images/aboutpic.jpeg"
          alt="Kantilal"
          width={200}
          height={200}
          className="rounded-full"
        />
      </motion.div>

      <motion.div 
        className="p-8 flex flex-col space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <p className="text-base text-justify sm:text-lg text-gray-600 dark:text-gray-300">
          I am a motivated professional Front End / JavaScript / ReactJS /
          NextJS developer with over 2.5+ year of experience, a strong work ethic
          and excellent interpersonal skills. I&apos;ve completed BTech in
          Computer Science & Engineering from Bikaner Technical University. I am
          an astute Front End developer with professional experience building
          scalable Front End Application, converting mockups into pixel-perfect
          designs, creating beautiful website animations. Proficient In ReactJS,
          NextJS, Redux, TailwindCSS, SCSS, Material UI etc.
        </p>
        <h3 className="text-2xl text-gray-600 dark:text-gray-300 font-bold">I Love</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-2 md:gap-5 xl:flex items-center justify-between">
          <motion.div 
            className="hobbyBox"
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src="/static/images/user-interface.svg"
              alt="Kantilal hobby"
              width={40}
              height={40}
              className="w-8 sm:w-10 md:w-10 lg:w-9 xl:w-10"
            />
            <h3 className="text-base sm:text-base md:text-base lg:text-base xl:text-lg text-gray-600 dark:text-gray-300">
              DESIGNING UI
            </h3>
          </motion.div>
          <motion.div 
            className="hobbyBox"
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src="/static/images/code.svg"
              alt="Kantilal hobby"
              width={40}
              height={40}
              className="w-8 sm:w-10 md:w-10 lg:w-9 xl:w-10"
            />
            <h3 className="text-base sm:text-base md:text-base lg:text-base xl:text-lg text-gray-600 dark:text-gray-300">
              CODING
            </h3>
          </motion.div>
          <motion.div 
            className="hobbyBox"
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src="/static/images/mountain.svg"
              alt="Kantilal hobby"
              width={40}
              height={40}
              className="w-8 sm:w-10 md:w-10 lg:w-9 xl:w-10"
            />
            <h3 className="text-base sm:text-base md:text-base lg:text-base xl:text-lg text-gray-600 dark:text-gray-300">
              MOUNTAINS
            </h3>
          </motion.div>
          <motion.div 
            className="hobbyBox"
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src="/static/images/travelling.svg"
              alt="Kantilal hobby"
              width={40}
              height={40}
              className="w-8 sm:w-10 md:w-10 lg:w-9 xl:w-10"
            />
            <h3 className="text-base sm:text-base md:text-base lg:text-base xl:text-lg text-gray-600 dark:text-gray-300">
              TRAVELLING
            </h3>
          </motion.div>
          <motion.div 
            className="hobbyBox"
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src="/static/images/headphones.svg"
              alt="Kantilal hobby"
              width={40}
              height={40}
              className="w-8 sm:w-10 md:w-10 lg:w-9 xl:w-10"
            />
            <h3 className="text-base sm:text-base md:text-base lg:text-base xl:text-lg text-gray-600 dark:text-gray-300">
              MUSIC
            </h3>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default About;