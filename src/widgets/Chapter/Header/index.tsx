import React from "react";
import StatefulBookmarkButton from "./StatefulBookmarkButton";
import NavigationArrows from "./NavigationArrows";
import ChapterHeading from "./ChapterHeading";
import { HomeButton } from "@shared";
import "./index.scss";

const ChapterHeader: React.FC = () => {
  return (
    <header className="header chapter-header">
      <div className="container">
        <HomeButton />
        <ChapterHeading />

        <div className="flex actions">
          <StatefulBookmarkButton />
          <NavigationArrows />
        </div>
      </div>
    </header>
  );
};

export default ChapterHeader;
