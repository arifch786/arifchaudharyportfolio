import React from 'react'
import { FaGithub, FaYoutube, FaInstagram, FaLinkedin, FaTwitter, FaCodepen, FaDribbble, FaSteam, FaUnsplash, FaDailymotion, FaProductHunt, FaStackOverflow, FaGitlab, FaCode } from "react-icons/fa";

const Herosection = () => {
    return (
        <div className="min-h-[40vh] flex items-center justify-center px-4 py-1 sm:py-9 sm:px-6 lg:px-0">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 max-w-6xl w-full">
                {/* Left Side Section */}
                <div className="lg:w-3/5 w-full space-y-4">
                    <h1 style={{
                        fontFamily: 'MyFont5, sans-serif'
                    }} className="text-3xl text-gray-700 dark:text-gray-300 sm:text-4xl lg:text-5xl font-medium">
                        Software engineer, technical writer <br />& open-source maintainer
                    </h1>
                    <p className="text-gray-700 dark:text-gray-300 text-base sm:text-base lg:text-lg py-2">
                        I'm Victor Eke, an experienced frontend developer passionate about learning and building open-source software that is beneficial to developers and the world at large.
                    </p>
                    <div className="flex flex-wrap gap-4 text-gray-700 dark:text-gray-300 py-2 text-lg">
                        <a href="#" className="flex items-center space-x-2 hover:text-gray-950"><i className="fab fa-github"><FaGithub /></i><span>GitHub</span></a>
                        <a href="#" className="flex items-center space-x-2 hover:text-gray-950"><i className="fab fa-twitter"><FaTwitter /></i><span>X</span></a>
                        <a href="#" className="flex items-center space-x-2 hover:text-gray-950"><i className="fab fa-linkedin"><FaLinkedin /></i><span>LinkedIn</span></a>
                        <a href="#" className="flex items-center space-x-2 hover:text-gray-950"><i className="fab fa-github"><FaInstagram /></i><span>Instagram</span></a>
                        <a href="#" className="flex items-center space-x-2 hover:text-gray-950"><i className="fab fa-twitter"><FaYoutube /></i><span>Youtube</span></a>
                        <a href="#" className="flex items-center space-x-2 hover:text-gray-950"><i className="fab fa-linkedin"><FaCodepen /></i><span>Codepen</span></a>
                        <a href="#" className="flex items-center space-x-2 hover:text-gray-950"><i className="fab fa-github"><FaDribbble /></i><span>FaDribbble</span></a>
                        <a href="#" className="flex items-center space-x-2 hover:text-gray-950"><i className="fab fa-twitter"><FaSteam /></i><span>Steam</span></a>
                        <a href="#" className="flex items-center space-x-2 hover:text-gray-950"><i className="fab fa-linkedin"><FaUnsplash /></i><span>Unsplash</span></a>
                        <a href="#" className="flex items-center space-x-2 hover:text-gray-950"><i className="fab fa-github"><FaDailymotion /></i><span>Dailymotion</span></a>
                        <a href="#" className="flex items-center space-x-2 hover:text-gray-950"><i className="fab fa-twitter"><FaProductHunt /></i><span>FaProductHunt</span></a>
                        <a href="#" className="flex items-center space-x-2 hover:text-gray-950"><i className="fab fa-github"><FaStackOverflow /></i><span>FaStackOverflow</span></a>
                        <a href="#" className="flex items-center space-x-2 hover:text-gray-950"><i className="fab fa-twitter"></i><FaGitlab /><span>FaGitlab</span></a>
                        <a href="#" className="flex items-center space-x-2 hover:text-gray-950"><i className="fab fa-linkedin"><FaCode /></i><span>code</span></a>

                    </div>
                </div>

                {/* Right Side Section */}
                <div className="lg:w-2/5 flex justify-center lg:justify-end mt-8 lg:mt-0">
                    <svg
                        viewBox="0 0 1273 906"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full max-w-md h-auto"
                    >
                        <g>
                            <path
                                className="path-animation"
                                d="M318.587 315.483V510.936L477.544 431.391V236.949M318.587 315.483L159.63 236.949M318.587 315.483L477.544 236.949M318.587 315.483V509.925L159.63 589.469M318.587 315.483L159.63 237.286L0.673828 315.483M318.587 315.483L159.63 394.016M477.544 236.949L318.587 158.753L159.63 236.949M477.544 236.949V432.402M477.544 236.949L318.587 158.416L477.544 80.2192L636.5 158.416L477.544 236.949ZM159.63 236.949V79.5451M159.63 589.469V394.016M159.63 589.469L0.673828 509.925V315.483M0.673828 315.483L159.63 394.016M159.63 79.5451L318.587 1.34863L477.544 79.5451L318.587 158.079L159.63 79.5451ZM795.457 395.701V237.286M795.457 237.286L636.5 159.09L477.544 237.286M795.457 237.286L636.5 315.82M477.544 237.286V431.728L601.139 491.762M477.544 237.286L636.5 315.82M636.5 315.82V472.887M954.414 668.003V473.561M954.414 473.561L795.457 395.364L636.5 473.561L795.457 552.094M954.414 473.561L795.457 552.094M954.414 473.561V669.014M954.414 473.561L795.457 395.027L954.414 316.831L1113.37 395.027L954.414 473.561ZM795.457 552.094L636.5 473.898L477.544 552.094M795.457 552.094L636.5 630.628M477.544 552.094V746.534L636.5 826.078V630.628M477.544 552.094L636.5 630.628M795.457 709.498V904.949M795.457 709.498L636.5 630.965M795.457 709.498L954.414 630.965M795.457 904.949L954.414 825.404V630.965M795.457 904.949L636.5 825.404V630.965M636.5 630.965L795.457 552.768L954.414 630.965M1113.37 552.431V747.882M1113.37 552.431L954.414 473.898M1113.37 552.431L1272.33 473.898M1113.37 747.882L1272.33 668.34V473.898M1113.37 747.882L954.414 668.34V473.898M954.414 473.898L1113.37 395.701L1272.33 473.898"
                                stroke="url(#paint-linear)"
                                strokeOpacity="0.6"
                                strokeWidth="2"
                            ></path>
                        </g>
                        <defs>
                            <linearGradient
                                id="paint-linear"
                                x1="1272.23"
                                y1="479.474"
                                x2="506.242"
                                y2="-216.277"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#27b173"></stop>
                                <stop offset="0.619553" stopColor="#1a663f"></stop>
                                <stop offset="0.93102" stopColor="#26312d"></stop>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Herosection
