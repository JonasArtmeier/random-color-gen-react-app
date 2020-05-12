import React, { useState } from 'react';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
// import randomColor from './randomColor';

export default function Input() {
  // const color = randomColor()
  return (
    <input
      type="text"
      name="this is"
      placeholder="name your color"
      css={css`
        align: center;
        position: absolute;
        width: 844px;
        height: 64px;
        left: 331px;
        top: 120px;
        background: grey;
      `}
    ></input>
  );
}
