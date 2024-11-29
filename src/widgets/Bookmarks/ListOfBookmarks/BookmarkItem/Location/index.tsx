import React, { useContext } from "react";
import { Heading } from "@widgets";
import { BookmarkContext, PageContext } from "@app/contexts";
import { ChapterPage } from "@pages";
import "./index.scss";

const Location: React.FC = () => {
  const { book, bookmark } = useContext(BookmarkContext);
  const goToPage = useContext(PageContext);

  const onClick = () => {
    goToPage(<ChapterPage book={book} chapter={bookmark.chapter} />);
  };

  return (
    <a href="#" className="location" onClick={onClick}>
      <Heading>
        {book.name}, {bookmark.chapter}
      </Heading>
    </a>
  );
};

export default Location;
