import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { MobileUsers } from "./MobileUsers";
import { Pharmacies } from "./Pharmacies";
import { UserAgreements } from "./UserAgreements";
import { UserApprovals } from "./UserApprovals";
import { UserRoles } from "./UserRoles";
import { UserTransactions } from "./UserTransactions";

@Entity("users", { schema: "kolayasistanusers" })
export class Users {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "username", length: 255 })
  username: string;

  @Column("varchar", { name: "email", length: 255 })
  email: string;

  @Column("varchar", { name: "password", length: 255 })
  password: string;


  @Column("enum", {
    name: "user_type",
    nullable: false,
    enum: ["Pharmacy", "BackOffice", "Mobile", "Companies", "Unknown"],
    default: "Unknown"
  })
  user_type: "Pharmacy" | "BackOffice" | "Mobile" | "Companies" | "Unknown";


  @Column("varchar", { name: "status", nullable: true, length: 255 })
  status: string | null;

  @Column("datetime", { name: "created_at", nullable: true })
  created_at: Date | null;

  @Column("varchar", { name: "created_by", nullable: true, length: 255 })
  created_by: string | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updated_at: Date | null;

  @Column("varchar", { name: "updated_by", nullable: true, length: 255 })
  updated_by: string | null;

  @OneToMany(() => MobileUsers, (mobileUsers) => mobileUsers.user)
  mobileUsers: MobileUsers[];

  @OneToMany(() => Pharmacies, (pharmacies) => pharmacies.user)
  pharmacies: Pharmacies[];

  @OneToMany(() => UserAgreements, (userAgreements) => userAgreements.user)
  userAgreements: UserAgreements[];

  @OneToMany(() => UserApprovals, (userApprovals) => userApprovals.user)
  userApprovals: UserApprovals[];

  @OneToMany(() => UserRoles, (userRoles) => userRoles.user)
  userRoles: UserRoles[];

  @OneToMany(
    () => UserTransactions,
    (userTransactions) => userTransactions.user
  )
  userTransactions: UserTransactions[];
}
