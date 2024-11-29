import { ChapterContext } from "@app/contexts";
import React, { useContext } from "react";
import Heading from "src/widgets/Heading";

const ChapterHeading: React.FC = () => {
  const { book, chapter } = useContext(ChapterContext);

  if (book.id === "PSALMS") {
    return <Heading>Псалом {chapter}</Heading>;
  }

  return (
    <Heading>
      {book.name}, глава {chapter}
    </Heading>
  );
};

export default ChapterHeading;
