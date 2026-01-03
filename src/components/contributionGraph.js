import React, { useState, useMemo } from "react";
import { motion } from 'framer-motion';


const ContributionGraph = () => {
    const years = [2024, 2023, 2022, 2021, 2020];
    const [selectedYear, setSelectedYear] = useState(years[0]);

    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Adjust February if the selected year is a leap year
    const isLeapYear = (year) => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    if (isLeapYear(selectedYear)) daysInMonth[1] = 29;

    // Memoize dummy data for contributions to prevent re-randomizing and re-calculating on every render
    const contributions = useMemo(() => Array.from({ length: 365 }, () =>
        Math.floor(Math.random() * 5)
    ), [selectedYear]);

    // Split contributions data into months based on daysInMonth
    const monthlyContributions = useMemo(() => {
        let dayIndex = 0;
        return daysInMonth.map((days) => {
            const monthData = contributions.slice(dayIndex, dayIndex + days);
            dayIndex += days;
            return monthData;
        });
    }, [contributions, daysInMonth]);

    // Animation variants for staggered grid
    const containerGrid = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.005
            }
        }
    };

    const itemGrid = {
        hidden: { opacity: 0, scale: 0.5 },
        show: { opacity: 1, scale: 1 }
    };

    // Define color classes based on contribution count
    const getColorClass = (count) => [
        "bg-gray-200",
        "bg-green-100",
        "bg-green-400",
        "bg-green-600",
        "bg-green-800",
    ][count];

    return (
        <div className="flex flex-col items-center py-20 px-6 max-w-7xl mx-auto w-full" style={{ fontFamily: 'Outfit, sans-serif' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-full space-y-8"
            >
                <div className="text-center space-y-2">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white" style={{ fontFamily: 'MyFont5' }}>
                        Activity Feed
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400">Monthly contributions and code activity tracking.</p>
                </div>

                <div className="glass rounded-[2rem] border border-gray-200 dark:border-white/10 p-8 md:p-12 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-[#27b173] opacity-[0.01] rounded-full blur-[100px]"></div>

                    <div className="flex flex-col lg:flex-row gap-12">
                        <div className="flex-grow space-y-8">
                            {/* Month Labels */}
                            <div className="overflow-x-auto pb-4 scrollbar-hide">
                                <div className="min-w-[800px] space-y-4">
                                    <div className="grid grid-cols-12 gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 px-1">
                                        {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map(m => <span key={m}>{m}</span>)}
                                    </div>

                                    {/* Contribution Grid */}
                                    <motion.div
                                        className="grid grid-cols-12 gap-2 optimize-gpu"
                                        variants={containerGrid}
                                        initial="hidden"
                                        whileInView="show"
                                        viewport={{ once: true }}
                                    >
                                        {monthlyContributions.map((monthData, monthIndex) => (
                                            <div key={monthIndex} className="grid grid-cols-4 gap-1.5">
                                                {monthData.map((count, dayIndex) => (
                                                    <motion.div
                                                        key={`${monthIndex}-${dayIndex}`}
                                                        variants={itemGrid}
                                                        className={`w-3.5 h-3.5 rounded-sm ${getColorClass(count)} hover:ring-2 ring-[#27b173] transition-all cursor-pointer`}
                                                        title={`${count} contributions`}
                                                    ></motion.div>
                                                ))}
                                            </div>
                                        ))}
                                    </motion.div>
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-gray-100 dark:border-white/5">
                                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                    Total: <span className="text-[#27b173] font-bold">{contributions.reduce((a, b) => a + b)}</span> contributions in {selectedYear}
                                </p>

                                <div className="flex items-center gap-3">
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Less</span>
                                    <div className="flex gap-1.5">
                                        {[0, 1, 2, 3, 4].map(i => (
                                            <div key={i} className={`w-3.5 h-3.5 rounded-sm ${getColorClass(i)}`}></div>
                                        ))}
                                    </div>
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">More</span>
                                </div>
                            </div>
                        </div>

                        {/* Year Selector */}
                        <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                            {years.map((year) => (
                                <button
                                    key={year}
                                    className={`py-3 px-6 rounded-2xl text-sm font-bold transition-all whitespace-nowrap ${selectedYear === year
                                        ? "bg-gradient-to-tr from-[#27b173] to-[#1a663f] text-white shadow-lg shadow-[#27b173]/20"
                                        : "glass border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:border-[#27b173]/50"
                                        }`}
                                    onClick={() => setSelectedYear(year)}
                                >
                                    {year}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>





    );
};

export default ContributionGraph;
