import CertificateCard from "@/components/CertificateCard";
import EducationCard from "@/components/EducationCard";
import { SkillCard } from "@/components/SkillCard";
import { FiDownload } from "react-icons/fi";
import { useState } from "react";
import ExperienceCard from "@/components/ExperienceCard";

function Resume() {
  const [resumeBtn, setResumeBtn] = useState("false");
  return (
    <div
      className="flex flex-col items-center main-container pt-10 pb-12 px-4 sm:px-16"
      id="resume"
    >
      <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-kl-dark mb-10">
        Resume
      </h3>

      <div className="flex flex-col items-start self-start w-full mb-10">
        <h6 className="text-xl md:text-2xl lg:text-3xl font-bold text-kl-dark mb-6 md:mb-10 px-8 sm:px-0">
          Education
        </h6>
        <div className="grid grid-cols-1 px-8 md:grid-cols-2 gap-6 lg:flex-row items-center justify-around w-full">
          <EducationCard
            year="2014-2017"
            degree="Engineering Diploma in Computer Science"
            university="Board of Technical Education (BTER), Rajasthan | 73%"
          />
          <EducationCard
            year="2018-2022"
            degree="B.Tech in Computer Science & Engineering"
            university="Bikaner Technical University, Rajasthan | CGPA: 8.1/10"
          />
        </div>
      </div>

      <div className="flex flex-col items-start self-start w-full mb-10">
        {/* Certificates Section ... */}
      </div>

      <div className="flex flex-col items-start self-start w-full mb-10">
        <h6 className="text-xl md:text-2xl lg:text-3xl font-bold text-kl-dark mb-6 md:mb-10 px-8 sm:px-0">
          Experience
        </h6>
        <div className="grid grid-cols-1 px-8 md:grid-cols-2 gap-6 lg:flex-row justify-around w-full">
          <ExperienceCard
            logo="/static/images/codiste.png"
            year="March 2024 - Present"
            post="Software Engineer"
            company="Codiste Pvt Ltd"
            info="Spearheaded frontend architecture for Dialora.ai and Zo.me. Expert in NestJS, React, Next.js, and TypeScript. Implemented CI/CD, RBAC, and optimized performance. Delivered AI-driven solutions and Telegram mini-games."
          />
          <ExperienceCard
            logo="/static/images/yudiz.svg"
            year="Feb 2023 - Feb 2024"
            post="Frontend Engineer"
            company="Yudiz Solutions Ltd."
            info="Engineered core e-commerce modules for Craftroots with SSR and GraphQL. Developed blockchain platforms with real-time data integration at Tokenomics DAO. Focused on performance optimization and secure payments."
          />
          <ExperienceCard
            logo="/static/images/azilen.svg"
            year="Sept 2021 - Jan 2023"
            post="Associate Software Engineer"
            company="Azilen Technologies Pvt Ltd"
            info="Designed reusable UI components using Ant Design and Tailwind CSS for EncorEstate Plans. Integrated REST APIs and managed complex data flows in a scalable architecture."
          />
        </div>
      </div>

      <div className="flex flex-col items-start self-start w-full">
        <h6 className="text-xl md:text-2xl lg:text-3xl font-bold text-kl-dark mb-6 md:mb-10 px-8 sm:px-0">
          Skills
        </h6>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6 w-full mb-6 px-8 content-center items-center">
          <SkillCard img="/static/images/javascript.svg" title="JavaScript" />
          <SkillCard img="/static/images/react.svg" title="React" />
          <SkillCard img="/static/images/nextjs-2.svg" title="NextJS" />
          <SkillCard img="/static/images/redux.svg" title="Redux" />
          <SkillCard img="/static/images/react-query.svg" title="React Query" />
          <SkillCard img="/static/images/graphql.svg" title="GraphQL" />
          <SkillCard img="/static/images/nestjs.svg" title="NestJS" />
          <SkillCard img="/static/images/prisma.png" title="Prisma" />
          <SkillCard img="/static/images/postgresql.svg" title="PostgreSQL" />
          <SkillCard img="/static/images/mongodb.svg" title="MongoDB" />
          <SkillCard img="/static/images/supabase.svg" title="Supabase" />
          <SkillCard
            img="/static/images/tailwindcss.svg"
            title="Tailwind CSS"
          />
          <SkillCard img="/static/images/material-ui.svg" title="Material UI" />
          <SkillCard img="/static/images/firebase.svg" title="Firebase" />
          <SkillCard img="/static/images/github.svg" title="Github" />
          <SkillCard img="/static/images/framer.svg" title="Framer Motion" />
          <SkillCard img="/static/images/npm.svg" title="NPM" />
        </div>
      </div>

      {/* Resume */}

      <a
        href="./kanti-resume.pdf"
        target="_blank"
        download
        className="flex space-x-4 text-xl my-6 items-center bg-kl-dark border border-transparent hover:shadow-md hover:border-gray-200 focus:outline-none  text-kl-lightGray px-6 py-5 rounded-2xl cursor-pointer"
      >
        <FiDownload className="text-2xl md:text-3xl" />
        <span>Resume</span>
      </a>
    </div>
  );
}

export default Resume;
