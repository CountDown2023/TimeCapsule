import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CapsuleContext } from "store";

const queryClient = new QueryClient();

export const parameters = {
  layout: "fullscreen",
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
    <QueryClientProvider client={queryClient}>
      <CapsuleContext>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={Story()} />
          </Routes>
        </BrowserRouter>
      </CapsuleContext>
    </QueryClientProvider>
  ),
];
