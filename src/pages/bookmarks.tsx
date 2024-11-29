import { BookmarksHeader, ListOfBookmarks } from "@widgets";
import React from "react";

const BookmarksPage: React.FC = () => {
  return (
    <>
      <BookmarksHeader />
      <ListOfBookmarks />
    </>
  );
};

export default BookmarksPage;
