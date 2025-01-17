import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useEffect, useState, useContext } from "react";
import projectsDetails from "../shared/projectsDetails";
import { FaReact, FaLaravel } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import ProjectCardMobile from "../shared/ProjectCardMobile";
import { ViewPortWidthContext } from '../../context/ViewPortWidthContext';
import SectionTitle from "../shared/SectionTitle";

const Projects = () => {

    const { viewportWidth } = useContext(ViewPortWidthContext);

    const projectsRef = useRef(null);
    const projectsHeading2Ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: projectsRef,
        offset: ['start start', 'end end']
    });

    return (
        <section ref={projectsRef} className="relative h-[220vh] min-h-[1800px] text-primary pt-10 my-[100px]">

            <SectionTitle viewportWidth={viewportWidth} headingRef={projectsHeading2Ref} heading={"PROJECTS"} flexPosition='start'/>

            {
                projectsDetails.map((card, index) => {

                    return (

                        <ProjectCardMobile key={index} card={card} progress={scrollYProgress} index={index} />
                    )
                }
                )
            }
        </section>
    );
};

export default Projects;