import { ChapterContext, PageContext } from "@app/contexts";
import { ChapterPage } from "@pages";
import React, { useContext } from "react";
import "./index.scss";

const ChapterItem: React.FC<{ chapter: number }> = ({ chapter }) => {
  const goToPage = useContext(PageContext);
  const { book, chapter: currentChapter } = useContext(ChapterContext);

  const goToSelectedChapterPage = (chapter: number) => {
    goToPage(<ChapterPage book={book} chapter={chapter} />);
  };

  return (
    <li
      onClick={() => goToSelectedChapterPage(chapter)}
      className={
        chapter === currentChapter ? "chapter-item current" : "chapter-item clickable"
      }
      id={`chapter-${chapter}`}
    >
      {chapter}
    </li>
  );
};

export default ChapterItem;
