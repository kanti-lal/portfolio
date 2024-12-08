import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Loading from "@/components/Loading";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import HeroSection from "@/components/HeroSection";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [spinner, setSpinner] = useState(true);
  const prefersDarkMode = useMediaQuery({ query: '(prefers-color-scheme: dark)' });

  useEffect(() => {
    if (prefersDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [prefersDarkMode]);

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
          content="This is Kanti Lal. I am Front End Developer || JavaScript - React Developer || Self Taught Programmer. I design & develop a Modern Responsive Websites. You can check my work on my portfolio."
        />
        {/* Open Graph Meta Tags*/}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@KantiLal" />
        <meta name="twitter:creator" content="@KantiLal" />
        <meta
          name="twitter:title"
          content="Kanti Lal - JavaScript / ReactJS / NextJS / GraphQL / Front End Developer"
        />
        <meta
          name="twitter:description"
          content="I Design and Develop a modern stylish websites using modern tools like React, NextJS, Tailwind CSS etc."
        />
        <meta
          name="twitter:image"
          content="/static/images/twittercardimg.png"
        />
        <meta
          name="twitter:title"
          content="Kanti Lal - JavaScript / ReactJS / NextJS / GraphQL / Front End Developer"
        />
        <meta
          name="twitter:description"
          content="I Design and Develop a modern stylish websites using modern tools like React, NextJS, Tailwind CSS etc."
        />
        <meta name="twitter:image" content="/static/images/portfolio.png" />
        {/* <meta property="og:url" content="https://kl.vercel.app/" /> */}
        {/* <meta property="article:author" content="https://kl.vercel.app/" /> */}
        <meta property="og:type" content="website" />
        <meta property="fb:app_id" content="482063489741872" />
        <meta name="author" content="Kanti Lal"></meta>
        <meta
          property="og:image"
          content="/static/images/portfolio.png"
          key="ogimage"
        />
        <meta property="og:site_name" content="Kanti Lal" key="ogsitename" />
        <meta
          property="og:title"
          content="Kanti Lal - JavaScript / ReactJS / NextJS / GraphQL / Front End Developer"
          key="ogtitle"
        />
        <meta
          property="og:description"
          content="This is Kanti Lal. I am Front End Developer || JavaScript - React Developer || Self Taught Programmer. I design & develop a Modern Responsive Websites. You can check my work on my portfolio."
          key="ogdesc"
        />
        <title>
          Kanti Lal - JavaScript / ReactJS / NextJS / GraphQL / Front End
          Developer
        </title>
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