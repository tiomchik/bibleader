import React from "react";
import { BookWithChapter } from "@app/types";
import { ChapterContext } from "@app/contexts";
import { ChapterContent, ChapterHeader, ListOfChapters } from "@widgets";

const ChapterPage: React.FC<BookWithChapter> = ({ book, chapter }) => {
  return (
    <ChapterContext.Provider value={{ book, chapter }}>
      <ChapterHeader />
      <ChapterContent />
      <ListOfChapters />
    </ChapterContext.Provider>
  );
};

export default ChapterPage;
