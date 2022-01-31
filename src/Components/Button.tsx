import React from "react";
import "../styles/Button.css";

interface Props {
  children?: React.ReactNode;
  width: string;
  height: string;
  padding: string;
  fontSize: string;
  radius: string;
  lineHeight: string;
}

const Button: React.FC<Props> = ({
  children,
  width,
  height,
  padding,
  fontSize,
  radius,
  lineHeight,
}) => {
  return (
    <button
      className="button"
      style={{
        padding,
        width,
        height,
        fontSize,
        borderRadius: radius,
        lineHeight,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
