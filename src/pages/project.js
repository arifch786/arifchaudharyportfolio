import React from 'react';
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";
import image4 from "../assets/images/image4.png";
import image5 from "../assets/images/image5.png";
import { motion } from 'framer-motion';


const Project = () => {
    const projectData = [
        {
            id: 1,
            company: "Paydesta",
            role: "Frontend Developer",
            date: "SEP 11, 2024 - PRESENT",
            description: "Working with a cross-functional team in a ....",
            image: image1,
        },
        {
            id: 2,
            company: "Company B",
            role: "Backend Developer",
            date: "JAN 15, 2023 - SEP 10, 2024",
            description: "Developed and maintained backend services .....",
            image: image2,
        },
        {
            id: 3,
            company: "Company C",
            role: "Full Stack Developer",
            date: "MAY 1, 2021 - JAN 14, 2023",
            description: "Led a small team in developing a complex ....",
            image: image3,
        },
        {
            id: 4,
            company: "Company D",
            role: "UI/UX Designer",
            date: "MAR 10, 2020 - APR 30, 2021",
            description: "Designed intuitive user interfaces .....",
            image: image4,
        },
        {
            id: 5,
            company: "Company E",
            role: "Data Analyst",
            date: "JUN 5, 2019 - MAR 9, 2020",
            description: "Analyzed large datasets to uncover .....",
            image: image5,
        },
    ];
    return (
        <div className="flex items-center justify-center min-h-[40vh] p-6 md:p-4 md:pt-20">
            <div className="w-full max-w-6xl mx-auto">
                <header>
                    <h1 style={{
                        fontFamily: 'MyFont5'
                    }} className="text-5xl font-bold mb-4">Projects</h1>
                </header>
                <section>
                    <p className="mb-6 text-gray-800 dark:text-gray-200">
                        I've worked on tons of little projects over the years, but these are the ones that I'm most <br /> proud of. Many of them are open-source, so if you see something that piques your <br /> interest, check out the code and contribute if you have ideas on how it can be improved.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projectData?.map((data, index) => (
                            <motion.article
                            key={index}
                            className="rounded-lg p-4 transition-all duration-300 ease-in-out"
                            initial={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)" }}
                            animate={{
                                boxShadow: [
                                    "0px 0px 20px 4px rgba(255, 0, 150, 0.4)",
                                    "0px 0px 20px 4px rgba(0, 204, 255, 0.4)",
                                    "0px 0px 20px 4px rgba(0, 255, 153, 0.4)",
                                    "0px 0px 20px 4px rgba(255, 255, 0, 0.4)"
                                ],
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                repeatType: "mirror"
                            }}
                        >
                                <div className="flex items-center gap-6">
                                    <figure className="bg-gray-100 border border-gray-300 p-3 mx-5 flex justify-center rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out">
                                        <img
                                            src={data?.image}
                                            alt={data?.company || "Company Logo"}
                                            style={{ height: "60px", width: "80px" }}
                                            className="rounded-md transition-transform duration-300 ease-in-out hover:rotate-180 hover:hue-rotate-180"
                                        />
                                    </figure>
                                    <div>
                                        <h1 className="text-lg font-semibold text-gray-700">
                                            {data?.company}
                                        </h1>
                                        <p className="text-sm text-gray-500">
                                            {data?.description}
                                        </p>
                                    </div>
                                </div>
                                </motion.article>
                        ))}
                    </div>


                </section>
            </div>
        </div>
    );
};

export default Project;
