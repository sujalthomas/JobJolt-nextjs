import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";


import { styles } from "../styles";

import { SectionWrapper } from "../hoc";
import { appScreenshots } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const AppScreenshotCard = ({ index, name, description, image }) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.05, 0.15)}>
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
    >
      <div className='relative w-full h-[230px]'>
        <img
          src={image}
          alt={`${name}`}
          className='w-full h-full object-cover rounded-2xl'
        />
      </div>

      <div className='mt-5'>
        <h3 className='text-cyan-200 font-bold text-[24px]'>{name}</h3>
        <p className='mt-2 text-cyan-100 text-[14px]'>{description}</p>
      </div>
    </Tilt>
  </motion.div>
);


const AppGallery = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My App</p>
        <h2 className={`${styles.sectionHeadText}`}>Gallery</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Explore the collection of app screenshots that showcase the features and UI of Job Jolt.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {appScreenshots.map((screenshot, index) => (
          <AppScreenshotCard key={`screenshot-${index}`} index={index} {...screenshot} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(AppGallery, "gallery");
