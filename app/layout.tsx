"use client";

import "@/styles/main.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const metadata = {
  title: "PenPoint",
  description: "PenPoint is a web app for writing and sharing notes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider> 
      </body>
    </html>
  );
}
