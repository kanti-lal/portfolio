import Image from "next/image";

function HeroSection() {
  return (
    <div className="bg-[#F6F8FB] px-8 sm:px-16 w-full" id="heroSection">
      {/* <Nav /> */}
      <div className="w-full main-container flex flex-col-reverse md:flex-row items-center justify-between pt-8 pb-16">
        <div className="flex flex-col space-y-3 sm:space-y-6 items-start text-[#5C637C] xl:border-l-8 xl:pl-8 xl:border-gray-200 py-8">
          <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-normal">
            Howdy,
          </p>
          <h4 className="md:hidden text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold">
            I'm Kanti Lal
          </h4>
          <h4 className="hidden md:flex text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold">
            I am Kanti Lal
          </h4>
          <h6 className="text-base text- md:text-lg lg:text-xl xl:text-2xl font-light">
            JavaScript | Front End Developer
          </h6>

          <div className="flex space-x-5 pt-5">
            <a
              href="https://twitter.com/"
              target="_blank"
              className="socialLink"
            >
              <Image
                src="/static/images/twitter.svg"
                height={30}
                width={30}
                alt="Kanti Lal"
              />
            </a>
            <a
              href="https://www.instagram.com/er.kranti/"
              target="_blank"
              className="socialLink"
            >
              <Image
                src="/static/images/instagram.svg"
                alt="Kanti Lal"
                height={30}
                width={30}
                className=""
              />
            </a>
            <a
              href="https://www.linkedin.com/in/kanti-lal-1342a1a3/"
              target="_blank"
              className="socialLink"
            >
              <Image
                src="/static/images/linkedin.svg"
                height={30}
                width={30}
                alt="Kanti Lal"
                className=""
              />
            </a>
            <a
              href="https://github.com/kanti-lal"
              target="_blank"
              className="socialLink"
            >
              <Image
                src="/static/images/github.svg"
                height={30}
                width={30}
                alt="Kanti Lal"
                className=""
              />
            </a>
          </div>
        </div>
        <div>
          <Image
            src="/static/images/kantimain.png"
            alt="Kanti Lal"
            height={400}
            width={500}
            // className="md:w-[360px] lg:w-[400px] xl:w-[500px]"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
