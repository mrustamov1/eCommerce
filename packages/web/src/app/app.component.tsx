import { AuthorizationProvider } from "../context/authorization.context";
import { ModalProvider } from "../ui-components/modal";
import { MainRoutes } from "./routes/app.routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const querClient = new QueryClient();

export function App() {
  return (
    <AuthorizationProvider>
      <ModalProvider>
        <QueryClientProvider client={querClient}>
          <MainRoutes />
        </QueryClientProvider>
      </ModalProvider>
    </AuthorizationProvider>
  );
}
