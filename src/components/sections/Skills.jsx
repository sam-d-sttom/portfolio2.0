import SkillCard from "../shared/SkillCard";
import { FaJs } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaReact, FaLaravel } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import SectionTitle from "../shared/SectionTitle";
import { ViewPortWidthContext } from '../../context/ViewPortWidthContext';
import { useRef, useContext } from "react";


const Skills = (props) => {
    const { skillViewRef } = props;

    const { viewportWidth } = useContext(ViewPortWidthContext);

    const skillsHeadingRef = useRef(null);

    return (
        <section ref={skillViewRef} className="text-primary ssm:pt-20 md:pt-24">

            {/* Section Title */}
            <SectionTitle viewportWidth={viewportWidth} headingRef={skillsHeadingRef} heading={"SKILLS"} flexPosition="end"/>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <SkillCard skillLogo={<FaJs className="text-6xl" />} skillTitle={"JavaScript"} proficiency={"Intermediate"} x={0} delay={0}/>
                <SkillCard skillLogo={<FaPhp className="text-6xl" />} skillTitle={"PHP"} proficiency={"Intermediate"} x={"-50%"} delay={0.2}/>
                <SkillCard skillLogo={<FaReact className="text-6xl" />} skillTitle={"React.JS"} proficiency={"Intermediate"} x={"-50%"} delay={0.4}/>
                <SkillCard skillLogo={<FaLaravel className="text-6xl" />} skillTitle={"Laravel"} proficiency={"Intermediate"} x={"-50%"} delay={0.6}/>
                <SkillCard skillLogo={<RiTailwindCssFill className="text-6xl" />} skillTitle={"Tailwind CSS"} proficiency={"Intermediate"} x={0} delay={0}/>
                <SkillCard skillLogo={<FaHtml5 className="text-6xl" />} skillTitle={"HTML5"} proficiency={"Expert"} x={"-50%"} delay={0.2}/>
                <SkillCard skillLogo={<FaCss3 className="text-6xl" />} skillTitle={"CSS3"} proficiency={"Expert"} x={"-50%"} delay={0.4}/>
                <SkillCard skillLogo={<FaAws className="text-6xl" />} skillTitle={"Amazon Web Services"} proficiency={"Beginner"} x={"-50%"} delay={0.6}/>
            </div>
        </section>
    );
};

export default Skills;