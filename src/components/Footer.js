import Image from "next/image";
import { Link } from "react-scroll";

function Footer() {
  let date = new Date();
  return (
    <div
      className="flex flex-col items-center main-container bg-kl-lightGray pt-10 pb-12 px-10 sm:px-16"
      id="contact"
    >
      <div className="bg-kl-dark flex flex-col items-center lg:flex-row w-full px-6 py-8 sm:px-10 sm:py-8 rounded-3xl justify-between space-y-6 lg:space-y-0 shadow-lg">
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
          <h3 className="text-2xl text-white font-light hidden md:flex">
            KANTI<span className="font-semibold">LAL</span>
          </h3>
        </Link>

        <span className="hidden md:flex text-white text-base lg:text-lg font-light">
          © {date.getFullYear()} All right reserved - Design by Kantilal
        </span>
        <span className="flex flex-col items-center md:hidden text-white text-sm space-y-2 font-normal">
          <span className="text-xs text-kl-lightGray">
            © {date.getFullYear()} All right reserved
          </span>
          <span>Design by Kantilal</span>
        </span>
      </div>
    </div>
  );
}

export default Footer;
