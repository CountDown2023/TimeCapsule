import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={Story()} />
      </Routes>
    </BrowserRouter>
  ),
];
