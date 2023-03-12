import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import Routes from "~/pages/Routes";
import "~/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </React.StrictMode>
);

/**
 * 명령형적인 코드, 화면에 어떻게 보여주어야하는지를 모조리 기술한다.
 */
const wrapperEl = document.createElement("div");
const titleEl = document.createElement("h1");
titleEl.innerText = "Imperative 합니다.";

wrapperEl.appendChild(titleEl);
