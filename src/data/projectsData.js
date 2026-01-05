import image1 from "../assets/images/projectsimages/healmb.webp";
import image3 from "../assets/images/projectsimages/logohmb.png";
import image6 from "../assets/images/projectsimages/auction.png";
import image7 from "../assets/images/projectsimages/logocoo.png";
import image8 from "../assets/images/projectsimages/translation2.png";
import image9 from "../assets/images/projectsimages/lcc.png";
import image11 from "../assets/images/projectsimages/cardmate2.png";
import image12 from "../assets/images/projectsimages/aimhalal.png";
import aimHalalVideo from "../assets/videos/aimhalalgallary/aimhalalvideo.mp4";
import aimHalalGallery1 from "../assets/videos/aimhalalgallary/screencapture-aimhalal-2025-12-23-01_51_29.png";
import aimHalalGallery2 from "../assets/videos/aimhalalgallary/screencapture-aimhalal-dashboard-home-2025-12-23-01_52_14.png";
import aimHalalGallery3 from "../assets/videos/aimhalalgallary/screencapture-aimhalal-vendor-Home-2025-12-23-01_51_12.png";

import hmbConnectVideo from "../assets/videos/connecthmbgallary/hmbconnectvideo.mp4";
import hmbConnectGallery1 from "../assets/videos/connecthmbgallary/screencapture-connecthmb-2025-12-23-12_41_07.png";
import hmbConnectGallery2 from "../assets/videos/connecthmbgallary/screencapture-connecthmb-admin-dashboard-2025-12-23-12_39_53.png";
import hmbConnectGallery3 from "../assets/videos/connecthmbgallary/screencapture-connecthmb-home-2025-12-23-12_38_51.png";

import auctionVideo from "../assets/videos/auctiongallary/Yellow and Blue Modern Business Presentation (1).mp4";
import auctionGallery1 from "../assets/videos/auctiongallary/screencapture-auctionintel-co-uk-2025-12-23-01_01_00.png";
import auctionGallery2 from "../assets/videos/auctiongallary/screencapture-auctionintel-co-uk-admin-requests-2025-12-23-01_07_11.png";
import auctionGallery3 from "../assets/videos/auctiongallary/screencapture-auctionintel-co-uk-user-dashboard-2025-12-23-01_02_08.png";

import hmbVideo from "../assets/videos/healmindbodygallary/healmindbody.mp4";
import hmbGallery1 from "../assets/videos/healmindbodygallary/screencapture-arifch786-github-io-healmbwebsite-2025-12-25-22_57_21.png";
import hmbGallery2 from "../assets/videos/healmindbodygallary/screencapture-connect-healmb-administration-discovery-2025-12-25-22_41_35.png";
import hmbGallery3 from "../assets/videos/healmindbodygallary/screencapture-connect-healmb-clinic-dashboard-2026-01-05-21_58_40.png";

import translationVideo from "../assets/videos/translationappgalary/Untitled ‑ Made with FlexClip (7).mp4";
import translationGallery1 from "../assets/videos/translationappgalary/14.jpg";
import translationGallery2 from "../assets/videos/translationappgalary/4.jpg";
import translationGallery3 from "../assets/videos/translationappgalary/9.jpg";

import cardMateVideo from "../assets/videos/cardmategallary/cardmate.mp4";
import cardMateGallery1 from "../assets/videos/cardmategallary/Blue Modern Mobile Application Presentation (1).png";
import cardMateGallery2 from "../assets/videos/cardmategallary/Blue Modern Mobile Application Presentation (2).png";
import cardMateGallery3 from "../assets/videos/cardmategallary/Blue Modern Mobile Application Presentation.png";

export const projectData = [
    {
        id: 4,
        company: "Hmb Solutions Pvt. Ltd.",
        project: "healmindbody Connect",
        link: "https://connecthmb.com/",
        role: "Frontend Developer",
        date: "2023 - Present",
        video: hmbConnectVideo,
        gallery: [hmbConnectGallery3, hmbConnectGallery2, hmbConnectGallery1],
        problem: "Users struggled to find a unified platform that addressed both mental and physical well-being needs, often requiring multiple disjointed apps.",
        solution: "Developed 'healmindbody Connect', a comprehensive platform integrating mental health resources with physical wellness tracking. Implemented a seamless user dashboard, real-time appointment booking with specialists, and a community support forum.",
        features: [
            "Unified Dashboard for Health Tracking",
            "Real-time Specialist Booking",
            "Community Support Forums",
            "Responsive Mobile-First Design"
        ],
        description: "Worked on connecting users with mental and physical wellbeing resources through an intuitive web platform.",
        image: image7,
    },
    {
        id: 10,
        company: "AimHalal",
        project: "AimHalal",
        link: "https://aimhalal.com/",
        role: "Frontend Developer",
        date: "2025",
        video: aimHalalVideo,
        gallery: [aimHalalGallery1, aimHalalGallery2, aimHalalGallery3],
        problem: "Muslim consumers often find it difficult to verify the Halal status of products and services quickly and reliably.",
        solution: "Built the AimHalal platform with a robust search engine and verification system. Created an intuitive browsing experience allowing users to filter by category, location, and certification status.",
        features: [
            "Advanced Product Search & Filtering",
            "Geolocation-based Service Finder",
            "User Reviews and Ratings System",
            "Merchant Verification Portal"
        ],
        description: "Built the AimHalal platform to help users find halal products and services with an intuitive browsing experience.",
        image: image12,
    },
    {
        id: 5,
        company: "Freelance",
        project: "AuctionIntel",
        link: "https://auctionintel.co.uk/",
        role: "Frontend Developer",
        date: "2024",
        video: auctionVideo,
        gallery: [auctionGallery1, auctionGallery2, auctionGallery3],
        problem: "Auction houses lacked a centralized tool to analyze link performance and user engagement in real-time.",
        solution: "Designed and implemented a dashboard that provides deep insights into auction traffic. Features include real-time link tracking, user analytics, and automated reporting tools.",
        features: [
            "Real-time Link Analysis",
            "User Engagement Dashboard",
            "Automated Reporting",
            "Admin Management Portal"
        ],
        description: "Built and optimized user interfaces for an auction insights platform focused on delivering data and analytics.",
        image: image6,
    },
    {
        id: 6,
        company: "Hmb Solutions Pvt. Ltd.",
        project: "Heal Mind and Body",
        link: "https://healmb.com/",
        role: "Frontend Developer",
        date: "2024",
        video: hmbVideo,
        gallery: [hmbGallery1, hmbGallery2, hmbGallery3],
        problem: "The previous wellness website was static and lacked interactivity, leading to low user engagement.",
        solution: "Revamped the 'Heal Mind and Body' website with a focus on interactivity and responsiveness. Integrated interactive wellness tools, dynamic content loading, and a modern, soothing design language.",
        features: [
            "Interactive Wellness Tools",
            "Dynamic Content Loading",
            "Responsive Modern Design",
            "SEO Optimized"
        ],
        description: "Developed interactive and responsive frontend components for the Heal Mind and Body wellness website.",
        image: image1,
    },
    {
        id: 7,
        company: "Hmb Solutions Pvt. Ltd.",
        project: "Translation App",
        link: "https://play.google.com/store/apps/details?id=com.translatornow&hl=en",
        role: "Mobile App Developer",
        date: "2024",
        video: translationVideo,
        gallery: [translationGallery2, translationGallery3, translationGallery1],
        problem: "Travelers and language learners often struggle with language barriers and finding accurate, real-time translations on the go.",
        solution: "Developed a mobile app providing instant text and voice translations. Features include offline mode, history tracking, and an intuitive material design interface.",
        features: [
            "Real-time Text & Voice Translation",
            "Offline Support",
            "Conversation Mode",
            "History & Favorites"
        ],
        description: "Developed a mobile translation app with real-time language support and clean UX for global users.",
        image: image8,
    },
    {
        id: 8,
        company: "Hmb Solutions Pvt. Ltd.",
        project: "LCC Cricket Academy",
        link: "https://play.google.com/store/apps/details?id=com.lccshotgunsversion01&hl=en",
        role: "Mobile App Developer",
        date: "2024",
        description: "Created an Android cricket academy app featuring training schedules, updates and interactive features for players and coaches.",
        image: image9,
    },
    {
        id: 9,
        company: "Hmb Solutions Pvt. Ltd.",
        project: "CardMate",
        link: "",
        role: "Frontend Developer",
        date: "In Progress",
        video: cardMateVideo,
        gallery: [cardMateGallery3, cardMateGallery2, cardMateGallery1],
        problem: "Managing multiple business cards and digital contacts is chaotic and leads to lost connections.",
        solution: "Creating CardMate, a digital wallet for business cards. Allows users to scan, store, and share digital cards seamlessly via QR codes or NFC.",
        features: [
            "Digital Card Scanning (OCR)",
            "QR Code Sharing",
            "Cloud Sync across devices",
            "Contact Organization"
        ],
        description: "Currently developing the CardMate project focused on seamless digital card management solutions.",
        image: image11,
    },
    {
        id: 3,
        company: "Hmb Solutions Pvt. Ltd.",
        project: "healMindAndBody",
        link: "https://arifch786.github.io/healmbwebsite/",
        role: "Frontend Developer",
        date: "March, 2024",
        description: "As a Frontend Developer, I am responsible for designing user-friendly web applications with a focus on user experience.",
        image: image3,
    },

];
