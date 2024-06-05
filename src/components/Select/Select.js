import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      {/* <label>{label}</label> */}
      {displayedValue}
      <SelectWrapper value={value} onChange={onChange}>
        {children}
      </SelectWrapper>
      <IconWrapper>
        <Icon id="chevron-down" />
      </IconWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  position: relative;
  width: fit-content;
  border-radius: 8px;
  padding: 12px 50px 12px 16px;
  color: ${COLORS.gray700};
  &:focus-within {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
  &:hover {
    color: ${COLORS.black};
  }
`;

const SelectWrapper = styled.select`
  appearance: none;
  opacity: 0;
  background-color: transparent;
  border: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 12px;
  margin-top: auto;
  margin-bottom: auto;
  width: 24px;
  height: 24px;
  pointer-events: none;
`;

export default Select;
