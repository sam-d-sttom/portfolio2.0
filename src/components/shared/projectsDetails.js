import collagePreview from '../../assets/collage-studio-preview.mp4';
import spacePreview from '../../assets/space-preview.mp4';
import { FaReact, FaLaravel } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";


const projectDetails = [
    {
        title: 'COLLAGE STUDIO CLONE',
        description: `A clone of the collage studio website. This clone was built using React js on the frontend. Technologies such as Redux (for state managment), Framer Motion (for clean animations), and Tailwind css were used to bring the frontend to live.The backend logic/api is being handled by the Laravel framework.`,
        link: 'https://collage-studio-clone.vercel.app/',
        preview: collagePreview,
        tools: [FaReact, FaLaravel, TbBrandFramerMotion, RiTailwindCssFill, SiRedux]
    },
    {
        title: 'Space Tourism',
        description: 'One of the few projects that marks the humble beginning of the journey to becoming a software engineer. Built using vanilla js, HTML5 and CSS3, the site shows and talks about basic planetary bodies in our solar system',
        link: 'https://sam-d-sttom.github.io/space-tourisim/index.html',
        preview: spacePreview,
        tools: [FaHtml5, FaCss3, FaJs]
    },
];

export default projectDetails