import { Book, Bookmark } from "@app/types";
import { createContext } from "react";

type BookmarkContextType = {
  book: Book;
  bookmark: Bookmark;
  onRemoveBookmark: (bookmark: Bookmark) => void;
};

export const BookmarkContext = createContext({
  book: { name: "Genesis", id: "GENESIS" },
  bookmark: { bookId: "GENESIS", chapter: 1 },
  onRemoveBookmark: (bookmark: Bookmark) => {},
} as BookmarkContextType);
