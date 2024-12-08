import CertificateCard from "@/components/CertificateCard";
import EducationCard from "@/components/EducationCard";
import { SkillCard } from "@/components/SkillCard";
import { FiDownload } from "react-icons/fi";
import { useState } from "react";
import { motion } from "framer-motion";
import ExperienceCard from "@/components/ExperienceCard";

function Resume() {
  const [resumeBtn, setResumeBtn] = useState("false");
  return (
    <motion.div
      className="flex flex-col items-center main-container pt-10 pb-12 px-4 sm:px-16 bg-white dark:bg-gray-900"
      id="resume"
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
        Resume
      </motion.h3>

      <motion.div 
        className="flex flex-col items-start self-start w-full mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.h6 
          className="text-xl md:text-2xl lg:text-3xl font-bold text-kl-dark dark:text-white mb-6 md:mb-10 px-8 sm:px-0"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Education
        </motion.h6>
        <motion.div 
          className="grid grid-cols-1 px-8 md:grid-cols-2 gap-6 lg:flex-row items-center justify-around w-full"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <EducationCard
            year="2014-2017"
            degree="Poly. Computer Science & Engg Diploma"
            university="Board of Technical Education (BTER), Jodhpur"
          />
          <EducationCard
            year="2018-2022"
            degree="B.Tech in Computer Science & Engineering"
            university="Bikaner Technical University, Rajasthan"
          />
        </motion.div>
      </motion.div>

      <motion.div 
        className="flex flex-col items-start self-start w-full mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
      >
        <motion.h6 
          className="text-xl md:text-2xl lg:text-3xl font-bold text-kl-dark dark:text-white mb-6 md:mb-10 px-8 sm:px-0"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          Certificates
        </motion.h6>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-6 px-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <CertificateCard
            logo="/static/images/udemy.svg"
            company="Udemy"
            title="React - The Complete Guide"
            link=""
          />
          <CertificateCard
            logo="/static/images/udemy.svg"
            company="Udemy"
            title="HTML & CSS"
            link="https://www.udemy.com/certificate/UC-5681ead8-c927-4ec0-9479-8799ebfae674/"
          />
          <div>
          <CertificateCard
            logo="/static/images/namasteDev.png"
            company="NamasteDev.com"
            title="Namaste React 🚀"
            link="https://drive.google.com/file/d/1ko7yU5YULqSf405M9tTEXUyuKFv8TFWF/view?pli=1"
          />
          </div>
         
          <div>
          <CertificateCard
            logo="/static/images/atlassian.png"
            company="Atlassian"
            title="Atlassian Agile Project Management"
            link="https://www.linkedin.com/learning/certificates/fb0ecb6faf5babb1608f3cd5371090e874ce7105afdf3e90dbfffc28f64deb31"
          />
          </div>
          <div>
            
            <CertificateCard
              logo="/static/images/hacker.png"
              company="HackerRank "
              title="Javascript"
              link="https://www.hackerrank.com/certificates/e57718f5d138"
            />
          </div>
          <div>
            <CertificateCard
              logo="/static/images/hacker.png"
              company="HackerRank "
              title="ReactJS"
              link="https://www.hackerrank.com/certificates/8eb48748b03a"
            />
          </div>
          <div>
            <CertificateCard
              logo="/static/images/hacker.png"
              company="HackerRank "
              title="CSS"
              link="https://www.hackerrank.com/certificates/180bbbf81452"
            />
          </div>
          <div>
            <CertificateCard
              logo="/static/images/cutshorts.png"
              company="Cutshort "
              title="Advanced proficiency in Javascript"
              link="https://cutshort.io/certificate/75985"
            />
          </div>

          <CertificateCard
            logo="/static/images/linkedin.svg"
            company="LinkedIn"
            title="React Software Architecture"
            link="https://www.linkedin.com/learning/certificates/23ed9d0f413326e113b83a5cc8d1198113f203b78983577ce46e719a8d741fc4?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BuqOeQZOHTKu5da3pgXLCig%3D%3D"
          />
          <CertificateCard
            logo="/static/images/linkedin.svg"
            company="LinkedIn"
            title="React Design Patterns"
            link="https://www.linkedin.com/learning/certificates/5a2220378d9426dfb1f31e0903dd71bf4b489139cf4becc5eb61b6afc3257ac1?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BB5coPfVkTK2jbdllC8hSpw%3D%3D"
          />

         
        </motion.div>
      </motion.div>

      <motion.div 
        className="flex flex-col items-start self-start w-full mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7 }}
      >
        <motion.h6 
          className="text-xl md:text-2xl lg:text-3xl font-bold text-kl-dark dark:text-white mb-6 md:mb-10 px-8 sm:px-0"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.9 }}
        >
          Experience
        </motion.h6>
        <motion.div 
          className="grid grid-cols-1 px-8 md:grid-cols-2 gap-6 lg:flex-row justify-around w-full"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 2.1 }}
        >
        <ExperienceCard
            logo="/static/images/codiste.png"
            year="March 2024 - Present"
            post="Software Engineer"
            company="Codiste Pvt Ltd"
            info="Currently working as a Software Engineer at Codiste Pvt Ltd. Proficient in ReactJS, NextJS, GraphQL, and developing AI and blockchain frontend applications. Also learning Node.js and backend services."
          />
          <ExperienceCard
            logo="/static/images/yudiz.svg"
            year="Feb 2023 - March 2024"
            post="Front End Developer"
            company="Yudiz Solutions Ltd."
            info="Working as a Front End Developer In Yudiz Solutions. Proficient In ReactJS, NextJS, GraphQL, Redux, Tailwind CSS etc. I have worked on some big projects called Craftroots and Tokenomics DAO. I have explored NextJS, GraphQL."
          />
          <ExperienceCard
            logo="/static/images/azilen.svg"
            year="2021 - 2023"
            post="Associate Software Engineer"
            company="Azilen Technologies Pvt Ltd"
            info="Worked on multiple projects using different technologies like  
                   REACTJS, NextJS, Akita, JAVASCRIPT, JQUERY, HTML, CSS, SCSS, BOOTSTRAP, TAILWIND CSS, etc."
          />
        </motion.div>
      </motion.div>

      <motion.div 
        className="flex flex-col items-start self-start w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.3 }}
      >
        <motion.h6 
          className="text-xl md:text-2xl lg:text-3xl font-bold text-kl-dark dark:text-white mb-6 md:mb-10 px-8 sm:px-0"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          Skills
        </motion.h6>
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6 w-full mb-6 px-8 content-center items-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 2.7 }}
        >
          <SkillCard img="/static/images/javascript.svg" title="JavaScript" />
          <SkillCard img="/static/images/react.svg" title="React" />
          <SkillCard img="/static/images/redux.svg" title="Redux" />
          <SkillCard img="/static/images/nextjs-2.svg" title="NextJS" />
          <SkillCard img="/static/images/graphql.svg" title="GraphQL" />
          <SkillCard img="/static/images/prisma.png" title="Prisma" />
          <SkillCard img="/static/images/jquery.svg" title="Jquery" />
          <SkillCard
            img="/static/images/tailwindcss.svg"
            title="Tailwind CSS"
          />
          <SkillCard img="/static/images/bootstrap.svg" title="Bootstrap" />
          <SkillCard img="/static/images/sass.svg" title="SASS" />

          <SkillCard img="/static/images/formik.png" title="Formik" />
          <SkillCard img="/static/images/firebase.svg" title="Firebase" />
          <SkillCard img="/static/images/github.svg" title="Github" />
          <SkillCard
            img="/static/images/styled-components.svg"
            title="Styled Components"
          />
          <SkillCard img="/static/images/framer.svg" title="Framer Motion" />
          <SkillCard img="/static/images/material-ui.svg" title="Material UI" />
          <SkillCard img="/static/images/semantic.svg" title="Semantic UI" />

          <SkillCard img="/static/images/npm.svg" title="NPM" />
        </motion.div>
      </motion.div>

      {/* Resume */}

      <motion.a
        href="./kanti-resume.pdf"
        target="_blank"
        download
        className="flex space-x-4 text-xl my-6 items-center bg-kl-dark dark:bg-gray-800 border border-transparent hover:shadow-md hover:border-gray-200 focus:outline-none text-kl-lightGray dark:text-gray-300 px-6 py-5 rounded-2xl cursor-pointer"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2.9 }}
      >
        <FiDownload className="text-2xl md:text-3xl" />
        <span>Resume</span>
      </motion.a>
    </motion.div>
  );
}

export default Resume;