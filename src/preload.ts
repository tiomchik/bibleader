import { Bookmark } from "@app/types";
import { contextBridge } from "electron";
const ipcRenderer = require("electron").ipcRenderer;

contextBridge.exposeInMainWorld("electronAPI", {
  getParsedBookmarks: () => ipcRenderer.invoke("getParsedBookmarks"),
  addBookmarkAndRewriteFile: (bookmark: Bookmark) =>
    ipcRenderer.invoke("addBookmarkAndRewriteFile", bookmark),
  removeBookmarkAndRewriteFile: (bookmark: Bookmark) =>
    ipcRenderer.invoke("removeBookmarkAndRewriteFile", bookmark),
});

declare global {
  interface Window {
    electronAPI: {
      getParsedBookmarks: () => Promise<Bookmark[]>;
      addBookmarkAndRewriteFile: (bookmark: Bookmark) => Promise<void>;
      removeBookmarkAndRewriteFile: (bookmark: Bookmark) => Promise<void>;
    };
  }
}
