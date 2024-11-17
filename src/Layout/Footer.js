import React from 'react'
import image1 from "../assets/images/image4.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";

const Footer = () => {
    return (
        <footer className="text-gray-600 dark:text-gray-100 flex flex-col md:flex-row justify-between items-center py-8 md:py-16 mb-8 md:mb-16 px-4 md:px-48 space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
                <span>Built with:</span>
                <img src={image1} alt="Sanity" className="w-6 h-6" />
                <span>Sanity</span>
                <img src={image2} alt="Next.js" className="w-6 h-6" />
                <span>Next.js</span>
                <img src={image3} alt="Vercel" className="w-6 h-6" />
                <span>Vercel</span>
            </div>
            <div className="text-center md:text-left">
                <span>Copyright © Arif Chaudhary 2024. All rights Reserved.</span>
            </div>
        </footer>
    )
}

export default Footer;
