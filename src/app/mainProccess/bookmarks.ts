import { app, IpcMainInvokeEvent } from "electron";
import { Bookmark } from "@app/types";
import { readFile, writeFile } from "fs/promises";
import { existsSync } from "fs";

const BOOKMARKS_JSON_PATH = app.getPath("userData") + "/bookmarks.json";

export const handleGetParsedBookmarks = async (): Promise<Bookmark[]> => {
  const rawBookmarks = await readFile(BOOKMARKS_JSON_PATH);
  const parsedBookmarks = await parseBookmarks(rawBookmarks.toString());
  return parsedBookmarks;
};

const parseBookmarks = async (rawBookmarks: string): Promise<Bookmark[]> => {
  return JSON.parse(rawBookmarks).bookmarks;
};

export const createBookmarksFileIfDoesntExist = async (): Promise<void> => {
  if (!existsSync(BOOKMARKS_JSON_PATH)) {
    await writeFile(BOOKMARKS_JSON_PATH, `{"bookmarks":[]}`);
  }
};

export const handleAddBookmarkAndRewriteFile = async (
  _event: IpcMainInvokeEvent,
  bookmark: Bookmark
): Promise<void> => {
  const bookmarks = await handleGetParsedBookmarks();
  bookmarks.push(bookmark);
  await rewriteBookmarksFile(bookmarks);
};

const rewriteBookmarksFile = async (bookmarks: Bookmark[]): Promise<void> => {
  try {
    await writeFile(BOOKMARKS_JSON_PATH, JSON.stringify({ bookmarks }));
  } catch (error) {
    throw new Error(`Failed to write bookmarks: ${error.message}`);
  }
};

export const handleRemoveBookmarkAndRewriteFile = async (
  _event: IpcMainInvokeEvent,
  bookmark: Bookmark
): Promise<void> => {
  let bookmarks = await handleGetParsedBookmarks();
  bookmarks = await removeBookmark(bookmarks, bookmark);
  await rewriteBookmarksFile(bookmarks);
};

const removeBookmark = async (
  bookmarks: Bookmark[],
  bookmark: Bookmark
): Promise<Bookmark[]> => {
  return bookmarks.filter(
    (value) =>
      !(bookmark.bookId === value.bookId && bookmark.chapter === value.chapter)
  );
};
