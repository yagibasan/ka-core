import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Agreements } from "./Agreements";
import { Users } from "./Users";

@Index("fk_user_agreements_agreement_id", ["agreementId"], {})
@Index("UserId", ["userId"], {})
@Entity("user_agreements", { schema: "kolayasistanusers" })
export class UserAgreements {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "user_id" })
  userId: number;

  @Column("int", { name: "agreement_id" })
  agreementId: number;

  @Column("datetime", { name: "approve_at" })
  approveAt: Date;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("varchar", { name: "ip_address", length: 255 })
  ipAddress: string;

  @ManyToOne(() => Agreements, (agreements) => agreements.userAgreements, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "agreement_id", referencedColumnName: "id" }])
  agreement: Agreements;

  @ManyToOne(() => Users, (users) => users.userAgreements, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: Users;
}
