import { motion } from "framer-motion";
import { styles } from "../styles";

import image from "../assets/landing.png";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      
      {/* Hero content */}
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        

        
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
      
      <div>
      <img 
    src={image} 
    alt="Landing Illustration" 
    className="absolute justify-center max-h-[90vh] w-auto mx-auto mt-[26vh] left-0 right-0 ml-auto mr-auto" 
/>
      </div>

      {/* Scroll indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
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
