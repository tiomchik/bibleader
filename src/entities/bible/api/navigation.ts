import { Book, BookIDsStrings } from "@app/types";
import { getBookLocationById } from "./books";
import { listOfBooksWithCategories, listOfCategories } from "../model";

export const getNextBookById = (bookId: BookIDsStrings): Book => {
  const bookLocation = getBookLocationById(bookId);
  let book: Book = getNextBookInCategory(
    bookLocation.category,
    bookLocation.bookIndex
  );

  if (!book) {
    book = getFirstBookOfNextCategory(bookLocation.category);
  }

  return book;
};

const getNextBookInCategory = (
  currentCategory: string,
  currentBookIndex: number
): Book => {
  return listOfBooksWithCategories[currentCategory][currentBookIndex + 1];
};

const getFirstBookOfNextCategory = (currentCategory: string): Book => {
  const nextCategory = getNextCategory(currentCategory);
  return listOfBooksWithCategories[nextCategory][0];
};

const getNextCategory = (currentCategory: string): string => {
  const indexOfNextCategory = listOfCategories.indexOf(currentCategory) + 1;
  return listOfCategories.at(indexOfNextCategory);
};

export const getPreviousBookById = (bookId: BookIDsStrings): Book => {
  const bookLocation = getBookLocationById(bookId);
  let book: Book = getPreviousBookInCategory(
    bookLocation.category,
    bookLocation.bookIndex
  );

  if (!book) {
    book = getLastBookOfPreviousCategory(bookLocation.category);
  }

  return book;
};

const getPreviousBookInCategory = (
  currentCategory: string,
  currentBookIndex: number
): Book => {
  return listOfBooksWithCategories[currentCategory][currentBookIndex - 1];
};

const getLastBookOfPreviousCategory = (currentCategory: string): Book => {
  const previousCategory = getPreviousCategory(currentCategory);
  const booksOfCategory = listOfBooksWithCategories[previousCategory];
  const indexOfLastBook = booksOfCategory.length - 1;
  return booksOfCategory[indexOfLastBook];
};

const getPreviousCategory = (currentCategory: string): string => {
  const indexOfPreviousCategory = listOfCategories.indexOf(currentCategory) - 1;
  return listOfCategories.at(indexOfPreviousCategory);
};
