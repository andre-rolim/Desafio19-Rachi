import React from "react";
import "../styles/Description.css";

interface Props {
  img: string;
  span: string;
  text: string;
}

const Description: React.FC<Props> = ({ img, span, text }) => {
  return (
    <ul className="descriptionList">
      <img src={img} alt="" />
      <span>{span}</span>
      <p>{text}</p>
    </ul>
  );
};

export default Description;
