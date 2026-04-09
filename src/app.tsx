import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import "./styles/index.css";
import { RouterProvider } from "react-router-dom";

import { ROUTES } from "./constants/application/routing";
import { theme } from "./constants/libs/mantine";

const container = document.getElementById("app")!;
const queryClient = new QueryClient();

ReactDOM.createRoot(container).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={ROUTES} />
      </QueryClientProvider>
    </MantineProvider>
  </StrictMode>,
);
