import { createContext } from "react";
import { BookWithChapter } from "@app/types";

export const ChapterContext = createContext({
  book: { name: "Genesis", id: "GENESIS" },
  chapter: 1,
} as BookWithChapter);
