import React, { useCallback, useContext, useEffect } from "react";
import {
  getNextBookById,
  isLastChapterOfBible,
  isLastChapterOfBook,
} from "@entities/bible";
import { ChapterContext, PageContext } from "@app/contexts";
import { ChapterPage } from "@pages";
import { ArrowRightIcon } from "@shared";

const ArrowRightButton: React.FC = () => {
  const { book, chapter } = useContext(ChapterContext);
  const goToPage = useContext(PageContext);

  const goToNextChapter = useCallback(() => {
    if (isLastChapterOfBook(book, chapter)) {
      goToPage(<ChapterPage book={getNextBookById(book.id)} chapter={1} />);
    } else {
      goToPage(<ChapterPage book={book} chapter={chapter + 1} />);
    }
  }, [book, chapter, goToPage]);

  useEffect(() => {
    const handleArrowRight = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        goToNextChapter();
      }
    };
    addEventListener("keydown", handleArrowRight);

    return () => {
      removeEventListener("keydown", handleArrowRight);
    };
  }, [goToNextChapter]);

  return (
    <>
      {!isLastChapterOfBible(book, chapter) && (
        <div className="svg-wrapper arrow clickable" onClick={goToNextChapter}>
          <ArrowRightIcon />
        </div>
      )}
    </>
  );
};

export default ArrowRightButton;
