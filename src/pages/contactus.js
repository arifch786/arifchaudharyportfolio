import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiSend, FiMapPin, FiPhone, FiGithub, FiLinkedin, FiInstagram, FiTwitter } from 'react-icons/fi';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            toast.error('Please fill in all required fields.');
            return;
        }

        setIsSubmitting(true);
        const serviceID = 'arifch@112233';
        const templateID = 'template_y4az3de';
        const userID = 'AcpETFVOjwFjv9bzd';

        emailjs
            .send(serviceID, templateID, formData, userID)
            .then((response) => {
                console.log('Email sent successfully:', response);
                setFormData({ name: '', email: '', subject: '', message: '' }); // Clear the form
                toast.success('Message sent! I will get back to you soon.');
            })
            .catch((error) => {
                console.error('Failed to send email:', error);
                toast.error('Failed to send email. Please try again.');
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    };

    const socialLinks = [
        { icon: <FiGithub />, href: "https://github.com/arifch786", label: "GitHub" },
        { icon: <FiLinkedin />, href: "https://www.linkedin.com/in/muhammad-arif-raza-6b7bb3190/", label: "LinkedIn" },
        { icon: <FiInstagram />, href: "https://www.instagram.com/arifchaudhary_007", label: "Instagram" },
        { icon: <FiTwitter />, href: "https://x.com/chuadhary_raza?s=21", label: "Twitter" },
    ];

    return (
        <div className="min-h-screen py-20 px-4 relative overflow-hidden mesh-gradient">
            <ToastContainer position="bottom-right" theme="dark" />

            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-20">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500 rounded-full blur-[120px]" />
            </div>

            <motion.div
                className="max-w-6xl mx-auto relative z-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Header Section */}
                <div className="text-center mb-16">
                    <motion.h2
                        className="text-primary font-medium tracking-widest uppercase text-sm mb-3"
                        variants={itemVariants}
                    >
                        Get In Touch
                    </motion.h2>
                    <motion.h1
                        className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
                        variants={itemVariants}
                    >
                        Let's Create Something <span className="text-primary italic">Together</span>
                    </motion.h1>
                    <motion.p
                        className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg"
                        variants={itemVariants}
                    >
                        Have a project in mind or just want to say hello? Drop me a message below,
                        and I'll get back to you as soon as possible.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                    {/* Left Side: Contact Info */}
                    <motion.div
                        className="lg:col-span-2 space-y-8"
                        variants={itemVariants}
                    >
                        <div className="glass p-8 rounded-3xl border border-white/10 shadow-2xl">
                            <h3 className="text-2xl font-bold dark:text-white mb-8">Contact Information</h3>

                            <div className="space-y-6">
                                <div className="flex items-center space-x-4 group">
                                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary text-xl group-hover:scale-110 transition-transform">
                                        <FiMail />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 uppercase tracking-wider">Email Me</p>
                                        <p className="text-gray-900 dark:text-gray-200 font-medium">arifraza787898@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4 group">
                                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary text-xl group-hover:scale-110 transition-transform">
                                        <FiMapPin />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 uppercase tracking-wider">Location</p>
                                        <p className="text-gray-900 dark:text-gray-200 font-medium">Remote / Flexible</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4 group">
                                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary text-xl group-hover:scale-110 transition-transform">
                                        <FiPhone />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 uppercase tracking-wider">Let's Call</p>
                                        <p className="text-gray-900 dark:text-gray-200 font-medium">Available for discussion</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12">
                                <p className="text-sm text-gray-500 uppercase tracking-wider mb-6">Follow Me</p>
                                <div className="flex gap-4">
                                    {socialLinks.map((social, idx) => (
                                        <motion.a
                                            key={idx}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-primary hover:text-white transition-all duration-300"
                                            whileHover={{ y: -5 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            {social.icon}
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Additional Info Box */}
                        <div className="glass p-8 rounded-3xl border border-white/10 border-l-primary/50 border-l-4">
                            <p className="text-gray-600 dark:text-gray-400 italic">
                                "I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions."
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Side: Contact Form */}
                    <motion.div
                        className="lg:col-span-3"
                        variants={itemVariants}
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="glass p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl space-y-6"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        required
                                        className="w-full bg-white/5 dark:bg-black/20 border border-white/10 rounded-2xl py-3 px-5 text-gray-900 dark:text-white outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-gray-500"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        required
                                        className="w-full bg-white/5 dark:bg-black/20 border border-white/10 rounded-2xl py-3 px-5 text-gray-900 dark:text-white outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-gray-500"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Project Inquiry"
                                    className="w-full bg-white/5 dark:bg-black/20 border border-white/10 rounded-2xl py-3 px-5 text-gray-900 dark:text-white outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-gray-500"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell me about your project..."
                                    required
                                    rows="5"
                                    className="w-full bg-white/5 dark:bg-black/20 border border-white/10 rounded-2xl py-3 px-5 text-gray-900 dark:text-white outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-gray-500 resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-2xl shadow-lg shadow-primary/25 transform transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center space-x-2 overflow-hidden relative group"
                            >
                                <span className="relative z-10 flex items-center space-x-2">
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            <span>Sending...</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>Send Message</span>
                                            <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </>
                                    )}
                                </span>
                            </button>
                        </form>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default ContactUs;
