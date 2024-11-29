import React, { createContext } from "react";

export const PageContext = createContext(
  function goToPage(pageElement: React.JSX.Element) {},
);
