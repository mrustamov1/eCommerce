import { AuthorizationProvider } from "../context/authorization.context";
import { MainRoutes } from "./routes/app.routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const querClient = new QueryClient();

export function App() {
  return (
    <AuthorizationProvider>
      <QueryClientProvider client={querClient}>
        <MainRoutes />
      </QueryClientProvider>
    </AuthorizationProvider>
  );
}
