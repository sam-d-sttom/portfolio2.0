import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useEffect, useState } from "react";
import projectsDetails from "./projectsDetails";
import { FaReact, FaLaravel } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import projectDetails from "./projectsDetails";

const ProjectCardMobile = (props) => {
    const { card, progress, index, projectsViewRef } = props


    const targetScale = 1 - (projectDetails.length - index) * 0.05;

    const scale = useTransform(progress, [index * 0.16, 1], [1, targetScale]);

    return (
        <div key={index} className="h-[100vh] ssm:min-h-[500px] md:min-h-[450px] flex justify-around items-center sticky top-0">
            <motion.div className="w-full max-w-[450px] md:max-w-full md:w-[100%] relative bg-cardBackground rounded-3xl"
                style={{ top: -((projectDetails.length - (index * 3)) * 10), scale: scale }}
            >
                <div className="flex md:justify-between md:flex-row flex-col w-full ssm:h-[500px] md:h-[450px] p-4 md:px-6 lg:px-6 md:py-10 ">
                    <div className="w-full md:w-[60%] h-[40%] md:h-full mb-6">
                        <a href={card.link} target="_blank" rel='noopener noreferrer' className="underline">
                            <motion.video className="w-full aspect-[14/6] h-full hover:cursor-pointer" style={{ objectFit: "cover" }} autoplay="true" loop="true" muted="true"
                       
                            >
                                <source src={card.preview} type="video/mp4" />
                            </motion.video>
                        </a>
                    </div>

                    <div className="md:w-[30%] lg:w-[35%] ssm:h-[60%] md:h-full md:relative flex flex-col justify-between ">

                        <h3 className="fontSemiBold text-secondary ssm:text-base md:text-xl lg:text-3xl ">{card.title}</h3>

                        <p className="ssm:text-sm md:text-sm lg:text-base">
                            {card.description}
                        </p>
                        <a href={card.link} target="_blank" rel='noopener noreferrer' className="underline"> View Project</a>

                        <ul className="flex ssm:gap-x-8 md:gap-x-6 lg:gap-x-10 md:px-0 text-xl md:text-2xl lg:text-3xl ">
                            {
                                card.tools.map((Icon, index)=>{
                                    return (
                                        <li key={index}>
                                            <Icon />
                                        </li>
                                    )
                                })
                            }
                        </ul>

                    </div>

                </div>
            </motion.div>
        </div>
    )
};


export default ProjectCardMobile;