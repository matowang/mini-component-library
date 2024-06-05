import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZE_STYLES = {
  small: {
    "--padding-left": "20px",
    "--font-size": 14 / 16 + "rem",
    "--border-width": "1px",
    "--height": 24 / 16 + "rem",
  },
  large: {
    "--padding-left": "28px",
    "--font-size": 18 / 16 + "rem",
    "--border-width": "2px",
    "--height": 36 / 16 + "rem",
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  return (
    <LabelWrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <InputWrapper
        placeholder={placeholder}
        style={SIZE_STYLES[size]}
        width={width}
      ></InputWrapper>
      <IconWrapper
        style={{
          "--height": {
            small: "14px",
            large: "24px",
          }[size],
        }}
      >
        <Icon
          id={icon}
          size={
            {
              small: 16,
              large: 24,
            }[size]
          }
          strokeWidth={
            {
              small: 1,
              large: 2,
            }[size]
          }
        />
      </IconWrapper>
    </LabelWrapper>
  );
};

const LabelWrapper = styled.label`
  position: relative;
  height: fit-content;
  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }
`;

const InputWrapper = styled.input`
  border: none;
  height: 100%;
  font-size: inherit;
  border-bottom: var(--border-width) solid ${COLORS.black}};
  height: var(--height);
  display: block;
  padding-left: var(--padding-left);
  font-size: var(--font-size);  
  width: ${(props) => props.width}px;
  outline-offset: 2px;
  font-weight: 700;
  color: inherit;
  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
  
`;

const IconWrapper = styled.div`
  width: var(--height);
  height: var(--height);
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  left: 0;
  color: inherit;
`;

export default IconInput;
