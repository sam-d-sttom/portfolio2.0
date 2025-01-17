import React, { useRef, useContext } from 'react';
import { ViewPortWidthContext } from '../../context/ViewPortWidthContext';
import SectionTitle from '../shared/SectionTitle';
import SectionHeader3 from '../shared/SectionHeader3';
import SectionParagraph from '../shared/SectionParagraph';

function About() {
  const { viewportWidth } = useContext(ViewPortWidthContext);

  const aboutHeading2Ref = useRef(null);
  const aboutHeading3Ref = useRef(null);
  const aboutParagraphRef = useRef(null);

  return (
    <section className='ssm:pt-20 md:pt-24'>
      {/* Section Title */}
      <SectionTitle viewportWidth={viewportWidth} headingRef={aboutHeading2Ref} heading={"ABOUT"} flexPosition='end' />

      {/* Section h3 */}
      <SectionHeader3 heading3Ref={aboutHeading3Ref} section={"ABOUT"} viewportWidth={viewportWidth} text={<>I build pixel-perfect, engaging, and <span className='block'>accessible digital experiences.</span></>} />

      {/* Section paragraph/content */}
      <SectionParagraph
        section={"ABOUT"}
        paragraphRef={aboutParagraphRef}
        viewportWidth={viewportWidth}
        paragraph={
          <>
            <p className="ssm:mb-8">
              As a passionate software developer with two years of experience, I specialize in building scalable, efficient solutions for tech related products and industries. With a strong foundation in <strong>Javascript(React, JQuery) and PHP(Laravel)</strong>, I excel at collaborating with cross-functional teams to deliver high-quality products.
            </p>
            <p className="ssm:mb-8">
              I'm always eager to explore new technologies and improve my craft. I'm excited to bring my expertise to innovative projects and collaborate with like-minded professionals.
            </p>
            <p className="ssm:mb-8">
              A born problem solver with good problem solving skills, i take my time to develope long lasting solutions by observing for both current and potential problems, research on the best tools and technologies to solve the problem, and then with my good managment skills, deliver a robost product in the fastest time possible.
            </p>
          </>
        }
      />
    </section>
  );
}

export default About;
