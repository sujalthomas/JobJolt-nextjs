import { motion } from "framer-motion";
import { styles } from "../styles";

import image from "../assets/landing.png";

const Hero = () => {
  return (
    <section className="flex flex-col justify-between w-full h-screen mx-auto">
      
      {/* Hero content */}
      <div className={`flex flex-col justify-center items-center max-w-7xl mx-auto ${styles.paddingX} mt-24`}>
        {/* Hero title and subtitle */}
        <div>
          <h1 className={`${styles.heroHeadText} mt-2 text-white`}>
            Meet <span className="bg-gradient-to-r from-blue-800 to-indigo-800 bg-clip-text text-transparent">Job Jolt</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Harness AI magic to craft personalized 
            <span className="bg-gradient-to-r from-purple-500 to-indigo-800 bg-clip-text text-transparent"> cover letters </span>
             with a 
             <span className="bg-gradient-to-r from-purple-500 to-indigo-800 bg-clip-text text-transparent"> single click! </span>
          </p>
        </div>
      </div>

      {/* Image */}
      <div className="flex justify-center items-center mt-10">
        <img 
          src={image} 
          alt="Landing Illustration" 
          className="max-h-[90vh] w-auto" 
        />
      </div>

      {/* Scroll indicator */}
      <div className="mt-auto w-full flex justify-center items-center mb-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop"
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

