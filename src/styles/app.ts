"use client";

import styled from "styled-components";

export const Main = styled.main`
  min-height: 100vh;
  overflow-y: auto;
  padding-top: 6.7125rem;
  padding-bottom: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SectionProducts = styled.section`
  max-width: 1100px;
  width: 100%;
  height: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 982px) {
    padding-top: 0;
  }
`;
export const GridProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 2rem;
`;
