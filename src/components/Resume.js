import CertificateCard from "@/components/CertificateCard";
import EducationCard from "@/components/EducationCard";
import { SkillCard } from "@/components/SkillCard";
import { FaEye } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { FiDownload } from "react-icons/fi";
import { useState } from "react";
import ExperienceCard from "@/components/ExperienceCard";
import SkillCard2 from "@/components/SkillCard2";

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
            year="2017-2020"
            degree="Bachelor of Computer Applications"
            university="Veer Narmad South Gujarat University"
          />
          <EducationCard
            year="2020-2022"
            degree="Master of Computer Applications"
            university="Parul University"
          />
        </div>
      </div>

      <div className="flex flex-col items-start self-start w-full mb-10">
        <h6 className="text-xl md:text-2xl lg:text-3xl font-bold text-kl-dark mb-6 md:mb-10 px-8 sm:px-0">
          Certificates
        </h6>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-6 px-8 ">
          <CertificateCard
            logo="/static/images/udemy.svg"
            company="Udemy"
            title="Advanced CSS and Sass: Flexbox, Grid, Animations and More!"
            link="http://ude.my/UC-7b02833b-d6a1-487b-ab5c-d4df5a4a4bae"
          />
          <CertificateCard
            logo="/static/images/udemy.svg"
            company="Udemy"
            title="The Complete JavaScript Course 2020: From Zero to Expert!"
            link="http://ude.my/UC-UOAMD8X8"
          />

          <CertificateCard
            logo="/static/images/coursera.svg"
            company="Coursera"
            title="Google UX Design"
            link="https://www.coursera.org/account/accomplishments/verify/WPH6AVCEMBC2"
          />
          <CertificateCard
            logo="/static/images/freecodecamp.svg"
            company="FreeCodeCamp"
            title="Front End Libraries"
            link=""
          />

          <CertificateCard
            logo="/static/images/linkedin.svg"
            company="LinkedIn"
            title="React.js Essential Training"
            link="https://www.linkedin.com/learning/react-js-essential-training"
          />
          <CertificateCard
            logo="/static/images/educative.svg"
            company="Cutshort "
            title="Advanced proficiency in Javascript"
            link="https://cutshort.io/certificate/75985"\
            
          />
        </div>
      </div>

      <div className="flex flex-col items-start self-start w-full mb-10">
        <h6 className="text-xl md:text-2xl lg:text-3xl font-bold text-kl-dark mb-6 md:mb-10 px-8 sm:px-0">
          Experience
        </h6>
        <div className="grid grid-cols-1 px-8 md:grid-cols-2 gap-6 lg:flex-row justify-around w-full">
          <ExperienceCard
            logo="/static/images/yudiz.svg"
            year="Feb 2023 - Present"
            post="Front End Developer"
            company="Yudiz Solutions Ltd."
            info="Working as a Front End Developer In Yudiz Solutions. Proficient In ReactJS, NextJS, GraphQL, Redux, Tailwind CSS etc. I have worked on some big projects called CricTracker and Epiko Market. I have explored NextJS, GraphQL."
          />
          <ExperienceCard
            logo="/static/images/azilen.svg"
            year="2021 - 2023"
            post="Associate Software Engineer"
            company="Azilen Technologies Pvt Ltd"
            info="Worked on designing landing pages of website using different technologies like
HTML, CSS, SCSS, BOOTSTRAP, TAILWIND CSS, JAVASCRIPT, JQUERY, REACTJS etc."
          />
        </div>
      </div>

      <div className="flex flex-col items-start self-start w-full">
        <h6 className="text-xl md:text-2xl lg:text-3xl font-bold text-kl-dark mb-6 md:mb-10 px-8 sm:px-0">
          Skills
        </h6>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6 w-full mb-6 px-8 content-center items-center">
          <SkillCard img="/static/images/adobexd.svg" title="Adobe XD" />
          <SkillCard img="/static/images/figma.svg" title="Figma" />
          <SkillCard img="/static/images/bootstrap.svg" title="Bootstrap" />
          <SkillCard img="/static/images/sass.svg" title="SASS" />
          <SkillCard
            img="/static/images/tailwindcss.svg"
            title="Tailwind CSS"
          />
          <SkillCard img="/static/images/javascript.svg" title="JavaScript" />
          <SkillCard img="/static/images/jquery.svg" title="Jquery" />
          <SkillCard img="/static/images/react.svg" title="React" />
          <SkillCard img="/static/images/redux.svg" title="Redux" />
          <SkillCard img="/static/images/nextjs-2.svg" title="NextJS" />
          <SkillCard img="/static/images/graphql.svg" title="GraphQL" />
          <SkillCard
            img="/static/images/styled-components.svg"
            title="Styled Components"
          />
          <SkillCard img="/static/images/framer.svg" title="Framer Motion" />
          <SkillCard img="/static/images/material-ui.svg" title="Material UI" />
          <SkillCard img="/static/images/semantic.svg" title="Semantic UI" />
          <SkillCard img="/static/images/firebase.svg" title="Firebase" />
          <SkillCard img="/static/images/npm.svg" title="NPM" />
          <SkillCard img="/static/images/github.svg" title="Github" />
        </div>
      </div>

      {/* Resume */}

      <a
        href="./kanti2023resume.pdf"
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
