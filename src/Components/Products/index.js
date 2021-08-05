import { data } from 'autoprefixer';
import React from 'react';
import {
  ProductButton,
  ProductCard,
  ProductHeading,
  ProductImage,
  ProductInfo,
  ProductPrice,
  ProductsContainer,
  ProductsDesc,
  ProductsWrapper,
  ProductTitle,
} from './ProductsElements';

const Products = (props) => {
  const { heading, data } = props;
  return (
    <ProductsContainer>
      <ProductHeading>{heading}</ProductHeading>
      <ProductsWrapper>
        {data.map((products, index) => {
          return (
            <ProductInfo key={index}>
              <ProductImage src={products.img} alt={products.alt} />
              <ProductTitle>{products.name}</ProductTitle>
              <ProductsDesc>{products.desc}</ProductsDesc>
              <ProductPrice>{products.price}</ProductPrice>
              <ProductButton>{products.button}</ProductButton>
            </ProductInfo>
          );
        })}
      </ProductsWrapper>
    </ProductsContainer>
  );
};

export default Products;
