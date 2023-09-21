import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import App from "./App";
import BubblePointer from "./components/BubblePointer";
import OilPainting from "./components/OilPainting";
import HoverEffect from "./components/HoverEffect";
import HoverLetter from "./components/HoverLetter";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HoverLetter />
    </QueryClientProvider>
  </React.StrictMode>
);
