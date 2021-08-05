import styled from 'styled-components';

export const ProductsContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 5rem calc((100vw -1300) / 2);
  background: #150f0f;
  color: #fff;
`;

export const ProductsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;
export const ProductCard = styled.div`
  margin: 0 auto;
  line-height: 2;
  width: 300px;
`;

export const ProductImage = styled.img`
  height: 300px;
  width: 300px;
  max-width: 100%;
  box-shadow: 8px 8px #fdc500;
`;

export const ProductHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;
