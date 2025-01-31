import React from 'react';
import { motion } from 'motion/react';
import { FaArrowDown } from "react-icons/fa";

function Hero() {
  const surname = "OYEBANJI";
  const name = "OLUWATOMISIN"

  return (
    <motion.section className='text-primaryHeading ssm:pt-14 lg:h-screen lg:min-h-[400px] lg:flex lg:items-center'
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      transition={{
        duration: 1,
        delay: 4
      }}
    >
      <div>
        <h1 className="ssm:text-heroHeadingFontSsm sm:text-heroHeadingFontSm md:text-heroHeadingFontMd lg:text-heroHeadingFontLg fontBold cursor-default">
          <motion.span className='block'
            initial={{
              x: -40
            }}
            animate={{
              x: 0
            }}
            transition={{
              duration: 1,
              delay: 5
            }}
          >

            {
              surname.split("").map((char, index) => (
                <span key={index} className="shadow-letter">
                  {char}
                </span>
              ))
            }
          </motion.span>
          <motion.span className='block'
            initial={{
              x: 40
            }}
            animate={{
              x: 0
            }}
            transition={{
              duration: 1,
              delay: 5
            }}
          >
            {
              name.split("").map((char, index) => (
                <span key={index} className="shadow-letter">
                  {char}
                </span>
              ))
            }
          </motion.span></h1>
        <h2 className="ssm:text-xs md:text-base lg:text-xl fontRegular">Software Engineer</h2>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex-col items-center hidden lg:flex"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        <span className="text-sm">Scroll Down</span>
        <motion.div
          className=""
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
        >
          <FaArrowDown />
        </motion.div>
      </motion.div>

    </motion.section>
  );
}

export default Hero;
