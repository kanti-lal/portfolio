import Image from "next/image";
import ReactTooltip from "react-tooltip";

export const SkillCard = ({ img, title }) => {
  return (
    <div className="h-32 sm:h-44 md:w-auto md:py-8 md:px-14 bg-white flex items-center justify-center md:h-48 xl:h-44 rounded-3xl border border-transparent hover:bg-kl-lightGray hover:border-gray-300 cursor-pointer hover:shadow-xl">
      <Image
        src={img}
        alt={title}
        height={112}
        width={112}
        className="w-14 h-14 sm:w-20 sm:h-20 md:w-32 xl:h-20 xl:w-28 object-contain"
        data-tip={title}
      />
    </div>
  );
};
