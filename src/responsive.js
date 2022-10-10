import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 380px) {
      ${props}
    }
  `;

};
export const tablet = (props) => {
  return css`
    @media only screen and (max-width: 600px) {
      ${props}
    }
  `;

};

export const tablets = (props) => {
  return css`
    @media only screen and (min-width: 600px) {
      ${props}
    }
  `;

};
export const large = (props) => {
  return css`
    @media only screen and (min-width: 780px) {
      ${props}
    }
  `;

};

export const desktop = (props) => {
  return css`
    @media only screen and (max-width: 992px) {
      ${props}
    }
  `;

};
