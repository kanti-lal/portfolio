import Image from "next/image";
import React from "react";

const ExperienceCard = ({ logo, year, post, company, info }) => {
  return (
    <div className="flex flex-col w-full lg:w-auto items-start bg-white py-5 px-6 sm:py-8 sm:px-10 rounded-2xl space-y-4 border border-transparent hover:border-gray-300 hover:shadow-lg cursor-pointer">
      <div className="flex flex-col items-start space-y-6">
        <div className="flex items-center space-x-3 lg:space-x-5">
          <span className=" p-3.5 bg-kl-white w-12 h-12 sm:w-14 sm:h-14 md:w-14 md:h-14 lg:w-14 lg:h-14 xl:w-16 xl:h-16 rounded-xl flex items-center justify-center border border-gray-200">
            <Image width={80} height={80} src={logo} alt="Kanti Certificates" />
          </span>
          <span className="py-4 px-5 bg-kl-lightGray  text-kl-dark rounded-xl text-xs sm:text-sm lg:text-base xl:text-lg">
            {company}
          </span>
        </div>

        <h3 className="font-bold text-base sm:text-lg md:text-lg lg:text-xl xl:text-2xl text-gray-500 line-clamp-3">
          {post}
        </h3>
      </div>
      <span className="px-4 py-3 bg-kl-dark text-white rounded-lg text-xs sm:text-sm ">
        {year}
      </span>
      <p className="text-gray-500 text-sm">{info}</p>
    </div>
  );
};

export default ExperienceCard;
