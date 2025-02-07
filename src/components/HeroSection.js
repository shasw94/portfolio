import { motion } from 'framer-motion';
import { FaRocket, FaChartLine, FaBrain, FaUniversity } from 'react-icons/fa';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-header"
                >
                    <h1>Shaswat Pandey</h1>
                    <h2>Full-Stack Developer & Data Scientist</h2>
                    <p className="tagline">Bridging software engineering with advanced computing</p>
                </motion.div>

                <div className="achievement-grid">
                    {/* <motion.div
                        className="achievement-card"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <FaRocket className="achievement-icon" />
                        <h3>Key Skills</h3>
                        <ul className="timeline">
                            <li>SEO</li>
                            <li>Machine Learning</li>
                            <li>LLM</li>
                            <li>Full stack development</li>
                        </ul>
                    </motion.div> */}

                    <motion.div
                        className="tech-card"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <FaChartLine className="achievement-icon" />
                        <h3>Technical Impact</h3>
                        <div className="impact-metrics">
                            <div className="metric">
                                <span className="metric-value">10x</span>
                                <span className="metric-label">Process Efficiency</span>
                            </div>
                            <div className="metric">
                                <span className="metric-value">70%</span>
                                <span className="metric-label">Performance Gains</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="academic-card"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <FaUniversity className="achievement-icon" />
                        <h3>Academic Leadership</h3>
                        <div className="research-highlight">
                            <FaBrain className="research-icon" />
                            <p>Pioneering multi-agent LLM research</p>
                        </div>
                        <div className="publications">
                            <span className="pub-badge">NLP</span>
                            <span className="pub-badge">AR Integration</span>
                            <span className="pub-badge">MLOps</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;