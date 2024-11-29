import { Verse as VerseType } from "@app/types";
import React from "react";
import "./index.scss";

const Verse: React.FC<VerseType> = ({ text, chapter, verse }) => {
  return (
    <div className="flex verse">
      <div className="number">
        <p>
          {chapter}:{verse}
        </p>
      </div>
      <p className={verse == 0 ? "text psalm-heading" : "text"}>{text}</p>
    </div>
  );
};

export default Verse;
