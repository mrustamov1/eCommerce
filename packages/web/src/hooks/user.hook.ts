import { UserType } from "../types/user.type";
export function useAccountUser(): UserType | null {
  const localUser = localStorage.getItem("currentUser");
  const localAdmin = localStorage.getItem("admin");
  const user: UserType | null = localUser
    ? JSON.parse(localUser)
    : localAdmin
      ? JSON.parse(localAdmin)
      : null;
  return user as UserType | null;
}

export function useAccountUserId(): string | null {
  const userId = localStorage.getItem("currentUserId");
  return userId;
}
