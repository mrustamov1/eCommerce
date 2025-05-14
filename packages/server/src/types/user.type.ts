export type UserType = {
  id: string
  created_at: number
  updated_at: number
  surname: string
  name: string
  email: string
  password: string
  role: UserKind
  refreshToken: string | null
}

export enum UserKind {
  user = "user",
  admin = "admin",
}
