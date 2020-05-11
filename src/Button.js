import React from 'react';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import randomColor from './randomColor';
// import randomColor from './randomColor';

const buttonStyle = css`
  position: absolute;
`;

export default function Button() {
  return (
    <button css={buttonStyle} onClick={randomColor}>
      click here
    </button>
  );
}
