import React, { useRef, useContext } from 'react';
import { ViewPortWidthContext } from '../../context/ViewPortWidthContext';
import SectionTitle from '../shared/SectionTitle';
import { motion } from 'motion/react';
import { MdEmail } from "react-icons/md";

function Contact() {
  const contactHeading2Ref = useRef(null);
  const { viewportWidth } = useContext(ViewPortWidthContext);

  return (
    <section className='ssm:pt-20 md:pt-24'>
      <SectionTitle viewportWidth={viewportWidth} headingRef={contactHeading2Ref} heading={"GET IN TOUCH"} flexPosition='end' />

      <div className='mb-[200px]'>
        <h3 className='ssm:text-heroHeadingFontSsm sm:text-heroHeadingFontSm md:text-heroHeadingFontMd lg:text-heroHeadingFontLg fontBold leading-tight'>
          <span className='block'>LET'S CREATE</span>
          <span className='block'>SOMETHING</span>
          <span className='block'>BEAUTIFUL</span>
        </h3>
      </div>

      <div className='flex justify-around'>
        <a href="mailto:">
          <motion.button className='glow-button ssm:w-[300px] md:w-[400px] ssm:h-[75px] md:h-[100px] bg-white text-black rounded-full ssm:text-base md:text-xl text-center flex items-center justify-center'
            whileHover={{
              scale: 1.2
            }}
          >
            <span className='flex items-center'>
              <span className='ssm:mr-4 md:mr-6'>oyebanjisamson36@gmail.com</span>
              <MdEmail className='ssm:text-2xl md:text-3xl' />
            </span>
          </motion.button>
        </a>
      </div>

    </section>
  );
}

export default Contact;
