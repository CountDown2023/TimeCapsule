import { ReactElement } from "react";
import { Route, Router, Routes } from "react-router-dom";
import { render, RenderOptions } from "@testing-library/react";
import { createMemoryHistory, MemoryHistory } from "history";

interface Props extends RenderOptions {
  route?: string;
  path?: string;
  history?: MemoryHistory;
}

const customRender = (
  ui: ReactElement,
  { route = "/", path = "/", ...renderOptions }: Props = {}
) => {
  return render(ui, {
    wrapper: ({ children }) => (
      <Router
        location={path}
        navigator={createMemoryHistory({ initialEntries: [route] })}
      >
        <Routes>
          <Route path={path} element={children} />
        </Routes>
      </Router>
    ),
    ...renderOptions,
  });
};

export default customRender;
