import { motion, useInView } from "motion/react";
import { useMemo } from "react";

const SectionParagraph = ({ viewportWidth, paragraphRef, paragraph, columns = '2', section }) => {

    const paragraphInView = useInView(paragraphRef, {
        once: true,
        amount: .5,
    });

    let delayAnimation;

    if (section === 'ABOUT') {
        delayAnimation = useMemo(() => {
            if (viewportWidth < 768) {
                return 5
            } else {
                return 0
            }
        }, []);
    } else {
        delayAnimation = useMemo(() => {
            if (viewportWidth < 768 && paragraphInView) {
                return 0
            } else {
                return 0
            }

        }, []);
    }
    return (
        <div ref={paragraphRef}>
            <motion.div
                className={`ssm:text-sm md:text-base fontRegular md:gap-6 lg:gap-20 md:px-10 lg:px-20`}
                style={{
                    columnCount: columns
                }}
                initial={{
                    x: -100,
                    opacity: 0
                }}
                animate={{
                    x: paragraphInView ? 0 : -100,
                    opacity: paragraphInView ? 1 : 0
                }}
                transition={{
                    duration: 1,
                    delay: delayAnimation
                }}
            >
                {paragraph}
            </motion.div>
        </div>
    );
};


export default SectionParagraph;