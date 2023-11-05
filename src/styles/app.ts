"use client";

import styled from "styled-components";

export const Main = styled.main`
  height: 100vh;
  padding-top: 6.3125rem;
`;

export const SectionProducts = styled.section`
  max-width: 1100px;
  width: 100%;
  height: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  padding-top: 6.3125rem;

  @media (min-width: 982px) {
    padding-top: 0;
  }
`;
export const GridProducts = styled.div`
  margin-top: 17rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 2rem;
  padding: 12rem 0 3rem 0;
  @media (min-width: 732px) {
    margin-top: 0rem;
    padding: 10rem 0 3rem 0;
  }

  @media (min-width: 982px) {
    padding: 0 0 0 0;
  }
`;
