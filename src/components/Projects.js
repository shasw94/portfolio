import { FaGithub, FaPython, FaCode } from 'react-icons/fa';
import './Projects.css';
import { motion } from 'framer-motion';


const Projects = () => {
    const projects = [
        {
            title: "Tweet Emotion Classification",
            description: "Built a Bi-LSTM model with GLoVE embeddings achieving 94% accuracy on tweet emotion classification",
            tech: ["Python", "Keras", "TensorFlow", "LSTM", "NLP"],
            link: "https://github.com/shasw94/tweet-emotion-classifier-lstm",
            notebook: true
        },
        {
            title: "Multi-agent LLM System",
            description: "Developed containerized multi-LLM agent system for software development, enhancing MetaGPT benchmarks",
            tech: ["Python", "LLM", "Docker", "Multi-agent Systems"],
        },
        {
            title: "Flight Delay Prediction",
            description: "Integrated weather API & historical data using Databricks, Azure ML, and Power BI",
            tech: ["Azure", "Databricks", "Python", "Power BI"],
            link: "https://github.com/shasw94/HighestFlightMapReduce"
        }
    ];

    return (
        <motion.section
            className="projects-section"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.8 }}
        >
            <h2>Featured Projects</h2>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <motion.div key={index}
                        className="project-card"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <div className="card-header justify-evenly">
                            <FaCode className="project-icon" />
                            <h3>{project.title}</h3>
                        </div>

                        <p className="project-desc">{project.description}</p>

                        <div className="tech-stack">
                            {project.tech.map((tech, i) => (
                                <span key={i} className="tech-tag">
                                    {tech === "Python" && <FaPython className="tech-icon" />}
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="project-links">
                            {project.notebook && (
                                <a
                                    href={`${project.link}/blob/main/main%20final.ipynb`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="notebook-link"
                                >
                                    <span>View Notebook</span>
                                    <img
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg"
                                        alt="Jupyter"
                                        className="jupyter-icon"
                                    />
                                </a>
                            )}

                            {project.link && !project.notebook && (<a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="github-link"
                            >
                                <FaGithub />
                                View on GitHub
                            </a>)}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default Projects;