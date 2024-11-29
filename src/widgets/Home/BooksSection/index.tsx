import React from "react";
import ListOfBooks from "./ListOfBooks";
import { newTestamentBooks, oldTestamentBooks } from "@entities/bible";
import "./index.scss";

const BooksSection: React.FC = () => {
  return (
    <section className="books-section">
      <div className="container flex space-around">
        <div>
          <h1>Ветхий Завет</h1>
          <ListOfBooks books={oldTestamentBooks} />
        </div>
        <div>
          <h1>Новый Завет</h1>
          <ListOfBooks books={newTestamentBooks} />
        </div>
      </div>
    </section>
  );
};

export default BooksSection;
