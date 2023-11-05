"use client";

import { styled } from "styled-components";

export const Footer = styled.footer`
  width: 100vw;
  height: 2.125rem;
  background: #eee;

  position: absolute;
  bottom: 0;
  left: 0;

  z-index: 100;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterText = styled.span`
  color: #000;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
