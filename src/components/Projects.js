import React from 'react';
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";
import image4 from "../assets/images/image4.png";
import image5 from "../assets/images/image5.png";

const Projects = () => {
    const projectData = [
        {
            id: 1,
            company: "Paydesta",
            role: "Frontend Developer",
            date: "SEP 11, 2024 - PRESENT",
            description: "Working with a cross-functional team in a fast-paced environment to build, maintain, and test a user-centric fintech solution using modern technologies.",
            image: image1,
        },
        {
            id: 2,
            company: "Company B",
            role: "Backend Developer",
            date: "JAN 15, 2023 - SEP 10, 2024",
            description: "Developed and maintained backend services for a large e-commerce platform, ensuring high performance and scalability.",
            image: image2,
        },
        {
            id: 3,
            company: "Company C",
            role: "Full Stack Developer",
            date: "MAY 1, 2021 - JAN 14, 2023",
            description: "Led a small team in developing a complex web application with a focus on user experience and security.",
            image: image3,
        },
        {
            id: 4,
            company: "Company D",
            role: "UI/UX Designer",
            date: "MAR 10, 2020 - APR 30, 2021",
            description: "Designed intuitive user interfaces and improved UX for a SaaS product.",
            image: image4,
        },
        {
            id: 5,
            company: "Company E",
            role: "Data Analyst",
            date: "JUN 5, 2019 - MAR 9, 2020",
            description: "Analyzed large datasets to uncover insights that supported business decisions and strategies.",
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
                                            <p className="text-base text-gray-700 dark:text-gray-300">{data?.role}</p>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                                        {data?.date} <span className="text-green-500">PRESENT</span>
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
