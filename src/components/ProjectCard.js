import Image from "next/image";
import React from "react";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ title, description, tags, link, image }) => {
    return (
        <div className="flex flex-col w-full bg-white rounded-2xl overflow-hidden border border-transparent hover:border-gray-200 hover:shadow-xl transition-all duration-300 group cursor-pointer">
            <div className="relative h-48 sm:h-64 w-full overflow-hidden bg-kl-lightGray flex items-center justify-center">
                {image ? (
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                ) : (
                    <div className="text-kl-dark font-bold text-2xl opacity-20 uppercase tracking-widest px-4 text-center">
                        {title}
                    </div>
                )}
            </div>
            <div className="p-6 flex flex-col flex-grow space-y-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-kl-dark group-hover:text-blue-600 transition-colors">
                        {title}
                    </h3>
                    {link && (
                        <a
                            href={link}
                            target="_blank"
                            className="text-gray-400 hover:text-kl-dark transition-colors"
                        >
                            <FiExternalLink size={20} />
                        </a>
                    )}
                </div>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                    {description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                    {tags && tags.map((tag, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 bg-kl-lightGray text-kl-dark text-xs rounded-full font-medium"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
