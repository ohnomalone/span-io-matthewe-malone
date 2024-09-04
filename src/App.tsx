import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { QueryClientProvider } from "@tanstack/react-query";
import { ThemeConfigProvider as ThemeProvider } from "./theme/ThemeProvider";
import { queryClient } from "./query/queryClient";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
