import ReactDOM from "react-dom/client";
import QueryProvider from "@_provider/QueryProvider.tsx";
import Router from "./Router.tsx";

import "@_style/text.css";
import "@_style/animation.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryProvider>
    <Router />
  </QueryProvider>
);
