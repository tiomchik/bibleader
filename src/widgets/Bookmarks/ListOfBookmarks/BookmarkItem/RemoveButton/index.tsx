import React, { useContext } from "react";
import { TrashCanIcon } from "@shared";
import { BookmarkContext } from "@app/contexts";
import "./index.scss";

const RemoveButton: React.FC = () => {
  const { bookmark, onRemoveBookmark } = useContext(BookmarkContext);

  return (
    <div
      className="remove-btn svg-wrapper clickable"
      onClick={() => onRemoveBookmark(bookmark)}
    >
      <TrashCanIcon />
    </div>
  );
};

export default RemoveButton;
