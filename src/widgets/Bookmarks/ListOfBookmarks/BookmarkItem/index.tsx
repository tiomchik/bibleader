import React from "react";
import Location from "./Location";
import FirstVerse from "./FirstVerse";
import RemoveButton from "./RemoveButton";
import "./index.scss";

const BookmarkItem: React.FC = () => {
  return (
    <div className="bookmark-item">
      <Location />
      <FirstVerse />
      <RemoveButton />
    </div>
  );
};

export default BookmarkItem;
