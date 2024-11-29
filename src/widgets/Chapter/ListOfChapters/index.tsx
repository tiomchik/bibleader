import { ChapterContext } from "@app/contexts";
import React, { useContext, useEffect } from "react";
import ChapterItem from "./ChapterItem";
import "./index.scss";

const ListOfChapters: React.FC = () => {
  const { book, chapter } = useContext(ChapterContext);

  useEffect(() => {
    scrollToCurrentChapter(chapter);
  }, [chapter]);

  const chaptersRange = [...Array(book.chapterQty).keys()];

  return (
    <div className="list-of-chapters">
      <div className="container">
        <ul className="flex">
          {chaptersRange.map((chapter) => (
            // The chapter number is increased by 1, because the array starts at 0
            <ChapterItem chapter={chapter + 1} key={chapter + 1} />
          ))}
        </ul>
      </div>
    </div>
  );
};

const scrollToCurrentChapter = (chapter: number): void => {
  const currentChapterElement = document.getElementById(`chapter-${chapter}`);
  currentChapterElement.scrollIntoView({
    block: "nearest",
    inline: "center",
    behavior: "smooth",
  });
};

export default ListOfChapters;
