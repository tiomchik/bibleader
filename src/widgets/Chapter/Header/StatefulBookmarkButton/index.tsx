import React, { useCallback, useEffect } from "react";
import { BookmarkIcon } from "@shared";
import { addBookmark, removeBookmark } from "@entities/bookmark";
import { useBookmark } from "@app/hooks";
import "./index.scss";

const FILLED_BOOKMARK_COLOR = "#f7f700";

const StatefulBookmarkButton: React.FC = () => {
  const { bookmark, bookmarked, setBookmarked } = useBookmark();

  const addOrRemoveBookmark = useCallback(async () => {
    if (!bookmarked) {
      await addBookmark(bookmark);
    } else {
      await removeBookmark(bookmark);
    }

    setBookmarked((prev) => !prev);
  }, [bookmark, bookmarked]);

  useEffect(() => {
    const handleAddBookmarkOnEnter = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        addOrRemoveBookmark();
      }
    };
    addEventListener("keydown", handleAddBookmarkOnEnter);

    return () => {
      removeEventListener("keydown", handleAddBookmarkOnEnter);
    };
  }, [addOrRemoveBookmark]);

  return (
    <div
      className="svg-wrapper bookmark clickable"
      onClick={addOrRemoveBookmark}
    >
      <BookmarkIcon fill={bookmarked ? FILLED_BOOKMARK_COLOR : "none"} />
    </div>
  );
};

export default StatefulBookmarkButton;
