/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = () => {
  const containerStyle = css`
    border: solid 2px #392eff;
    border-radius: 20px;
    padding: 19px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;

  const title = css({
    margin: 0,
    color: "#3b84a8"
  });

  const SBtton = styled.button`
    background-color: #abedd8;
    border: none;
    padding: 8px;
    border-radius: 10px;

    &:hover {
      background-color: #46cdcf;
      color: #fff;
      cursor: pointer;
    }
  `;

  return (
    <div css={containerStyle}>
      <p css={title}>- Emotion -</p>
      <SBtton>FIGHT!!</SBtton>
    </div>
  );
};
