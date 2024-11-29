import { BookIDsStrings, Bookmark } from "@app/types";

export const isChapterHaveBookmark = async (
  bookId: BookIDsStrings,
  chapter: number
): Promise<boolean> => {
  const bookmarks: Bookmark[] = await getBookmarks();
  const bookmark = bookmarks?.find(
    (bookmark: Bookmark) =>
      bookmark.bookId === bookId && bookmark.chapter === chapter
  );
  return !!bookmark;
};

export const getBookmarks = async (): Promise<Bookmark[]> => {
  return await window.electronAPI.getParsedBookmarks();
};

export const addBookmark = async (bookmark: Bookmark): Promise<void> => {
  await window.electronAPI.addBookmarkAndRewriteFile(bookmark);
};

export const removeBookmark = async (bookmark: Bookmark): Promise<void> => {
  await window.electronAPI.removeBookmarkAndRewriteFile(bookmark);
};
