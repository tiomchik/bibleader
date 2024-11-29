import { createRoot } from "react-dom/client";
import App from "@app/app";
import "@app/styles/index.scss";

const root = createRoot(document.body);
root.render(<App />);
