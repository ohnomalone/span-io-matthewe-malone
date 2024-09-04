import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { ThemeConfigProvider as ThemeProvider } from "./theme/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
