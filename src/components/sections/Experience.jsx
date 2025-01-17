import SectionTitle from '../shared/SectionTitle';
import { useRef, useContext } from 'react';
import SectionHeader3 from '../shared/SectionHeader3';
import { ViewPortWidthContext } from '../../context/ViewPortWidthContext';
import SectionParagraph from '../shared/SectionParagraph';


const Experience = () => {

    const experienceHeadingRef = useRef(null);
    const experienceHeading3Ref = useRef(null);
    const experienceParagraphRef = useRef(null);

    const { viewportWidth } = useContext(ViewPortWidthContext);


    return (
        <section className="ssm:pt-20 md:pt-24 ">
            <SectionTitle viewportWidth={viewportWidth} headingRef={experienceHeadingRef} heading={"EXPERIENCE"} flexPosition='start' />

            <div className='flex justify-center items-center'>
                <div className="ssm:w-full md:w-[50%] fontRegular">
                    <SectionHeader3 heading3Ref={experienceHeading3Ref} section={"EXPERIENCE"} viewportWidth={viewportWidth} margin='ssm:mb-4 md:mb-6 lg:mb-8' text={"Junior Developer At SOPDAP Technologies (IT Solutions)"} />
                    <SectionParagraph
                        section={"EXPERIENCE"}
                        viewportWidth={viewportWidth}
                        paragraphRef={experienceParagraphRef}
                        columns='1'
                        paragraph={
                            <>
                                <p className="ssm:text-sm md:text-base lg:text-2xl ssm:mb-2 md:mb-4 lg:mb-6">Jan 2023 - Present</p>
                                <p className="ssm:text-sm md:text-base">
                                    Delivered comprehensive IT solutions through the development of robust full-stack applications, leveraging HTML5, CSS3, JavaScript, React, Laravel, jQuery, and WordPress (PHP). Collaborated closely with Business Analysts and Solutions Architects to implement software solutions that consistently met all project requirements and business objectives.
                                </p>
                            </>
                        }
                    />
                </div>
            </div>

        </section>
    );
};

export default Experience;