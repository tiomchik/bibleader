import { BookNames } from "@app/enums";

export type Book = { name: string; id: BookIDsStrings, chapterQty: number };
export type BookWithChapter = { book: Book, chapter: number };

export type Books = Book[];
export type BooksWithCategories = { [key: string]: Book[] };

export type BookIDsStrings = keyof typeof BookNames;

export type BookLocation = { category: string; bookIndex: number };
