import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FONTS } from "./styles/tokens.js";
import App from "./App.jsx";

// Global reset — applied once at the root
const globalStyle = document.createElement("style");
globalStyle.textContent = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { font-family: ${FONTS.family}; background: #ffffff; -webkit-font-smoothing: antialiased; }
`;
document.head.appendChild(globalStyle);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
