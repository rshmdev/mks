"use client";

import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100vw;
  height: 6.3125rem;

  position: fixed;
  top: 0;
  left: 0;

  z-index: 200;

  background: #0f52ba;

  display: flex;
  align-items: center;
`;

export const LogoH1 = styled.h1`
  display: flex;
  gap: 0.3rem;
  color: #fff;
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.1875rem; /* 47.5% */

  span {
    color: #fff;
    padding-top: 0.2rem;

    font-size: 1.25rem;
    font-style: normal;
    font-weight: 300;
    line-height: 1.1875rem; /* 95% */
  }
`;

export const HeaderNav = styled.nav`
  width: 100%;
  padding: 1rem 4rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.6rem;
  justify-content: space-between;

  @media (min-width: 420px) {
    flex-direction: row;
    gap: 0;
  }
`;

export const CartButton = styled.button`
  width: 5.625rem;
  height: 2.8125rem;
  background-color: #ffffff;
  border-radius: 0.5rem;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;

  cursor: pointer;

  span {
    color: #000;
    padding-top: 0.2rem;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
