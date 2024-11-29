import { PageContext } from "@app/contexts";
import { HomePage } from "@pages";
import { HomeIcon } from "@shared";
import React, { useContext } from "react";

const HomeButton: React.FC = () => {
  const goToPage = useContext(PageContext);

  return (
    <div className="svg-wrapper clickable" onClick={() => goToPage(<HomePage />)}>
      <HomeIcon />
    </div>
  );
};

export default HomeButton;
