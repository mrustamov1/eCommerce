import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { UserType } from "../types/user.type";

type AuthorizationContextType = {
  login: (userData: UserType) => void;
  logout: () => void;
  user: UserType | null;
};

const AuthorizationContext = createContext<
  AuthorizationContextType | undefined
>(undefined);

type AuthorizationProviderProps = {
  children: ReactNode;
};

export const AuthorizationProvider: React.FC<AuthorizationProviderProps> = ({
  children,
}) => {
  // ---------------------------------------------------------------------------
  // variables
  // ---------------------------------------------------------------------------
  const navigate = useNavigate();
  const [user, setUser] = useState<UserType | null>(null);

  const currentUser = localStorage.getItem("currentUser");
  useEffect(() => {
    if (currentUser) {
      setUser(JSON.parse(currentUser));
    }
  }, []);

  function login(userData: UserType) {
    setUser(userData);
    localStorage.setItem("currentUser", JSON.stringify(userData));
  }

  function logout() {
    setUser(null);

    localStorage.removeItem("currentUser");
    navigate("/", { replace: true });
  }

  return (
    <AuthorizationContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthorizationContext.Provider>
  );
};

export const useAuthorization = (): AuthorizationContextType => {
  const context = useContext(AuthorizationContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
