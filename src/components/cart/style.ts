"use client";

import styled from "styled-components";

interface CartProps {
  cartOpen: boolean;
}

export const CartContainer = styled.aside<CartProps>`
  max-width: 30.375rem;
  width: 100%;
  height: 100vh;

  position: absolute;
  top: 0;
  right: 0;

  z-index: 250;

  transition: transform ease 0.3s;

  transform: ${(props) =>
    props.cartOpen ? "translate(0%)" : "translate(100%)"};

  background: #0f52ba;
  box-shadow: -5px 0px 6px 0px rgba(0, 0, 0, 0.13);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const HeaderCart = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  align-items: center;

  padding: 1rem 2.5rem;

  @media (min-width: 360px) {
    padding: 1rem 3.4rem;
  }
`;

export const CartTitle = styled.h1`
  color: #fff;
  display: flex;
  max-width: 11.25rem;
  flex-wrap: wrap;
  font-size: 1.6875rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const CloseButton = styled.button`
  width: 2.375rem;
  height: 2.375rem;
  border: none;
  background-color: #000000;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #fff;

  font-size: 1.35rem;
  font-style: normal;
  font-weight: 400;
  line-height: 0.9375rem; /* 53.571% */

  cursor: pointer;
`;

export const ListCards = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  gap: 1.5rem;
  max-height: 100%;
  overflow-y: auto;

  padding-top: 1rem;
`;

export const CartTotal = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 3.3rem;

  .total {
    color: #fff;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: 0.9375rem; /* 53.571% */
  }

  .total-value {
    color: #fff;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: 0.9375rem; /* 53.571% */
  }
`;

export const CartButtonContainer = styled.div`
  width: 100%;
  height: 6.0625rem;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  h3 {
    color: #fff;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: 0.9375rem; /* 53.571% */
  }
`;
