import Image from "next/image";

function About() {
  return (
    <div
      className="flex flex-col items-center bg-white pt-10 pb-12 px-4 sm:px-16"
      id="about"
    >
      <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-kl-dark mb-10">
        About me
      </h3>
      <div className="flex items-center justify-center w-36 h-36 sm:w-40 sm:h-40 object-contain bg-kl-lightGray p-3 rounded-full shadow-xl hover:shadow-inner cursor-pointer hover:border-gray-100">
        <Image
          src="/static/images/aboutpic.jpeg"
          alt="Kantilal"
          width={200}
          height={200}
          className="rounded-full"
        />
      </div>

      <div className="p-8 flex flex-col space-y-4">
        <p className="text-base text-justify sm:text-lg text-gray-600">
          I am a passionate and results-driven Frontend Developer with over 3.5
          years of professional experience specializing in JavaScript, React.js,
          and Next.js. I hold a Bachelor of Technology (B.Tech) degree in
          Computer Science & Engineering from Bikaner Technical University.
          Throughout my career, I have successfully developed scalable and
          high-performance frontend applications, transforming UI/UX designs
          into pixel-perfect, responsive interfaces. I also have experience
          creating visually appealing website animations to enhance user
          engagement. I am highly skilled in a range of modern frontend
          technologies, including React.js, Next.js, Redux, Tailwind CSS, SCSS,
          and Material-UI. I am committed to writing clean, maintainable code
          and continuously improving my skills to deliver the best user
          experiences.
        </p>
        <h3 className="text-2xl text-gray-600 font-bold">I Love</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-2 md:gap-5 xl:flex items-center justify-between">
          <div className="hobbyBox">
            <Image
              src="/static/images/user-interface.svg"
              alt="Kantilal hobby"
              width={40}
              height={40}
              className="w-8 sm:w-10 md:w-10 lg:w-9 xl:w-10"
            />
            <h3 className="text-base sm:text-base md:text-base lg:text-base xl:text-lg text-gray-600">
              DESIGNING UI
            </h3>
          </div>
          <div className="hobbyBox">
            <Image
              src="/static/images/code.svg"
              alt="Kantilal hobby"
              width={40}
              height={40}
              className="w-8 sm:w-10 md:w-10 lg:w-9 xl:w-10"
            />
            <h3 className="text-base sm:text-base md:text-base lg:text-base xl:text-lg text-gray-600">
              CODING
            </h3>
          </div>
          <div className="hobbyBox">
            <Image
              src="/static/images/mountain.svg"
              alt="Kantilal hobby"
              width={40}
              height={40}
              className="w-8 sm:w-10 md:w-10 lg:w-9 xl:w-10"
            />
            <h3 className="text-base sm:text-base md:text-base lg:text-base xl:text-lg text-gray-600">
              MOUNTAINS
            </h3>
          </div>
          <div className="hobbyBox">
            <Image
              src="/static/images/travelling.svg"
              alt="Kantilal hobby"
              width={40}
              height={40}
              className="w-8 sm:w-10 md:w-10 lg:w-9 xl:w-10"
            />
            <h3 className="text-base sm:text-base md:text-base lg:text-base xl:text-lg text-gray-600">
              TRAVELLING
            </h3>
          </div>
          <div className="hobbyBox">
            <Image
              src="/static/images/headphones.svg"
              alt="Kantilal hobby"
              width={40}
              height={40}
              className="w-8 sm:w-10 md:w-10 lg:w-9 xl:w-10"
            />
            <h3 className="text-base sm:text-base md:text-base lg:text-base xl:text-lg text-gray-600">
              MUSIC
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
