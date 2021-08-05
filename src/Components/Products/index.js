import { data } from 'autoprefixer';
import React from 'react';

const Products = (props) => {
  const { heading } = props;
  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductsWrapper>
        {data.map((products, index) => {
          return (
            <ProductCard key={index}>
              <ProductImage src={products.img} alt={products.alt} />
              <ProductTitle>{Products.name}</ProductTitle>
              <ProductsDesc>{products.desc}</ProductsDesc>
              <ProductPrice>{products.price}</ProductPrice>
              <ProductButton>{products.button}</ProductButton>
            </ProductCard>
          );
        })}
      </ProductsWrapper>
    </ProductsContainer>
  );
};

export default Products;
