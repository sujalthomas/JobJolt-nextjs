import { motion } from "framer-motion";
import { styles } from "../styles";


const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      
      {/* Hero content */}
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        

        
        {/* Hero title and subtitle */}
        <div>
          <h1 className={`${styles.heroHeadText} mt-2 text-white`}>
            Meet <span className="text-[#5F82E8]">Job Jolt</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Harness AI magic to craft personalized cover letters with a single click!
          </p>
        </div>
      </div>
      
      <div>
      <img 
    src="/src/assets/landing.png" 
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
