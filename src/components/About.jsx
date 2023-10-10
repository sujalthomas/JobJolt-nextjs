import React, { useEffect, useState } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, description }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <div className='xs:w-[250px] w-full'>
          <div className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
            <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
              <h3 className='text-cyan-200 text-[20px] font-bold text-center'>
                {title}
              </h3>
              <h4 className='text-cyan-100 text-[15px] font-semibold text-center pt-5'>
                {description}
              </h4>
            </div>
          </div>
        </div>
      ) : (
        <Tilt className='xs:w-[250px] w-full'>
          <motion.div
            variants={fadeIn("right", "spring", index * 0.05, 0.15)}
            className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
          >
            <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
              <h3 className='text-cyan-200 text-[20px] font-bold text-center'>
                {title}
              </h3>
              <h4 className='text-cyan-100 text-[15px] font-semibold text-center pt-5'>
                {description}
              </h4>
            </div>
          </motion.div>
        </Tilt>
      )}
    </>
  );
};

const About = () => {
  return (
    <>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview</h2>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Navigating the complex labyrinth of job applications on LinkedIn just became a breeze! Introducing Job Jolt, an avant-garde Chrome extension designed to streamline and amplify your LinkedIn application experience.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
