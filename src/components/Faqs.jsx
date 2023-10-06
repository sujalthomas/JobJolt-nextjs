import React, { useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-tilt";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { faqs } from "../constants";

const FAQCard = ({ index, question, answer }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.05, 0.15)}
      className='w-full md:w-5/12 p-2'
    >
      <Tilt 
        options={{ max: 45, scale: 1, speed: 450 }}
        className='bg-black-200 p-10 rounded-3xl w-full'
      >
        <div 
          className='text-cyan-200 font-bold text-[24px] cursor-pointer' 
          onClick={() => setIsVisible(!isVisible)} // Toggle visibility on click
        >
          {question}
        </div>
        {isVisible && (
          <div className='mt-1'>
            <p className='text-cyan-100 tracking-wider text-[18px] pt-3'>{answer}</p>
          </div>
        )}
      </Tilt>
    </motion.div>
  );
};



const FAQs = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Frequently Asked</p>
          <h2 className={styles.sectionHeadText}>Questions</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-4`}>
        {faqs.map((faq, index) => (
          <FAQCard key={faq.question} index={index} {...faq} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(FAQs, "faqs");
