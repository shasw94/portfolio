import { motion } from 'framer-motion';
import { education } from '../data';
import { FaGraduationCap, FaCalendar, FaMapMarker, FaAward, FaProjectDiagram } from 'react-icons/fa';

const Education = () => {
  return (
    <section id="education" className="education-section">
      <h2>Academic Journey</h2>
      
      <div className="timeline">
        {education.map((edu, index) => (
          <motion.div 
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="timeline-marker">
              <FaGraduationCap className="marker-icon" />
            </div>
            
            <div className="timeline-content">
              <h3 className="degree">{edu.degree}</h3>
              <div className="university">{edu.university}</div>
              
              <div className="details-grid">
                <div className="detail-item">
                  <FaCalendar className="detail-icon" />
                  <span>{edu.dates}</span>
                </div>
                <div className="detail-item">
                  <FaMapMarker className="detail-icon" />
                  <span>{edu.location}</span>
                </div>
                {edu.scholarship && (
                  <div className="detail-item highlight">
                    <FaAward className="detail-icon" />
                    <span>{edu.scholarship}</span>
                  </div>
                )}
              </div>

              <div className="projects">
                <h4>Key Projects:</h4>
                <ul>
                  {edu.projects.map((project, pIndex) => (
                    <motion.li 
                      key={pIndex}
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <FaProjectDiagram className="project-icon" />
                      <div>
                        <p className="project-title">{project.title}</p>
                        <p className="project-desc">{project.description}</p>
                        {project.link && (
                          <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                            View Details
                          </a>
                        )}
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;