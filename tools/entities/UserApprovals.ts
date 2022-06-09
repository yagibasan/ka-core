import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Users } from "./Users";

@Index("UserId", ["userId"], {})
@Entity("user_approvals", { schema: "kolayasistanusers" })
export class UserApprovals {
  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  id: number;

  @Column("int", { name: "user_id" })
  userId: number;

  @Column("varchar", { name: "activation_code", nullable: true, length: 255 })
  activationCode: string | null;

  @Column("datetime", { name: "expiration_at", nullable: true })
  expirationAt: Date | null;

  @Column("varchar", { name: "status", nullable: true, length: 255 })
  status: string | null;

  @Column("datetime", { name: "approved_at", nullable: true })
  approvedAt: Date | null;

  @Column("varchar", { name: "id_address", nullable: true, length: 255 })
  idAddress: string | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @ManyToOne(() => Users, (users) => users.userApprovals, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: Users;
}
