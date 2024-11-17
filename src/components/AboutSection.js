import React from 'react'
import aboutsectionimage from "../assets/images/aboutsection.jpg";
import { MdEmail } from "react-icons/md";
import aboutsectionsvg from "../assets/About _ Victor Eke-8.svg";
import { FaReact, FaSass, FaNodeJs, FaNetworkWired, FaBootstrap, FaGit, FaGitlab, FaPython, FaFirefoxBrowser, FaChrome, FaFigma, FaSpotify, FaSteam, FaHeadphones } from 'react-icons/fa';
import { SiRedux, SiNextdotjs, SiTailwindcss, SiVite, SiExpress, SiMongodb, SiJetbrains, SiVisualstudio, SiGit, SiNotion, SiMicrosoft, SiGithub, SiGitlab, SiVercel, SiNetlify, SiAsus, SiSamsung, SiXiaomi, SiLogitech } from 'react-icons/si';


const items = {
    tools: [
        { name: "Visual Studio Code", url: "#", description: "Text Editor", icon: <SiVisualstudio className="text-blue-500" /> },
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
    ]
};


const AboutSection = () => {
    return (
        <div style={{
            fontFamily: 'MyFont4, sans-serif'
        }}>
            <div class="max-w-6xl mx-auto p-6 md:flex md:space-x-8">
                <div class="md:w-1/3 flex flex-col items-center md:items-start">
                    <img src={aboutsectionimage} alt="Victor Eke" class="w-100 h-100 rounded-lg object-cover mb-4" />
                    <a href="#" class="text-blue-500 underline mb-2">View Résumé</a>
                    <div class="flex items-center text-gray-700 dark:text-gray-200">
                        <MdEmail className='text-2xl' />
                        <p>arifraza787898@gmail.com</p>
                    </div>
                </div>
                <div class="flex-1">
                    <h1 style={{
                        fontFamily: 'MyFont5, sans-serif'
                    }} class="text-4xl font-medium text-gray-600 dark:text-gray-200 mb-4">I'm muhammad Arif Raza. I live in Rawalpindi, where I build the future.</h1>
                    <p class="text-gray-700 dark:text-gray-200 mb-4">
                        I am a self-driven, career-oriented software developer specializing in front-end and backend development, i have 2 years experience in Software Development. My expertise lies in building interactive web applications on the client side. Primarily working with technologies like JavaScript, Next.js, React js  and node js.
                    </p>
                    <p class="text-gray-700 dark:text-gray-200 mb-4">
                        I strongly believe in continuous learning and improving myself, so I try my best to learn in any situation possible, unfavorable or not.
                    </p>
                    <p class="text-gray-700 dark:text-gray-200 mb-6">
                        Beyond learning, I enjoy writing technical articles and creating projects that both inspire and benefit fellow developers. You can find my recent posts on <a href="https://dev.to/muhammad_arifraza_78/how-to-create-a-github-repository-from-your-terminal-5fc9" class="text-blue-500 underline">dev.to</a> and my personal blog <a href="https://dev.to/muhammad_arifraza_78/how-to-create-a-github-repository-from-your-terminal-5fc9" class="text-blue-500 underline">hosted on this site</a>.
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
                    Currently, I am working at Healmb Solutions as a full-stack developer, focusing on building a scalable and efficient project. My primary responsibilities include developing the frontend using React.js and handling backend operations with Node.js. I am dedicated to delivering robust, high-performance solutions that meet both client and organizational goals. The project emphasizes scalability and adaptability, requiring innovative problem-solving and a keen eye for detail. This role allows me to leverage my skills while continuously learning and growing in a dynamic environment.
                </p>
            </div>
            <div class="max-w-6xl mx-auto p-6">
                <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Soft Skills</h2>
                <p class="text-gray-700 dark:text-gray-200 mb-6">
                    Certain skills I've picked along the way that deserve mentioning:
                </p>

                <ul class="space-y-4 list-disc list-inside">
                    <li class="font-medium text-gray-600 dark:text-gray-200">

                        <span class="text-gray-800 dark:text-gray-200 font-semibold">Communication Skills: </span> Being able to explain complex technical concepts clearly to both technical and non-technical stakeholders is crucial. This includes verbal, written, and listening skills for effective team collaboration and client interactions.

                    </li>
                    <li class="font-medium text-gray-600 dark:text-gray-200">

                        <span class="text-gray-800 dark:text-gray-200 font-semibold">Problem-Solving :</span>  Strong analytical thinking and creativity are essential for diagnosing issues, troubleshooting, and developing innovative solutions. You should be able to break down problems into manageable parts and think critically about how to solve them.

                    </li>
                    <li class="font-medium dark:text-gray-200 text-gray-600">

                        <span class="text-gray-800 dark:text-gray-200 font-semibold">Ability to work with little supervision:</span> I understand people are busy and would love to get things done timely, so I do my best in delivering assignments and projects with little supervision, sparing you the need to closely manage/oversee my work.

                    </li>
                    <li class="font-medium dark:text-gray-200 text-gray-600">
                        <span class="text-gray-800 dark:text-gray-200 font-semibold">Teamwork and Collaboration :</span> Working well with other developers, designers, and product teams is key in delivering successful projects. Being open to feedback, assisting colleagues, and working harmoniously in group settings are essential for team dynamics.
                    </li>
                    <li class="font-medium dark:text-gray-200 text-gray-600">
                        <span class="text-gray-800 dark:text-gray-200 font-semibold">Adaptability and Learning Agility: </span> The tech landscape changes rapidly, so the ability to learn new technologies and adapt to evolving tools and frameworks is invaluable. Embrace change and continuously improve your skill set to stay competitive.
                    </li>
                    <li class="font-medium dark:text-gray-200 text-gray-600">
                        <span class="text-gray-800 dark:text-gray-200 font-semibold">Time Management and Prioritization :</span> Software development projects often come with tight deadlines and multiple tasks. Managing your time effectively, knowing how to prioritize tasks, and ensuring you meet deadlines without sacrificing quality are important for career success.
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

            </div>
        </div>
    )
}

export default AboutSection