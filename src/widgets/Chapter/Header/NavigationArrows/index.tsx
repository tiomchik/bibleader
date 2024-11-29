import React from "react";
import ArrowLeftButton from "./ArrowLeftButton";
import ArrowRightButton from "./ArrowRightButton";
import "./index.scss";

const NavigationArrows: React.FC = () => {
  return (
    <nav className="flex navigation">
      <ArrowLeftButton />
      <ArrowRightButton />
    </nav>
  );
};

export default NavigationArrows;
