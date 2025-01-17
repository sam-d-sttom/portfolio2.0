import { motion, useInView } from "motion/react";
import { useMemo } from "react";

const SectionHeader3 = ({ section, viewportWidth, heading3Ref, text, margin = "ssm:mb-10 md:mb-20 lg:mb-24" }) => {

    const aboutHeading3InView = useInView(heading3Ref, {
        once: true,
        amount: 1,
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
            if (viewportWidth < 768 && aboutHeading3InView) {
                return 0
            } else {
                return 0
            }
        }, []);
    }

    const heading3DesktopVariant = {
        initial: { clipPath: "inset(0 100% 0 0)" },
        final: { clipPath: aboutHeading3InView ? "inset(0 0 0 0)" : "inset(0 100% 0 0)" }
    };

    const heading3MobileVariant = {
        initial: { clipPath: "inset(0 100% 0 0)" },
        final: { clipPath: aboutHeading3InView ? "inset(0 0 0 0)" : "inset(0 100% 0 0)" },
    }

    // ssm:mb-10 md:mb-20 lg:mb-24
    return (
        <div ref={heading3Ref}>
            <motion.h3 className={`fontSemiBold text-secondary ssm:text-base md:text-xl lg:text-3xl ${margin}`}
                variants={viewportWidth < 768 ? heading3MobileVariant : heading3DesktopVariant}
                initial='initial'
                animate='final'
                transition={{
                    delay: delayAnimation,
                    duration: 1
                }}
            >
                {text}
            </motion.h3>
        </div>
    )
}


export default SectionHeader3;