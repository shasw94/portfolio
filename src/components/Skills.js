// Skills.js
import { motion } from 'framer-motion';
import { techSkills } from '../data';
import { SiReact, SiTensorflow, SiDocker, SiFlask, SiFirebase, SiAmazon, SiPython, SiPhp, SiGo, SiJavascript, SiNodedotjs, SiNestjs, SiLaravel, SiFlutter, SiKeras, SiPytorch, SiPytest, SiMysql, SiApachespark, SiDatabricks } from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';

const Skills = () => {
    // Flatten all skills into a single array
    const allSkills = techSkills.flatMap(category => category.skills);

    // Color progression for skills
    const colors = ['#2ecc71', '#3498db', '#9b59b6', '#e67e22', '#e74c3c'];

    // Icon mapping
    const skillIcons = {
        Python: <SiPython />,
        React: <SiReact />,
        TensorFlow: <SiTensorflow />,
        Docker: <SiDocker />,
        Flask: <SiFlask />,
        Firebase: <SiFirebase />,
        'Azure ML': <VscAzure />,
        PHP: <SiPhp />,
        Go: <SiGo />,
        JavaScript: <SiJavascript />,
        "Node.js": <SiNodedotjs />,
        "Nest.js": <SiNestjs />,
        Laravel: <SiLaravel />,
        Flutter: <SiFlutter />,
        Keras: <SiKeras />,
        PyTorch: <SiPytorch />,
        Pytest: <SiPytest />,
        MySQL: <SiMysql />,
        "Apache Spark": <SiApachespark />,
        Databricks: <SiDatabricks />,
        
    };

    return (
        <motion.section
            id="skills"
            className="skills-section"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.8 }}
        >
            <h2>Technical Arsenal</h2>
            <div className="skills-grid">
                {allSkills.map((skill, index) => (
                    <motion.div
                        key={skill}
                        className="skill-item"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ scale: 1.1 }}
                        style={{
                            backgroundColor: `${colors[index % colors.length]}20`,
                            border: `2px solid ${colors[index % colors.length]}`
                        }}
                    >
                        <span className="skill-text">
                            {skillIcons[skill] && (
                                <span className="skill-icon">
                                    {skillIcons[skill]}
                                </span>
                            )}
                            {skill}
                        </span>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default Skills;