/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZE_STYLES = {
  large: {
    "--progress-padding": "4px",
    "--progress-height": "24px",
    "--progress-radius": "8px",
  },
  medium: {
    "--progress-padding": "0px",
    "--progress-height": "12px",
    "--progress-radius": "4px",
  },
  small: {
    "--progress-padding": "0px",
    "--progress-height": "8px",
    "--progress-radius": "4px",
  },
};

const ProgressBar = ({ value, size }) => {
  return (
    <ProgressWrapper
      aria-valuenow={value}
      role="progressbar"
      style={SIZE_STYLES[size]}
    >
      <ProgressValueWrapper>
        <ProgressValue
          style={{
            width: `${value}%`,
          }}
        ></ProgressValue>
      </ProgressValueWrapper>
    </ProgressWrapper>
  );
};

const ProgressWrapper = styled.div`
  border-radius: var(--progress-radius);
  height: var(--progress-height);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--progress-padding);
`;

const ProgressValueWrapper = styled.div`
  overflow: hidden;
  border-radius: 4px;
  width: 100%;
  height: 100%;
`;

const ProgressValue = styled.div`
  background-color: ${COLORS.primary};
  height: 100%;
`;

export default ProgressBar;
