import Image from "next/image";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

function Footer() {
  let date = new Date();
  return (
    <motion.div
      className="flex flex-col items-center main-container bg-kl-lightGray dark:bg-gray-900 pt-10 pb-12 px-10 sm:px-16"
      id="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="bg-kl-dark dark:bg-gray-800 flex flex-col items-center lg:flex-row w-full px-6 py-8 sm:px-10 sm:py-8 rounded-3xl justify-between space-y-6 lg:space-y-0 shadow-lg">
        <Link
          to="heroSection"
          smooth={true}
          offset={-110}
          duration={200}
          className="flex items-center space-x-3 cursor-pointer"
        >
          <Image
            src="/static/images/logo-white.svg"
            width={48}
            height={48}
            alt="Kanti Lal"
            className="w-12"
          />
          <h3 className="text-2xl text-white dark:text-gray-300 font-light hidden md:flex">
            KANTI<span className="font-semibold">LAL</span>
          </h3>
        </Link>

        <span className="hidden md:flex text-white dark:text-gray-300 text-base lg:text-lg font-light">
          © {date.getFullYear()} All right reserved - Design by Kantilal
        </span>
        <span className="flex flex-col items-center md:hidden text-white dark:text-gray-300 text-sm space-y-2 font-normal">
          <span className="text-xs text-kl-lightGray dark:text-gray-500">
            © {date.getFullYear()} All right reserved
          </span>
          <span>Design by Kantilal</span>
        </span>
      </div>
    </motion.div>
  );
}

export default Footer;