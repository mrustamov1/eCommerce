import jwt from "jsonwebtoken";
import { Request } from "express";
import { UserKind } from "../types/user.type";

export const TokenUtils = {
  generate(id: string, role: UserKind): { access: string; refresh: string } {
    console.log("token-utils:generate");
    console.log("Generating access token");

    const accessToken = jwt.sign(
      { id: id, role: role },
      process.env.JWT_ACCESS_SECRET as string,
      {
        expiresIn: "1d",
      }
    );

    const refreshToken = jwt.sign(
      { id: id, role: role },
      process.env.JWT_REFRESH_SECRET as string,
      { expiresIn: "30d" }
    );

    return { access: accessToken, refresh: refreshToken };
  },

  verify(request: Request): {
    id: string;
    role: UserKind;
  } | null {
    const token = request.headers.authorization
      ? request.headers.authorization.replace("Bearer", "").trim()
      : null;

    if (!token) return null;

    const { access, refresh }: { access: string; refresh: string } =
      JSON.parse(token);

    const accessToken = jwt.verify(
      access,
      process.env.JWT_ACCESS_SECRET as string
    );

    const refreshToken = jwt.verify(
      refresh,
      process.env.JWT_REFRESH_SECRET as string
    );

    if (typeof accessToken !== "string") {
      return {
        id: accessToken.id as string,
        role: accessToken.role as UserKind,
      };
    } else if (typeof refreshToken !== "string") {
      return {
        id: refreshToken.id as string,
        role: refreshToken.role as UserKind,
      };
    } else {
      return null;
    }
  },

  refresh(request: Request) {
    const token = request.headers.authorization
      ? request.headers.authorization.replace("Bearer", "").trim()
      : null;

    if (!token) return null;

    const { access, refresh }: { access: string; refresh: string } =
      JSON.parse(token);

    return refresh;
  },
};
