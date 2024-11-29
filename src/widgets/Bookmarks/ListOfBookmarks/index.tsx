import React, { useCallback, useEffect, useState } from "react";
import { Bookmark } from "@app/types";
import { getBookmarks, removeBookmark } from "@entities/bookmark";
import { createBookmarkItem } from "./createBookmarkItem";
import "./index.scss";

const ListOfBookmarks: React.FC = () => {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);

  const loadBookmarks = useCallback(async () => {
    setBookmarks(await getBookmarks());
  }, []);

  useEffect(() => {
    loadBookmarks();
  }, [loadBookmarks]);

  const onRemoveBookmark = async (bookmark: Bookmark): Promise<void> => {
    await removeBookmark(bookmark);
    loadBookmarks();
  };

  return (
    <section className="list-of-bookmarks">
      <div className="container">
        <div className="bookmarks">
          {bookmarks &&
            bookmarks.map((bookmark) =>
              createBookmarkItem(bookmark, onRemoveBookmark)
            )}
          {bookmarks.length === 0 && (
            <p className="center-text">
              Закладки отсуствуют! Создать их можно на странице нужной главы.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ListOfBookmarks;
