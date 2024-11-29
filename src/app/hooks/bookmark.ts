import { useCallback, useContext, useEffect, useState } from "react";
import { ChapterContext } from "@app/contexts";
import { Bookmark } from "@app/types";
import { isChapterHaveBookmark } from "@entities/bookmark";

export const useBookmark = (): {
  bookmark: Bookmark;
  bookmarked: boolean;
  setBookmarked: React.Dispatch<React.SetStateAction<boolean>>;
  loadBookmarkStatus: () => Promise<void>;
} => {
  const { book, chapter } = useContext(ChapterContext);
  const [bookmarked, setBookmarked] = useState<boolean>(false);

  const loadBookmarkStatus = useCallback(async () => {
    setBookmarked(await isChapterHaveBookmark(book.id, chapter));
  }, [book.id, chapter]);

  useEffect(() => {
    loadBookmarkStatus();
  }, [loadBookmarkStatus]);

  const bookmark = { bookId: book.id, chapter };

  return { bookmark, bookmarked, setBookmarked, loadBookmarkStatus };
};
