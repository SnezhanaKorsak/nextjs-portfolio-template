"use client";

import { TypeAnimation } from "react-type-animation";

const TypeAnimationTitle = () => {
  return (
    <TypeAnimation
      sequence={["Snega", 2000, "Web Developer", 2000]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  );
};

export default TypeAnimationTitle;
