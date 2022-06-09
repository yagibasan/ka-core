import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Permissions } from "./Permissions";
import { Roles } from "./Roles";

@Index("fk_user_roles_roleid", ["permissionId"], {})
@Index("un_user_roles_userid_role_id", ["roleId", "permissionId"], {
  unique: true,
})
@Entity("role_permissions", { schema: "kolayasistanusers" })
export class RolePermissions {
  @PrimaryGeneratedColumn({ type: "int", name: "id", comment: "pk" })
  id: number;

  @Column("int", { name: "role_id", comment: "fk-users.id" })
  roleId: number;

  @Column("int", { name: "permission_id", comment: "fk-permissions.id" })
  permissionId: number;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("varchar", { name: "created_by", nullable: true, length: 255 })
  createdBy: string | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("varchar", { name: "updated_by", nullable: true, length: 255 })
  updatedBy: string | null;

  @ManyToOne(() => Permissions, (permissions) => permissions.rolePermissions, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "permission_id", referencedColumnName: "id" }])
  permission: Permissions;

  @ManyToOne(() => Roles, (roles) => roles.rolePermissions, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "role_id", referencedColumnName: "id" }])
  role: Roles;
}
