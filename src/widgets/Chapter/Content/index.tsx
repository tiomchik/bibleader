import React, { useCallback, useContext, useEffect, useState } from "react";
import { getChapterJsonById } from "@entities/bible";
import { ChapterContext } from "@app/contexts";
import { Verse as VerseType } from "@app/types";
import Verse from "./Verse";
import "./index.scss";

const ChapterContent: React.FC = () => {
  const { book, chapter } = useContext(ChapterContext);
  const [content, setContent] = useState<VerseType[]>();

  const loadContent = useCallback(async () => {
    setContent(await getChapterJsonById(book.id, chapter));
  }, [book.id, chapter]);

  useEffect(() => {
    loadContent();
  }, [loadContent]);

  return (
    <section className="content">
      <div className="container">
        {content?.map((verse) => (
          <Verse {...verse} key={content.indexOf(verse)} />
        ))}
      </div>
    </section>
  );
};

export default ChapterContent;
