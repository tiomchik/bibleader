import React from "react";
import { Heading } from "@widgets";
import BookmarksButton from "./BookmarksButton";
import "./index.scss";

const HomeHeader: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <Heading>Bibleader</Heading>
        <p className="center-text">Читайте Библию без доступа к Интернету</p>

        <BookmarksButton />
      </div>
    </header>
  );
};

export default HomeHeader;
