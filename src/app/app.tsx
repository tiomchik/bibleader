import React, { useEffect, useState } from "react";
import { HomePage } from "@pages";
import { PageContext } from "@app/contexts";
import { pageShortcuts } from "./shortcuts";

const App: React.FC = () => {
  const [page, setPage] = useState<React.JSX.Element>(<HomePage />);

  const goToPage = (pageElement: React.JSX.Element): void => {
    setPage(pageElement);
  };

  useEffect(() => {
    const handlePageShortcuts = (e: KeyboardEvent) => {
      for (const [code, page] of Object.entries(pageShortcuts)) {
        if (e.code === code) {
          goToPage(page);
        }
      }
    };

    addEventListener("keydown", handlePageShortcuts);

    return () => {
      removeEventListener("keydown", handlePageShortcuts);
    };
  }, [goToPage]);

  return <PageContext.Provider value={goToPage}>{page}</PageContext.Provider>;
};

export default App;
