import React, { useState } from "react";
import { motion } from 'framer-motion';


const ContributionGraph = () => {
    const years = [2024, 2023, 2022, 2021, 2020];
    const [selectedYear, setSelectedYear] = useState(years[0]);

    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Adjust February if the selected year is a leap year
    const isLeapYear = (year) => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    if (isLeapYear(selectedYear)) daysInMonth[1] = 29;

    // Generate dummy data for contributions, distributed over 365 days
    const contributions = Array.from({ length: 365 }, () =>
        Math.floor(Math.random() * 5)
    );

    // Split contributions data into months based on daysInMonth
    let dayIndex = 0;
    const monthlyContributions = daysInMonth.map((days) => {
        const monthData = contributions.slice(dayIndex, dayIndex + days);
        dayIndex += days;
        return monthData;
    });

    // Define color classes based on contribution count
    const getColorClass = (count) => [
        "bg-gray-200",
        "bg-green-100",
        "bg-green-400",
        "bg-green-600",
        "bg-green-800",
    ][count];

    return (
        <div className="flex flex-col items-center min-h-[40vh] p-4">
             <h1 class=" text-3xl text-gray-600 dark:text-gray-100 pb-4" style={{
                fontFamily: 'MyFont3, sans-serif'
            }}>Contribution Graph</h1>
             <motion.article
                                    
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
                                        duration: 0.5,
                                        repeat: Infinity,
                                        repeatType: "mirror"
                                    }}
                                >
            <div className="flex flex-col lg:flex-row  p-4 shadow-2xl shadow-green-400 dark:shadow-green-400 rounded-lg w-full max-w-6xl">
                <div className="shadow-lg rounded-lg p-4 w-full">
                    {/* Month Labels */}
                    <div className="overflow-x-auto xl:overflow-hidden">
                        <div className="grid grid-cols-12 gap-1 text-center text-gray-700 dark:text-gray-300 text-sm mb-2 min-w-[1000px]">
                            <span>Jan</span>
                            <span>Feb</span>
                            <span>Mar</span>
                            <span>Apr</span>
                            <span>May</span>
                            <span>Jun</span>
                            <span>Jul</span>
                            <span>Aug</span>
                            <span>Sep</span>
                            <span>Oct</span>
                            <span>Nov</span>
                            <span>Dec</span>
                        </div>
                        {/* Contribution Grid */}
                        <div>
                            <div className="grid grid-cols-12 gap-1 min-w-[1000px]">
                                {monthlyContributions.map((monthData, monthIndex) => (
                                    <div key={monthIndex} className="grid grid-cols-4 gap-1">
                                        {monthData.map((count, dayIndex) => (
                                            <div
                                                key={dayIndex}
                                                className={`w-3 h-3 md:w-4 md:h-4 rounded ${getColorClass(count)}`}
                                            ></div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>



                    {/* Contribution Count */}
                    <p className="text-gray-700 text-sm mt-4">
                        {contributions.reduce((a, b) => a + b)} contributions in the last
                        year
                    </p>

                    {/* Legend */}
                    <div className="flex items-center justify-end mt-4 space-x-2">
                        <span className="text-gray-500 text-sm">Less</span>
                        <div className="flex space-x-1">
                            <div className="w-4 h-4 bg-gray-100 rounded"></div>
                            <div className="w-4 h-4 bg-green-200 rounded"></div>
                            <div className="w-4 h-4 bg-green-400 rounded"></div>
                            <div className="w-4 h-4 bg-green-600 rounded"></div>
                            <div className="w-4 h-4 bg-green-800 rounded"></div>
                        </div>
                        <span className="text-gray-500 text-sm">More</span>
                    </div>
                </div>

                {/* Year Selector */}
                <div className="flex flex-row justify-center lg:flex-col space-x-2 lg:space-x-0 lg:space-y-2 mt-4 lg:mt-0 ml-0 lg:ml-4">
                    {years.map((year) => (
                        <button
                            key={year}
                            className={`py-1 px-3 rounded-lg ${selectedYear === year
                                    ? "bg-green-500 text-white"
                                    : "bg-gray-200 text-gray-700"
                                }`}
                            onClick={() => setSelectedYear(year)}
                        >
                            {year}
                        </button>
                    ))}
                </div>
            </div>
            </motion.article>
        </div>
    );
};

export default ContributionGraph;
