import React, { useCallback, useContext, useEffect, useState } from "react";
import { BookmarkContext } from "@app/contexts";
import { getFirstVerseOfChapterById } from "@entities/bible";

const FirstVerse: React.FC = () => {
  const { bookmark } = useContext(BookmarkContext);
  const [firstVerse, setFirstVerse] = useState<string>();

  const loadFirstVerse = useCallback(async () => {
    const verse = await getFirstVerseOfChapterById(bookmark.bookId, bookmark.chapter);
    setFirstVerse(verse.text);
  }, [bookmark.bookId, bookmark.chapter]);

  useEffect(() => {
    loadFirstVerse();
  }, [loadFirstVerse]);

  return (
    <>
      <div className="1st-verse">{firstVerse + "..."}</div>
    </>
  );
};

export default FirstVerse;
