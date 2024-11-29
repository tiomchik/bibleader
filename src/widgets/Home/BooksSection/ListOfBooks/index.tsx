import React, { useContext, useEffect, useState } from "react";
import { BooksWithCategories } from "@app/types";
import { PageContext } from "@app/contexts";
import { ChapterPage } from "@pages";
import "./index.scss";

type Props = { books: BooksWithCategories };

const ListOfBooks: React.FC<Props> = ({ books }) => {
  const [jsx, setJsx] = useState<React.ReactNode[]>();
  const goToPage = useContext(PageContext);

  useEffect(() => {
    for (let key in books) {
      setJsx((prev) => [
        prev,
        <div key={key}>
          <h3>{key}</h3>
          <ul className="flex flex-column">
            {books[key].map((book) => (
              <li key={book.id}>
                <a
                  href="#"
                  onClick={() =>
                    goToPage(<ChapterPage book={book} chapter={1} />)
                  }
                >
                  {book.name}
                </a>
              </li>
            ))}
          </ul>
        </div>,
      ]);
    }
  }, []);

  return <div className="books flex flex-column">{jsx}</div>;
};

export default ListOfBooks;
