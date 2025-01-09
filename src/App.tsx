import React from "react";

import { RouterProvider } from "react-router-dom";
import GlobalStyle from "./styles/global";
import router from "./routes/Router";

const App = () => (
  <>
    <GlobalStyle />
    <RouterProvider router={router} />
  </>
);

export default App;
