import { Book, BookIDsStrings, BookLocation } from "@app/types";
import { listOfBooks, listOfBooksWithCategories } from "../model";
import { BookNames, RussianBookNames } from "@app/enums";

export const getBookById = (bookId: BookIDsStrings): Book => {
  const bookName = getRussianBookNameById(bookId);
  return listOfBooks.find((book) => book.name === bookName);
};

export const getBookNameById = (bookId: BookIDsStrings): string => {
  return BookNames[bookId];
};

export const getRussianBookNameById = (bookId: BookIDsStrings): string => {
  return RussianBookNames[bookId];
};

export const getBookLocationById = (bookId: BookIDsStrings): BookLocation => {
  const category = getCategoryById(bookId);
  const bookIndex = getBookIndexById(bookId);
  return { category, bookIndex };
};

const getCategoryById = (bookId: BookIDsStrings): string => {
  for (let category in listOfBooksWithCategories) {
    const booksOfCategory = listOfBooksWithCategories[category];
    const index = booksOfCategory.findIndex((book) => book.id === bookId);

    if (index !== -1) {
      return category;
    }
  }
};

const getBookIndexById = (bookId: BookIDsStrings): number => {
  const bookCategory = getCategoryById(bookId);
  const booksOfCategory = listOfBooksWithCategories[bookCategory];
  const index = booksOfCategory.findIndex((book) => book.id === bookId);
  return index;
};

export const isLastChapterOfBible = (book: Book, chapter: number): boolean => {
  return chapter === book.chapterQty && book.id === "REVELATION";
};

export const isLastChapterOfBook = (book: Book, chapter: number): boolean => {
  return chapter === book.chapterQty;
};

export const isFirstChapterOfBible = (book: Book, chapter: number): boolean => {
  return chapter === 1 && book.id === "GENESIS";
};
