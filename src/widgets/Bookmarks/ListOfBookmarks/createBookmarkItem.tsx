import React from "react";
import { Bookmark } from "@app/types";
import { getBookById } from "@entities/bible";
import { BookmarkContext } from "@app/contexts";
import BookmarkItem from "./BookmarkItem";

export const createBookmarkItem = (
  bookmark: Bookmark,
  onRemoveBookmark: (bookmark: Bookmark) => void
): React.JSX.Element => {
  const book = getBookById(bookmark.bookId);
  const key = `${bookmark.bookId}-${bookmark.chapter}`;

  return (
    <BookmarkContext.Provider
      value={{ book, bookmark, onRemoveBookmark }}
      key={key}
    >
      <BookmarkItem key={key} />
    </BookmarkContext.Provider>
  );
};
