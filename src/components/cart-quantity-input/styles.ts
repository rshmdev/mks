"use client";

import styled from "styled-components";

export const ContainerQuantity = styled.div`
  max-width: 3.125rem;
  width: 100%;
  height: 1.1875rem;
  position: relative;

  border-radius: 0.25rem;
  border: 0.3px solid #bfbfbf;

  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;

  span {
    position: absolute;
    top: -10px;
    left: 2px;

    color: #000;

    font-size: 0.4125rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const InputQuantity = styled.input`
  width: 100%;
  height: 100%;
  background-color: transparent;

  border: none;

  padding-top: 0.1rem;

  font-size: 0.8rem;

  text-align: center;

  &:focus {
    outline: none;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

export const IncrementButton = styled.button`
  position: absolute;
  top: 2px;
  right: 5px;

  background-color: transparent;

  border: none;
`;

export const DecrementButton = styled.button`
  position: absolute;
  top: 1.5px;
  left: 5px;

  background-color: transparent;
  border: none;
`;
