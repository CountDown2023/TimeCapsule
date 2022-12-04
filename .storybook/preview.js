import React from "react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CapsuleContext } from "store";
import "../src/index.scss";

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
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: "iphonex",
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
