"use client";

import { useState } from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { GlobalContextProvider } from "../context/globalContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [client] = useState(new QueryClient());

  return (
    <QueryClientProvider client={client}>
      <GlobalContextProvider>{children}</GlobalContextProvider>
    </QueryClientProvider>
  );
}
