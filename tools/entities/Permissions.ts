import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { RolePermissions } from "./RolePermissions";

@Index("permissions_name_guard_name_unique", ["name", "guardName"], {
  unique: true,
})
@Entity("permissions", { schema: "kolayasistanusers" })
export class Permissions {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("varchar", { name: "guard_name", length: 255 })
  guardName: string;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @OneToMany(
    () => RolePermissions,
    (rolePermissions) => rolePermissions.permission
  )
  rolePermissions: RolePermissions[];
}
