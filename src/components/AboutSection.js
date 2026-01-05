import React, { useEffect } from 'react'
import { motion } from 'framer-motion';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import aboutsectionimage from "../assets/images/aboutsection.jpg";
import resume from "../assets/resume/updated resume.pdf";
import { MdEmail, MdDownload } from "react-icons/md";
import aboutsectionsvg from "../assets/About _ Victor Eke-8.svg";
import { FaReact, FaSass, FaNodeJs, FaNetworkWired, FaBootstrap, FaGit, FaGitlab, FaPython, FaFirefoxBrowser, FaChrome, FaFigma, FaSpotify, FaSteam, FaHeadphones, FaApple } from 'react-icons/fa';
import { SiRedux, SiNextdotjs, SiTailwindcss, SiVite, SiExpress, SiMongodb, SiJetbrains, SiVisualstudio, SiGit, SiNotion, SiMicrosoft, SiGithub, SiGitlab, SiVercel, SiNetlify, SiAsus, SiSamsung, SiXiaomi, SiLogitech, SiFirebase, SiAndroidstudio, SiXcode, SiGoogleplay, SiAppstore, SiExpo, SiAmazonwebservices, SiAmazonec2, SiAmazons3, SiHostinger, SiNamecheap, SiGodaddy } from 'react-icons/si';

gsap.registerPlugin(ScrollTrigger);

const items = {
    tools: [
        { name: "Visual Studio Code", url: "#", description: "Text Editor", icon: <SiVisualstudio className="text-[#007acc]" /> },
        { name: "Android Studio", url: "#", description: "Mobile Dev", icon: <SiAndroidstudio className="text-[#3ddc84]" /> },
        { name: "Xcode", url: "#", description: "iOS Dev", icon: <SiXcode className="text-[#1575f5]" /> },
        { name: "Figma", url: "#", description: "Design Tool", icon: <FaFigma className="text-[#f24e1e]" /> },
        { name: "Terminal", url: "#", description: "Git Bash / Zsh", icon: <SiGit className="text-[#f1502f]" /> },
        { name: "Notion", url: "#", description: "Organization", icon: <SiNotion className="text-[#000000] dark:text-white" /> },
    ],
    technologies: [
        { name: "React Native", url: "#", description: "Mobile Apps", icon: <FaReact className="text-[#61dafb]" /> },
        { name: "React", url: "#", description: "UI Library", icon: <FaReact className="text-[#61dafb]" /> },
        { name: "Firebase", url: "#", description: "Backend / Auth", icon: <SiFirebase className="text-[#ffca28]" /> },
        { name: "Node.js", url: "#", description: "JS Runtime", icon: <FaNodeJs className="text-[#68a063]" /> },
        { name: "Express", url: "#", description: "Web Framework", icon: <SiExpress className="dark:text-white" /> },
        { name: "MongoDB", url: "#", description: "NoSQL Database", icon: <SiMongodb className="text-[#47a248]" /> },
        { name: "Next.js", url: "#", description: "React Framework", icon: <SiNextdotjs className="dark:text-white" /> },
        { name: "Tailwind CSS", url: "#", description: "Styling Library", icon: <SiTailwindcss className="text-[#38b2ac]" /> },
    ],
    platform: [
        { name: "Google Play", url: "#", description: "Play Console", icon: <SiGoogleplay className="text-[#4285f4]" /> },
        { name: "App Store", url: "#", description: "Connect", icon: <SiAppstore className="text-[#1575f5]" /> },
        { name: "Expo", url: "#", description: "Managed Workflow", icon: <SiExpo className="dark:text-white" /> },
        { name: "GitHub", url: "#", description: "Hosting", icon: <SiGithub className="dark:text-white" /> },
        { name: "Vercel", url: "#", description: "Deployment", icon: <SiVercel className="dark:text-white" /> },
        { name: "Netlify", url: "#", description: "Static Hosting", icon: <SiNetlify className="text-[#00c7b7]" /> },
        { name: "AWS Services", url: "#", description: "Cloud Computing", icon: <SiAmazonwebservices className="text-[#FF9900]" /> },
        { name: "AWS EC2", url: "#", description: "Virtual Servers", icon: <SiAmazonec2 className="text-[#FF9900]" /> },
        { name: "AWS S3", url: "#", description: "Object Storage", icon: <SiAmazons3 className="text-[#569A31]" /> },
        { name: "Hostinger", url: "#", description: "Web Hosting", icon: <SiHostinger className="text-[#673DE6]" /> },
        { name: "Namecheap", url: "#", description: "Domain & Hosting", icon: <SiNamecheap className="text-[#DE3723]" /> },
        { name: "GoDaddy", url: "#", description: "Domain Registrar", icon: <SiGodaddy className="text-[#1BDBDB]" /> },
    ]
};

const AboutSection = () => {
    useEffect(() => {
        ScrollTrigger.refresh();

        // Reveal effect for main cards
        gsap.fromTo(".reveal-card",
            { opacity: 0, y: 50, filter: "blur(10px)" },
            {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".about-container",
                    start: "top 80%",
                }
            }
        );

        // Tech stack reveal
        gsap.fromTo(".tech-category-card",
            { opacity: 0, scale: 0.95, y: 30 },
            {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".tech-ecosystem-section",
                    start: "top 85%",
                }
            }
        );

        // Quotes and Skills
        gsap.fromTo(".reveal-bottom",
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".reveal-bottom-trigger",
                    start: "top 90%",
                }
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    const cardHover = {
        hover: { y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)", borderColor: "rgba(39, 177, 115, 0.3)" }
    };

    return (
        <div className="max-w-7xl mx-auto px-6 py-32 about-container" style={{ fontFamily: 'Outfit, sans-serif' }}>
            <div className="grid lg:grid-cols-12 gap-8">
                {/* Intro Card - Bento Large */}
                <div
                    className="lg:col-span-8 glass rounded-[3rem] p-10 lg:p-16 flex flex-col justify-center relative overflow-hidden group reveal-card"
                    style={{ willChange: "transform, opacity" }}
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#27b173]/5 dark:bg-white/5 opacity-10 rounded-full blur-[100px] group-hover:opacity-20 transition-opacity"></div>
                    <div className="relative z-10 space-y-8">
                        <motion.h1
                            style={{ fontFamily: 'MyFont5, sans-serif' }}
                            className="text-5xl sm:text-7xl font-black text-gray-900 dark:text-white leading-[1.1]"
                        >
                            Transforming Complex Vision into <span className="text-[#27b173]">Digital Reality</span>.
                        </motion.h1>
                        <div className="space-y-6 max-w-3xl">
                            <p className="text-gray-600 dark:text-gray-400 text-xl leading-relaxed">
                                I'm <span className="font-bold text-gray-900 dark:text-white">Muhammad Arif Raza</span>, a Full Stack Web and App Developer / Full Stack Software Engineer with a focus on building scalable, high-performance applications.
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                                With over 4 years of experience at HMB Solutions, I've mastered the art of turning complex business requirements into elegant digital realities. I specialize in building robust solutions for both web and mobile platforms.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Profile Card - Bento Medium */}
                <div className="lg:col-span-4 space-y-8 reveal-card" style={{ willChange: "transform, opacity" }}>
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-[#27b173]/5 opacity-20 blur-2xl group-hover:opacity-30 transition-opacity"></div>
                        <div className="relative glass p-3 rounded-[3rem] overflow-hidden">
                            <img
                                src={aboutsectionimage}
                                alt="Muhammad Arif Raza"
                                className="w-full aspect-[4/5] rounded-[2.5rem] object-cover filter contrast-[1.05] grayscale-[10%] group-hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <motion.a
                            href={resume}
                            download="Muhammad_Arif_Raza_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center justify-center gap-3 w-full py-5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-[2rem] font-black text-lg shadow-xl"
                        >
                            <MdDownload className="text-2xl" />
                            Download Résumé
                        </motion.a>
                    </div>
                </div>

                {/* Tech Stack - Bento Full Width */}
                <div className="lg:col-span-12 mt-12 space-y-12 tech-ecosystem-section" style={{ willChange: "transform, opacity" }}>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div className="space-y-4">
                            <h2 className="text-4xl font-black text-gray-900 dark:text-white" style={{ fontFamily: 'MyFont5, sans-serif' }}>
                                Tech Ecosystem
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 max-w-2xl text-lg">
                                A selection of the industry-leading tools and frameworks I use to build robust digital products.
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {Object.entries(items).map(([category, list]) => (
                            <div key={category} className="space-y-6 p-10 glass rounded-[2.5rem] border border-gray-200 dark:border-white/5 transition-all duration-500 hover:shadow-2xl tech-category-card">
                                <h3 className="text-2xl font-black capitalize text-gray-900 dark:text-white mb-8 border-l-4 border-[#27b173] pl-4">
                                    {category}
                                </h3>
                                <ul className="space-y-5">
                                    {list.map((item, idx) => (
                                        <motion.li
                                            key={idx}
                                            className="flex items-center gap-5 group cursor-default"
                                            whileHover={{ x: 10 }}
                                        >
                                            <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white dark:bg-white/5 shadow-sm border border-gray-100 dark:border-white/5 transition-all duration-300 group-hover:border-[#27b173]">
                                                <div className="text-2xl transition-transform group-hover:scale-125 duration-300">
                                                    {item.icon}
                                                </div>
                                            </div>
                                            <div>
                                                <p className="font-extrabold text-gray-900 dark:text-gray-100 text-base">{item.name}</p>
                                                <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">{item.description}</p>
                                            </div>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quote/Vision Card */}
                <div
                    className="lg:col-span-12 mt-12 p-12 glass rounded-[3rem] border border-[#27b173]/20 bg-[#27b173]/5 relative overflow-hidden group reveal-bottom-trigger reveal-bottom"
                    style={{ willChange: "transform, opacity" }}
                >
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-[#27b173] opacity-[0.01] rounded-full blur-[100px]"></div>
                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                        <img src={aboutsectionsvg} alt="Design element" className="w-24 h-24 opacity-20 filter invert dark:invert-0" />
                        <p className="text-2xl md:text-3xl font-medium text-gray-800 dark:text-gray-200 italic leading-relaxed text-center md:text-left">
                            "I believe in building software that doesn't just work, but <span className="text-[#27b173] font-black">inspires</span>. Every pixel and every line of code is an opportunity to create something extraordinary."
                        </p>
                    </div>
                </div>

                {/* Soft Skills Section */}
                <div className="lg:col-span-12 mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 reveal-bottom">
                    {[
                        { title: "Strategic Thinking", desc: "Analyzing problems from a business perspective to deliver high-impact technical solutions." },
                        { title: "Fluid Collaboration", desc: "Seamlessly integrating with design and product teams to achieve unified product goals." },
                        { title: "Rapid Adaptation", desc: "Fast-tracking the adoption of emerging technologies to maintain a competitive edge." },
                    ].map((skill, idx) => (
                        <div key={idx} className="p-10 glass rounded-[2.5rem] border border-gray-200 dark:border-white/5 hover:border-[#27b173]/50 transition-all duration-500 group">
                            <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-[#27b173] to-[#1a663f] flex items-center justify-center text-white text-2xl font-black mb-8 shadow-lg shadow-[#27b173]/20 group-hover:scale-110 transition-transform">
                                0{idx + 1}
                            </div>
                            <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4">{skill.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base font-medium">{skill.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


export default AboutSection