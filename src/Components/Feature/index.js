import React from 'react';
import { FeatureButton, FeatureContainer } from './FeatureElements';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Pizza of the day </h1>
      <p>Truffle alfredo sauce topped with 24 carat gold dust and garri</p>
      <FeatureButton>Order now</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
