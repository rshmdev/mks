"use client";

import styled from "styled-components";

export const ProductContainer = styled.div`
  width: 13.625rem;
  height: 17.8125rem;
  flex-shrink: 0;

  background-color: #ffffff;

  border-radius: 0.5rem;

  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);

  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  overflow: hidden;
`;

export const ProductInfoWrapper = styled.div`
  padding: 0 0.7rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  height: 1.99419rem;
  background-color: #0f52ba;
`;

export const ProductTitle = styled.h1`
  color: #2c2c2c;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.1875rem; /* 118.75% */
`;

export const ProductPrice = styled.div`
  padding: 0 0.4rem;
  height: 1.625rem;

  color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0.3125rem;

  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 700;
  line-height: 0.9375rem;

  background-color: #373737;
`;

export const ProductDescription = styled.p`
  color: #2c2c2c;

  font-size: 0.67rem;
  font-style: normal;
  font-weight: 300;
  line-height: 0.75rem; /* 120% */
`;

export const BuyButton = styled.button`
  background-color: transparent;
  width: 100%;
  height: 100%;
  border: none;

  cursor: pointer;

  display: flex;
  gap: 0.6rem;
  align-items: center;
  justify-content: center;

  color: #fff;

  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.125rem; /* 128.571% */
`;
