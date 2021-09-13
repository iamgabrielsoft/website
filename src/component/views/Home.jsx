
import React from 'react';
// import sections
import Hero from '../sections/Hero';
import FeaturesTiles from '../sections/FeaturesTiles';
import FeaturesSplit from '../sections/FeaturesSplit';
import Testimonials from '../sections/Testimonials';
import Cta from '../sections/Cta';

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <Testimonials topDivider />
      <Cta split />
    </>
  );
}

export default Home;