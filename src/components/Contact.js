import { HiOutlineMail } from 'react-icons/hi';
import { FaLinkedin, FaGithub, FaGitlab } from 'react-icons/fa';
import { motion } from 'framer-motion';
// import './ContactButton.css';

const ContactButton = () => {
    const socialLinks = [
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/shaswat-pandey',
            icon: <FaLinkedin />,
        },
        {
            name: 'GitHub',
            url: 'https://github.com/shasw94',
            icon: <FaGithub />,
        },
        {
            name: 'GitLab',
            url: 'https://gitlab.com/shas94',
            icon: <FaGitlab />,
        }
    ];

    const handleEmailClick = () => {
        window.location.href = 'mailto:pandeyshaswat4@gmail.com?subject=Contact from Portfolio';
    };

    return (
        <motion.section
            className="contact-section"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.8 }}
        >
            <motion.button
                className="contact-button"
                onClick={handleEmailClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <HiOutlineMail className="email-icon" />
                Contact Me
            </motion.button>

            <motion.div
                className="social-links"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                {socialLinks.map((link, index) => (
                    <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        aria-label={link.name}
                    >
                        {link.icon}
                    </a>
                ))}
            </motion.div>
        </motion.section>
    );
};

export default ContactButton;