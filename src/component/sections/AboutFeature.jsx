
import React from "react";
import SectionAbout from "./partials/SectionAbout";
import Image from '../elements/Image';
import classNames from 'classnames';

import Bed1 from '../../assets/images/Bed1.jpeg'
import bed2 from '../../assets/images/bed2.jpeg'; 
import Corridor1 from '../../assets/images/Corridor1.jpeg'


const AboutFeature = ({
    className, 
    alignTop, 
    imageFill,
    topOuterDivider,
    hasBgColor,
    invertDesktop,
    invertMobile,
    bottomOuterDivider,
    topDivider,
    invertColor,
    bottomDivider, 
    ...props}) => {
    
    const outerClasses = classNames(
        'features-split section',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
      );
    
      const innerClasses = classNames(
        'features-split-inner section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
      );
    
      const splitClasses = classNames(
        'split-wrap',
        invertMobile && 'invert-mobile',
        invertDesktop && 'invert-desktop',
        alignTop && 'align-top'
      );
    
      const sectionHeader = {
        title: 'Workflow that just works',
        paragraph: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.'
      };



    return (
        <section
          {...props}
          className={outerClasses}
        >
          <div className="container">
            <div className={innerClasses}>
              <SectionAbout data={sectionHeader} className="center-content" />
              <div className={splitClasses}>
    
                <div className="split-item">
                  <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                    <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                      Theatre Showcase
                      </div>
                    <h3 className="mt-0 mb-12">
                      Practical Surgery
                      </h3>
                    <p className="m-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </p>
                  </div>
                  <div className={
                    classNames('split-item-image center-content-mobile reveal-from-bottom',imageFill && 'split-item-image-fill' )}
                    data-reveal-container=".split-item">
                      
                    <Image
                      src={Bed1}
                      alt="Features split 01"
                      width={528}
                      height={396} />
                  </div>
                </div>
    
                <div className="split-item">
                  <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                    <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                     Workspace
                      </div>
                    <h3 className="mt-0 mb-12">
                      Conducive Workplace
                      </h3>
                    <p className="m-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </p>
                  </div>
                  <div className={
                    classNames(
                      'split-item-image center-content-mobile reveal-from-bottom',
                      imageFill && 'split-item-image-fill'
                    )}
                    data-reveal-container=".split-item">
                    <Image
                      src={bed2}
                      alt="Features split 02"
                      width={528}
                      height={396} />
                  </div>
                </div>
    
                <div className="split-item">
                  <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                    <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                    Workspace
                      </div>
                    <h3 className="mt-0 mb-12">
                      Data-driven insights
                      </h3>
                    <p className="m-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </p>
                  </div>
                  <div className={
                    classNames(
                      'split-item-image center-content-mobile reveal-from-bottom',
                      imageFill && 'split-item-image-fill'
                    )}
                    data-reveal-container=".split-item">
                    <Image src={Corridor1} alt="Features split 03" width={528} height={396} />
                  </div>
                </div>
    
              </div>
            </div>
          </div>
        </section>
      );
}

export default AboutFeature; 