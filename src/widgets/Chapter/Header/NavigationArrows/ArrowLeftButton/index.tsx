import React, { useCallback, useContext, useEffect } from "react";
import { getPreviousBookById, isFirstChapterOfBible } from "@entities/bible";
import { ChapterContext, PageContext } from "@app/contexts";
import { ChapterPage } from "@pages";
import { ArrowLeftIcon } from "@shared";

const ArrowLeftButton: React.FC = () => {
  const { book, chapter } = useContext(ChapterContext);
  const goToPage = useContext(PageContext);

  const goToPreviousChapter = useCallback(() => {
    if (chapter === 1) {
      const previousBook = getPreviousBookById(book.id);
      goToPage(
        <ChapterPage book={previousBook} chapter={previousBook.chapterQty} />
      );
    } else {
      goToPage(<ChapterPage book={book} chapter={chapter - 1} />);
    }
  }, [book, chapter, goToPage]);

  useEffect(() => {
    const handleArrowLeft = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToPreviousChapter();
      }
    };
    addEventListener("keydown", handleArrowLeft);

    return () => {
      removeEventListener("keydown", handleArrowLeft);
    };
  }, [goToPreviousChapter]);

  return (
    <>
      {!isFirstChapterOfBible(book, chapter) && (
        <div
          className="svg-wrapper arrow clickable"
          onClick={goToPreviousChapter}
        >
          <ArrowLeftIcon />
        </div>
      )}
    </>
  );
};

export default ArrowLeftButton;
