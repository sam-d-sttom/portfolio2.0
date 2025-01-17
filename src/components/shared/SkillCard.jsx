import { motion } from "motion/react";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";

const SkillCard = ({skillLogo, skillTitle, proficiency, delay, x}) => {
    
    const skillCardRef = useRef(null);

    const skillCardInView = useInView(skillCardRef, {
        once: true,
        amount: 1
    })

    return (
        <motion.div ref={skillCardRef} className={`flex flex-col items-center bg-cardBackground px-4 py-8 rounded-2xl justify-between h-[250px]  `}
            initial={{
                x,
                opacity: 0
            }}
            animate={{
                x: skillCardInView ? 0 : x,
                opacity: skillCardInView ? 1 : 0
            }}
            transition={{
                duration: 1,
                delay
            }}
        >
            <span className="">{skillLogo}</span>
            <p className="ssm:text-base md:text-xl lg:text-3xl text-center leading-tight">{skillTitle}</p>
            <p className="ssm:text-sm md:text-base lg:text-xl text-center">Proficiency: {proficiency}</p>
        </motion.div>
    );
};


export default SkillCard;