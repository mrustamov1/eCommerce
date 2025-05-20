import { MainRoutes } from "./routes/app.routes";
import { ModalProvider } from "../ui-components/modal";
import { AuthorizationProvider } from "../context/authorization.context";
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
