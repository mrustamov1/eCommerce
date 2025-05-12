import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { UserKind, UserType } from "../types/user.type.js";

@Entity({ name: "users" })
export class UserEntity implements UserType {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "varchar", nullable: false })
  name!: string;

  @Column({ type: "varchar", nullable: false })
  surname!: string;

  @Column({ type: "varchar", nullable: false, unique: true })
  email!: string;

  @Column({ type: "varchar", nullable: false })
  password!: string;

  @Column({ enum: UserKind, nullable: false })
  role!: UserKind;

  @Column({ type: "bigint", nullable: false, default: Date.now() })
  created_at!: number;

  @Column({ type: "bigint", nullable: false, default: Date.now() })
  updated_at!: number;

  @Column({ type: "varchar", nullable: true, default: null })
  refreshToken!: string | null;
}
