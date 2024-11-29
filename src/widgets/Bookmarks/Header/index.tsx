import React from "react";
import { HomeButton } from "@shared";
import { Heading } from "@widgets";

const BookmarksHeader: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <HomeButton />
        <Heading>Закладки</Heading>
      </div>
    </header>
  );
};

export default BookmarksHeader;
