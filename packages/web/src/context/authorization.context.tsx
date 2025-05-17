import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  ReactNode,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";
import { UserKindEnum, UserType } from "../types/user.type";

type AuthorizationContextType = {
  logout: () => void;
  user: UserType | null;
  userId: (id: string) => void;
  login: (userData: UserType) => void;
};

const AuthorizationContext = createContext<AuthorizationContextType>({
  user: null,
  login: () => {},
  logout: () => {},
  userId: () => {},
});

type AuthorizationProviderProps = {
  children: ReactNode;
};

export const AuthorizationProvider: React.FC<AuthorizationProviderProps> = ({
  children,
}) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = useCallback(() => {
    const currentUser = localStorage.getItem("currentUserId");
    if (currentUser) {
      setUser({id: currentUser});
    }
  }, []);

  function login(userData: UserType) {
    UserKindEnum.parse(userData.role);
    setUser(userData);
    if (userData.role === "admin") {
      localStorage.setItem("admin", JSON.stringify(userData));
    } else {
      localStorage.setItem("currentUser", JSON.stringify(userData));
    }
    localStorage.removeItem("currentUserId");
  }

  // Set user ID function
  function userId(id: string) {
    setUser((prevUser) => {
      if (prevUser) {
        const updatedUser = { ...prevUser, id };
        localStorage.setItem("currentUser", JSON.stringify(updatedUser));
        return updatedUser;
      }
      return prevUser;
    });
  }

  // Logout function
  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem("tokens");
    localStorage.removeItem("currentUser");
    localStorage.removeItem("admin");
    navigate("/");
  }, [navigate]);

  return (
    <AuthorizationContext.Provider value={{ user, login, logout, userId }}>
      {children}
    </AuthorizationContext.Provider>
  );
};

export const useAuthorization = (): AuthorizationContextType => {
  const context = useContext(AuthorizationContext);
  if (!context) {
    throw new Error(
      "useAuthorization must be used within an AuthorizationProvider"
    );
  }
  return context;
};
