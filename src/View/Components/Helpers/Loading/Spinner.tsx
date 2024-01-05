import React from "react";
import { StyledSpinner } from "./style";

export interface SpinnerProps {
  size: number;
}

const Spinner: React.FC<SpinnerProps> = ({ size }) => {
  return <StyledSpinner size={size} />;
};

export default Spinner;
