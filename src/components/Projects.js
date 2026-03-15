import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    const projects = [
        {
            title: "Dialora.ai",
            description: "AI Voice Call Automation SaaS. Architected the end-to-end frontend ecosystem, marketing site, and admin dashboard. Integrated Twilio, ElevenLabs, and Pipedrive.",
            tags: ["React", "Next.js", "TypeScript", "NestJS", "Prisma", "AWS"],
            link: "https://dialora.ai",
            image: "/static/images/projects/dialora.png",
        },
        {
            title: "Craftroots",
            description: "E-Commerce Marketplace Platform for handcrafted products. Built core modules like authentication, product listing, and checkout with Razorpay integration.",
            tags: ["React", "Next.js", "GraphQL", "Apollo", "SSR", "Shiprocket", "Razorpay"],
            link: "https://craftroots.com",
            image: "/static/images/projects/craftroots.png",
        },
        {
            title: "Tokenomics DAO",
            description: "Blockchain Platform for token configuration and vesting schedules. Integrated Formik for complex forms and real-time on-chain data display.",
            tags: ["React", "Nextjs", "TypeScript", "Prisma", "Formik", "Web3"],
            link: "https://forgd.com",
            image: "/static/images/projects/forgd.png",
        },
        {
            title: "Zo.me",
            description: "AI Chat & Live Streaming Social Platform. Developed AI agent creation flows, group chat, live streaming, and Twitter OAuth integration using Material UI.",
            tags: ["React", "Material UI", "Nextjs", "TypeScript", "WebSockets"],
            link: null,
            image: "/static/images/projects/zo.webp",
        },
        {
            title: "EncorEstate Plans",
            description: "Digital Estate Planning Platform. Designed and built reusable UI components using Ant Design and Tailwind CSS. Integrated REST APIs and managed data flow.",
            tags: ["React", "Ant Design", "Tailwind CSS", "REST API"],
            link: "https://www.encorestateplans.com",
            image: "/static/images/projects/encorestate.png",
        },
        {
            title: "Telegram Mini-Games (Clickr.ai)",
            description: "Developed a family of interactive games (Kinetik, Puffy, Catbot) featuring real-time tapping logic, custom data visualizations using D3.js, and high-performance Lottie animations.",
            tags: ["React", "D3.js", "Lottie", "Telegram Bot API", "GSAP"],
            link: "https://clickr.ai",
            image: "/static/images/projects/clickr.jpg",
        },
        {
            title: "Hyundai Mexico 10th Anniversary App",
            description: "Interactive app featuring AI-driven 3D car creation, Firebase authentication, and SEO optimization. Engagement tool for Hyundai's 10th anniversary.",
            tags: ["React.js", "Three.js", "Firebase", "AI"],
            link: null,
            image: "/static/images/projects/hyundai.png",
        },
    ];

    return (
        <div
            className="flex flex-col items-center main-container pt-10 pb-12 px-4 sm:px-16"
            id="projects"
        >
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-kl-dark mb-10">
                Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
