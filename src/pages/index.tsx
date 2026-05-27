import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => setSpinner(false), 3000);
  }, []);

  return (
    <div className="flex flex-col">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="This is Kanti Lal. I am a Software Engineer with 4.8+ years of experience building scalable AI, SaaS, and e-commerce platforms. Expert in React.js, Next.js, and TypeScript."
        />
        {/* Open Graph Meta Tags*/}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@KantiLal" />
        <meta name="twitter:creator" content="@KantiLal" />
        <meta
          name="twitter:title"
          content="Kanti Lal - Software Engineer | AI & SaaS Specialist"
        />
        <meta
          name="twitter:description"
          content="Building high-performance applications with React, Next.js, and NestJS. 4.8+ years of experience in delivering robust features."
        />
        <meta name="twitter:image" content="/meta.png" />
        <meta property="og:type" content="website" />
        <meta property="fb:app_id" content="482063489741872" />
        <meta name="author" content="Kanti Lal"></meta>
        <meta property="og:image" content="/meta.png" key="ogimage" />
        <meta property="og:site_name" content="Kanti Lal" key="ogsitename" />
        <meta
          property="og:title"
          content="Kanti Lal - Software Engineer | AI & SaaS Specialist"
          key="ogtitle"
        />
        <meta
          property="og:description"
          content="Software Engineer with 4.8+ years of experience building scalable AI, SaaS, and e-commerce platforms. Expert in React.js, Next.js, and TypeScript."
          key="ogdesc"
        />
        <title>Kanti Lal - Software Engineer | AI & SaaS Specialist</title>
        <link rel="icon" href="/static/images/logo.svg" />
      </Head>
      {spinner ? (
        <Loading />
      ) : (
        <div className="flex flex-col">
          <Nav />
          <HeroSection />
          <div className="main-container">
            <About />
          </div>
          <div className="w-full bg-[#F6F8FB]">
            <Projects />
          </div>
          <div className="w-full bg-kl-lightGray">
            <Resume />
          </div>
          <div className="w-full bg-kl-lightGray">
            <Contact />
          </div>
          <div className="w-full bg-kl-lightGray">
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}
