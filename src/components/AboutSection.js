import React from 'react'
import aboutsectionimage from "../assets/images/aboutsection.jpg";
import { MdEmail } from "react-icons/md";
import aboutsectionsvg from "../assets/About _ Victor Eke-8.svg";
import { FaReact, FaSass, FaNodeJs, FaNetworkWired, FaBootstrap, FaGit, FaGitlab, FaPython, FaFirefoxBrowser, FaChrome, FaFigma, FaSpotify, FaSteam, FaHeadphones } from 'react-icons/fa';
import { SiRedux, SiNextdotjs, SiTailwindcss, SiVite, SiExpress, SiMongodb, SiJetbrains, SiVisualstudio, SiGit, SiNotion, SiMicrosoft, SiGithub, SiGitlab, SiVercel, SiNetlify, SiAsus, SiSamsung, SiXiaomi, SiLogitech } from 'react-icons/si';


const items = {
    tools: [
        { name: "Visual Studio Code", url: "#", description: "Text Editor", icon: <SiVisualstudio className="text-blue-500" /> },
        { name: "PyCharm", url: "#", description: "Python IDE", icon: <SiJetbrains className="text-green-500" /> },
        { name: "IntelliJ IDEA", url: "#", description: "Java IDE", icon: <SiJetbrains className="text-purple-500" /> },
        { name: "Firefox", url: "#", description: "Web Browser", icon: <FaFirefoxBrowser className="text-orange-500" /> },
        { name: "Google Chrome", url: "#", description: "Web Browser", icon: <FaChrome className="text-yellow-500" /> },
        { name: "Figma", url: "#", description: "Design Tool", icon: <FaFigma className="text-pink-500" /> },
        { name: "Microsoft Todo", url: "#", description: "Todo / Task Management", icon: <SiMicrosoft className="text-blue-600" /> },
        { name: "Git Bash", url: "#", description: "Git Terminal", icon: <SiGit className="text-gray-700" /> },
        { name: "Notion", url: "#", description: "Note taking and organization", icon: <SiNotion className="text-black" /> },
    ],
    technologies: [
        { name: "React", url: "#", description: "UI Library", icon: <FaReact className="text-sky-600" /> },
        { name: "Next.js", url: "#", description: "React Framework", icon: <SiNextdotjs className="text-black" /> },
        { name: "Redux", url: "#", description: "Production-grade State Management", icon: <SiRedux className="text-purple-600" /> },
        { name: "Zustand", url: "#", description: "State Management (personal projects)", icon: <FaNodeJs className="text-black" /> },
        { name: "Tailwind CSS", url: "#", description: "Styling Library", icon: <SiTailwindcss className="text-sky-500" /> },
        { name: "Sass", url: "#", description: "CSS Preprocessor", icon: <FaSass className="text-pink-500" /> },
        { name: "VitePress", url: "#", description: "Static Site Generator", icon: <SiVite className="text-indigo-600" /> },
        { name: "Bootstrap", url: "#", description: "CSS Framework", icon: <FaBootstrap className="text-primary" /> },
        { name: "Git", url: "#", description: "Version Control", icon: <FaGit className="text-orange-600" /> },
        { name: "GitLab", url: "#", description: "Git Repository Manager", icon: <FaGitlab className="text-orange-600" /> },
        { name: "MongoDB", url: "#", description: "NoSQL Database", icon: <SiMongodb className="text-green-500" /> },
        { name: "Node.js", url: "#", description: "JavaScript Runtime", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express", url: "#", description: "Web Application Framework", icon: <SiExpress className="text-gray-800" /> },
        { name: "RESTful APIs", url: "#", description: "API Design Style", icon: <FaNetworkWired className="text-teal-500" /> }
    ],
    platform: [
        { name: "GitHub", url: "#", description: "Version control/hosting service", icon: <SiGithub className="text-gray-800" /> },
        { name: "Spotify", url: "#", description: "Music Streaming", icon: <FaSpotify className="text-green-500" /> },
        { name: "GitLab", url: "#", description: "Version control/hosting service", icon: <SiGitlab className="text-orange-600" /> },
        { name: "Steam", url: "#", description: "Gaming", icon: <FaSteam className="text-blue-600" /> },
        { name: "Vercel", url: "#", description: "Hosting and Database", icon: <SiVercel className="text-black" /> },
        { name: "Netlify", url: "#", description: "Static JamStack hosting", icon: <SiNetlify className="text-teal-500" /> },
    ],
    hardware: [
        { name: "Asus Zephyrus M15", url: "#", description: "Work Laptop", icon: <SiAsus className="text-gray-800" /> },
        { name: "Samsung S22D300HY", url: "#", description: "22' Business Monitor", icon: <SiSamsung className="text-blue-600" /> },
        { name: "Xiaomi G34WQ", url: "#", description: "32' Curved Gaming Monitor", icon: <SiXiaomi className="text-orange-500" /> },
        { name: "Logitech MX Keys", url: "#", description: "Wireless Keyboard", icon: <SiLogitech className="text-blue-500" /> },
        { name: "Logitech MX Master 2S", url: "#", description: "Mouse", icon: <SiLogitech className="text-blue-700" /> },
        { name: "Bose Headphone 700", url: "#", description: "Bluetooth headphones (cheap version)", icon: <FaHeadphones className="text-gray-600" /> },
    ]
};


const AboutSection = () => {
    return (
        <div id='about' style={{
            fontFamily: 'MyFont4, sans-serif'
        }}>
            <div class="max-w-6xl mx-auto p-6 md:flex md:space-x-8">
                <div class="md:w-1/3 flex flex-col items-center md:items-start">
                    <img src={aboutsectionimage} alt="Victor Eke" class="w-100 h-100 rounded-lg object-cover mb-4" />
                    <a href="#" class="text-blue-500 underline mb-2">View Résumé</a>
                    <div class="flex items-center text-gray-700 dark:text-gray-200">
                        <MdEmail className='text-2xl' />
                        <p>evavic44@gmail.com</p>
                    </div>
                </div>
                <div class="flex-1">
                    <h1 style={{
                        fontFamily: 'MyFont5, sans-serif'
                    }} class="text-4xl font-medium text-gray-600 dark:text-gray-200 mb-4">I'm Victor Eke. I live in Lagos, where I build the future.</h1>
                    <p class="text-gray-700 dark:text-gray-200 mb-4">
                        I am a self-driven, career-oriented software developer specializing in front-end development and open-source, currently pursuing a bachelors degree in computer science. My expertise lies in building interactive web applications on the client side. Primarily working with technologies like JavaScript, Next.js, TypeScript and Python.
                    </p>
                    <p class="text-gray-700 dark:text-gray-200 mb-4">
                        I strongly believe in continuous learning and improving myself, so I try my best to learn in any situation possible, unfavorable or not.
                    </p>
                    <p class="text-gray-700 dark:text-gray-200 mb-6">
                        Beyond learning, I enjoy writing technical articles and creating projects that both inspire and benefit fellow developers. You can find my recent posts on <a href="#" class="text-blue-500 underline">freeCodeCamp</a> and my personal blog <a href="#" class="text-blue-500 underline">hosted on this site</a>.
                    </p>
                    <div class="bg-gray-200 p-4 rounded-lg mb-6">
                        <img src={aboutsectionsvg} alt="Victor Eke" class="w-100 h-100 rounded-lg object-cover mb-4" />

                        <p class="text-gray-800 mb-2">
                            If you ever spot me in the wild, don't hesitate to say hello! Let's grab a drink and geek-out over the latest advancements in front-end development or discuss our favorite programming language.
                        </p>
                    </div>
                </div>


            </div>

            <div class="max-w-6xl mx-auto p-6">
                <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">What I'm Currently Hacking on?</h2>
                <p class="text-gray-700 dark:text-gray-200 mb-4">
                    I'm still trying to wrap-up a few freelance projects but I took out time this week to work on the <a href="#" class="text-blue-500 underline">gdglagos hackathon</a>. It was a tireless 2-day marathon of coding and collaborating. In the end, we emerged the official winners.
                </p>
            </div>
            <div class="max-w-6xl mx-auto p-6">
                <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Soft Skills</h2>
                <p class="text-gray-700 dark:text-gray-200 mb-6">
                    Certain skills I've picked along the way that deserve mentioning:
                </p>

                <ul class="space-y-4 list-disc list-inside">
                    <li class="font-medium text-gray-600 dark:text-gray-200">

                        <span class="text-gray-800 dark:text-gray-200 font-semibold">Attention to detail:</span> I take pleasure in creating designs and UIs with careful precision, emphasizing quality over quantity.

                    </li>
                    <li class="font-medium text-gray-600 dark:text-gray-200">

                        <span class="text-gray-800 dark:text-gray-200 font-semibold">Open-source/Collaboration:</span> I founded a community on GitHub called
                        <a href="#" class="text-blue-600 underline">Communitypro</a> that helps newbie developers learn how to contribute to open-source projects and collaborate in building together. Currently, we are over
                        <a href="#" class="text-blue-600 underline">400</a> people strong with room for growth.

                    </li>
                    <li class="font-medium dark:text-gray-200 text-gray-600">

                        <span class="text-gray-800 dark:text-gray-200 font-semibold">Ability to work with little supervision:</span> I understand people are busy and would love to get things done timely, so I do my best in delivering assignments and projects with little supervision, sparing you the need to closely manage/oversee my work.

                    </li>
                </ul>
            </div>
            <div class="max-w-6xl mx-auto p-6">
                <h2 style={{
                    fontFamily: 'MyFont3, sans-serif'
                }} class="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Usage</h2>
                <p>
                    Tools, technologies and gadgets I use on a daily basis but not limited to.
                </p>
                <div class="max-w-6xl mx-auto py-6">
                    <h2 style={{
                        fontFamily: 'MyFont5, sans-serif'
                    }} className="text-2xl font-medium text-gray-800 dark:text-gray-200 mb-4">Technologies</h2>
                    <ul className="space-y-3">
                        {items.technologies?.map((tech, index) => (
                            <li key={index} className="flex items-center">
                                <span className="w-6 h-6 text-xl mr-2">
                                    {tech.icon}
                                </span>
                                <a href={tech.url} className="text-blue-600 font-semibold hover:underline">
                                    {tech.name}
                                </a>
                                <span className="text-gray-600 ml-2 dark:text-gray-200">- {tech.description}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div class="max-w-6xl mx-auto py-6">
                    <h2 style={{
                        fontFamily: 'MyFont5, sans-serif'
                    }} className="text-2xl font-medium text-gray-800 dark:text-gray-200 mb-4">Tools</h2>
                    <ul className="space-y-3">
                        {items.tools?.map((tech, index) => (
                            <li key={index} className="flex items-center">
                                <span className="w-6 h-6 text-xl mr-2">
                                    {tech.icon}
                                </span>
                                <a href={tech.url} className="text-blue-600 font-semibold hover:underline">
                                    {tech.name}
                                </a>
                                <span className="text-gray-600 ml-2 dark:text-gray-200">- {tech.description}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div class="max-w-6xl mx-auto py-6">
                    <h2 style={{
                        fontFamily: 'MyFont5, sans-serif'
                    }} className="text-2xl font-medium text-gray-800 dark:text-gray-200 mb-4">Platform</h2>
                    <ul className="space-y-3">
                        {items.platform?.map((tech, index) => (
                            <li key={index} className="flex items-center">
                                <span className="w-6 h-6 text-xl mr-2">
                                    {tech.icon}
                                </span>
                                <a href={tech.url} className="text-blue-600 font-semibold hover:underline">
                                    {tech.name}
                                </a>
                                <span className="text-gray-600 ml-2 dark:text-gray-200">- {tech.description}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div class="max-w-6xl mx-auto py-6">
                    <h2 style={{
                        fontFamily: 'MyFont5, sans-serif'
                    }} className="text-2xl font-medium text-gray-800 dark:text-gray-200 mb-4">hardware</h2>
                    <ul className="space-y-3">
                        {items.hardware?.map((tech, index) => (
                            <li key={index} className="flex items-center">
                                <span className="w-6 h-6 text-xl mr-2">
                                    {tech.icon}
                                </span>
                                <a href={tech.url} className="text-blue-600 font-semibold hover:underline">
                                    {tech.name}
                                </a>
                                <span className="text-gray-600 ml-2 dark:text-gray-200">- {tech.description}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AboutSection