import { useRef, useState } from 'react';
import { experience } from '../data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';

const ExperienceCarousel = () => {
    const [swiperInstance, setSwiperInstance] = useState(null);
    const progressCircle = useRef(null);
    const progressContent = useRef(null);

    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    const handleMouseEnter = () => {
        if (swiperInstance) {
            swiperInstance.autoplay.stop();
        }
    };

    const handleMouseLeave = () => {
        if (swiperInstance) {
            swiperInstance.autoplay.start();
        }
    };

    return (
        <motion.section
            id="experience"
            className="experience-carousel"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.8 }}
        >
            <h2>Professional Journey</h2>

            <Swiper
                onSwiper={setSwiperInstance}
                spaceBetween={30}
                centeredSlides={false}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: true,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {experience.map((exp, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="experience-card"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            {/* Rest of your card content */}
                            <div className="card-header">
                                <div className="company-meta">
                                    <h3>{exp.company}</h3>
                                    <p className="position">{exp.position}</p>
                                    <p className="duration">{exp.dates}</p>
                                </div>
                                <div className="location-badge">
                                    <span>{exp.location}</span>
                                </div>
                            </div>

                            <div className="card-body">
                                <ul className="achievements">
                                    {exp.points.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="tech-stack">
                                {exp.tech.map((tech, i) => (
                                    <span key={i} className="tech-tag">{tech}</span>
                                ))}
                            </div>

                            <div className="company-logo">
                                <div className="logo-placeholder">
                                    {exp.company.charAt(0)}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20" />
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </motion.section>
    );
};

export default ExperienceCarousel;