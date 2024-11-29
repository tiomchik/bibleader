import React, { useContext } from "react";
import { PageContext } from "@app/contexts";
import { BookmarksPage } from "@pages";
import { BookmarkIcon } from "@shared";
import "./index.scss";

const BookmarksButton: React.FC = () => {
  const goToPage = useContext(PageContext);

  return (
    <div
      className="bookmark-btn flex clickable"
      onClick={() => goToPage(<BookmarksPage />)}
    >
      <div className="svg-wrapper">
        <BookmarkIcon />
      </div>
      <span>Закладки</span>
    </div>
  );
};

export default BookmarksButton;
