import React from 'react';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import randomColor from './randomColor';
// import randomColor from './Button';
// import Button from './Button;';

const headlineStyle = css`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 10%;
  bottom: 0%;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  color: ${randomColor()} !important;
  border-bottom: 2px;
`;

// export default function background() {}

export default function Headline() {
  return (
    <div className="Headline">
      <header css={headlineStyle}>
        This is a color generator, created with React
      </header>
    </div>
  );
}
