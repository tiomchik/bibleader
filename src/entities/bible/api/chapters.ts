import { BookIDsStrings, Verse } from "@app/types";
import { getBookNameById } from "./books";

export const getChapterJsonById = async (
  bookId: BookIDsStrings,
  chapter: number
): Promise<Verse[]> => {
  const chapterData = await import(
    `../books/${getBookNameById(bookId)}/${chapter}.json`
  );
  return chapterData.default;
};

export const getFirstVerseOfChapterById = async (
  bookId: BookIDsStrings,
  chapter: number
): Promise<Verse> => {
  const verses = await getChapterJsonById(bookId, chapter);
  return verses[0];
};
