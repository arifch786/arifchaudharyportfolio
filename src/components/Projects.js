import React from 'react';
import image1 from "../assets/images/projectsimages/healmb.webp";
import image2 from "../assets/images/projectsimages/workgen.png";
import image3 from "../assets/images/projectsimages/logohmb.png";
import image4 from "../assets/images/projectsimages/aws.png";
import image5 from "../assets/images/projectsimages/chatwebapp.jpg";

const Projects = () => {
    const projectData = [
        {
            id: 1,
            company: "Hmb Solutions Pvt. Ltd.",
            project: "healMB",           
            link: "https://connect.healmb.com/",
            role: "Frontend Developer",
            date: "March, 2023 - Present",
            description: "As a Full Stack Developer, I am responsible for designing and implementing scalable and user-friendly web applications. I handle both frontend and backend development, ensuring seamless integration of intuitive interfaces with efficient server-side logic. My role includes managing databases, optimizing performance, and integrating third-party APIs and cloud services. I collaborate closely with cross-functional teams to deliver high-quality solutions while adhering to coding standards and best practices. Additionally, I stay updated with the latest technologies to continually enhance the functionality and scalability of the software I build.",
            image: image1,
        },
        {
            id: 2,
            company: "Work Generations Pvt. Ltd.",
            project: "WYSEBYSE",   
            link: "https://www.wysebyse.com/",
            role: "Front End Developer",
            date: "December 15, 2022 - March 10, 2023",
            description: "As a Frontend Developer intern, I focused on creating visually appealing and responsive user interfaces using HTML, CSS, and JavaScript. I collaborated with designers and backend teams to ensure seamless integration and functionality. My role included debugging and optimizing code for cross-browser compatibility and performance. Additionally, I contributed to improving user experience by implementing interactive and dynamic elements.",
            image: image2,
        },
        {
            id: 3,
            company: "Hmb Solutions Pvt. Ltd.",
            project: "healMindAndBody",           
            link: "https://arifch786.github.io/healmbwebsite/",
            role: "Frontend Developer",
            date: "March, 2023 - Present",
            description: "As a Frontend Developer, I am responsible for designing and user-friendly web applications developing with a focus on user experience.",
            image: image3,
        },
        {
            id: 4,
            company: "Hmb Solutions Pvt. Ltd.",
            role: "Cloud Services",
            date: "may, 2024 - Present",
            description: "As part of deployment responsibilities, I configured and deployed frontend applications on AWS Amplify, ensuring seamless hosting and continuous deployment pipelines. For AWS EC2, I managed instance setups, installed dependencies, and configured environments for backend or full-stack applications. I implemented security measures like IAM roles, firewall rules, and SSL certificates to protect deployments. Monitoring application performance and scaling resources as needed was a key focus. Additionally, I ensured smooth integration and high availability for all deployed services.",
            image: image4,
        },
        {
            id: 5,
            company: "Frelancing Project",
            role: "Full Stack Developer",
            date: "jan 5, 2024 - MAR 9, 2024",
            description: "As a Full Stack Developer for a chat web app, I designed and implemented both the frontend and backend, ensuring a seamless user experience. On the frontend, I created interactive interfaces for real-time messaging using frameworks like React or Angular. On the backend, I developed APIs, managed databases, and implemented WebSocket protocols for live communication. I also focused on optimizing performance, ensuring data security, and integrating user authentication features. Collaboration with the team ensured the delivery of a scalable and reliable chat application.",
            image: image5,
        },
    ];
    return (
        <div className=" flex items-center justify-center min-h-[40vh] px-2 md:pt-20">

            <div className="w-full max-w-6xl mx-auto">
                <h1
                    style={{
                        fontFamily: 'MyFont3, sans-serif'
                    }}
                    className="text-3xl text-gray-700 dark:text-gray-300 font-bold mb-16 mt-10"
                >
                    Work Experience
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {projectData?.map((data) => (
                        <div
                            style={{
                                fontFamily: 'MyFont4, sans-serif'
                            }}
                            className="flex flex-wrap mb-10"
                        >
                            <div className="w-1/5">
                                <div className="bg-gray-100 border-gray-300 logo p-3 flex justify-center rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out shadow-slate-300 border-2 relative">
                                    <img
                                        src={data?.image}
                                        alt="Profile Image"
                                        style={{ height: "60px", width: "60px" }}
                                        className="rounded-md transition-transform duration-300 ease-in-out hover:rotate-180 hover:hue-rotate-180"
                                    />
                                    <span className="vertical-line"></span>
                                </div>
                            </div>
                            <div className="w-4/5 px-4">
                                <div>
                                    <div className="flex mb-4">
                                        <div>
                                            <h2 className="text-2xl font-semibold">{data?.company}</h2>
                                           
                                            <a
                                                href={data.link}
                                                className="no-underline text-inheri"
                                            ><h4 style={{color: "blue"}}>{data?.project}</h4></a>
                                            <p className="text-base text-gray-700 dark:text-gray-300">{data?.role}</p>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                                        {data?.date} 
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                                        {data?.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </div>
    );
}

export default Projects;
