"use client";

import styled from "styled-components";

export const CardContainer = styled.div`
  max-width: 24.0625rem;
  width: 95%;
  min-height: 6.3125rem;

  border-radius: 0.5rem;
  background: #fff;

  position: relative;

  display: flex;
  align-items: center;

  box-shadow: -2px 2px 10px 0px rgba(0, 0, 0, 0.05);

  @media (min-width: 406px) {
    width: 100%;
  }
`;

export const FirstInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const CardWrapper = styled.div`
  width: 100%;
  padding: 1rem;
`;

export const CloseButton = styled.button`
  width: 1.125rem;
  height: 1.125rem;
  border: none;
  background-color: #000000;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #fff;

  cursor: pointer;

  font-size: 0.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 0.9375rem; /* 53.571% */

  position: absolute;
  top: -6px;
  right: -6px;
`;

export const CardInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 1rem;
`;

export const ProductName = styled.h2`
  color: #2c2c2c;
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.0625rem; /* 130.769% */

  max-width: 6.0625rem;
`;

export const ProductValue = styled.span`
  color: #000;

  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.0625rem; /* 121.429% */
`;
