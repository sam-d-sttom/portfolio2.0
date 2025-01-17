import { motion, useInView } from "motion/react";
import { useMemo } from "react";


// This function accepts the props below and returns a UI with the heading and a line.

/**
 * This function accepts the props below
 * @param props viewportWidth, headingRef, heading, flexPosition 
 * @returns a UI with the heading and a line beneath.
 */
const SectionTitle = ({ viewportWidth, headingRef, heading, flexPosition = 'start' }) => {

    const headingInView = useInView(headingRef, {
        once: true,
        amount: 1,
    });

    let delayAnimation;

    if (heading === 'ABOUT') {
         delayAnimation = useMemo(() => {
            if (viewportWidth < 768) {
                return 5
            } else {
                return 0
            }
        }, []);
    }else{
         delayAnimation = useMemo(()=>{
             if(viewportWidth < 768 && headingInView){
                return 0 
             }else{
                return 0
             }
        },[]);
    }

    const headingDesktopVariant = {
        initial: { clipPath: "inset(0 100% 0 0)" },
        final: { clipPath: headingInView ? "inset(0 0 0 0)" : "inset(0 100% 0 0)" }
    };

    const headingMobileVariant = {
        initial: { clipPath: "inset(0 100% 0 0)" },
        final: { clipPath:  headingInView ? "inset(0 0 0 0)" : "inset(0 100% 0 0)"},
    }

    const lineDesktopVariant = {
        initial: { width: 0 },
        final: { width: headingInView ? '100%' : 0 }
    };

    const lineMobileVariant = {
        initial: { width: 0 },
        final: { width: headingInView ? '100%' : 0 },
    }

    return (
        <div className={`flex w-full mb-10`}
            style={{
                justifyContent: flexPosition
            }}
        >
            <div ref={headingRef} className={`ssm:w-[150px] lg:w-[300px] flex flex-col items-${flexPosition}`}
            style={{
                alignItems: flexPosition
            }}
            >
                <motion.h2 className=' fontBold text-secondary lg:text-xl'
                    variants={viewportWidth < 768 ? headingMobileVariant : headingDesktopVariant}
                    initial='initial'
                    animate='final'
                    transition={{
                        delay: delayAnimation,
                        duration: 1
                    }}
                >
                    {heading}
                </motion.h2>
                <motion.div className='h-1 w-full bg-line rounded'
                    variants={viewportWidth < 768 ? lineMobileVariant : lineDesktopVariant}
                    initial='initial'
                    animate='final'
                    transition={{
                        delay: delayAnimation,
                        duration: 1
                    }}
                ></motion.div>
            </div>
        </div>

    );
}

export default SectionTitle;