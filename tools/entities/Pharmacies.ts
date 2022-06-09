import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Users } from "./Users";

@Index("pharmacies_city_id_index", ["cityId"], {})
@Index("pharmacies_gln_no_index", ["glnNo"], {})
@Index("pharmacies_token_key_index", ["tokenKey"], {})
@Index("pharmacies_town_id_index", ["townId"], {})
@Index("pharmacies_user_id_index", ["userId"], {})
@Entity("pharmacies", { schema: "kolayasistanusers" })
export class Pharmacies {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "user_id" })
  userId: number;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("varchar", { name: "gln_no", length: 255 })
  glnNo: string;

  @Column("varchar", { name: "tax_office", nullable: true, length: 255 })
  taxOffice: string | null;

  @Column("varchar", { name: "reference", nullable: true, length: 255 })
  reference: string | null;

  @Column("text", { name: "address", nullable: true })
  address: string | null;

  @Column("varchar", { name: "phone", nullable: true, length: 255 })
  phone: string | null;

  @Column("varchar", { name: "mobile_phone", nullable: true, length: 255 })
  mobilePhone: string | null;

  @Column("int", { name: "city_id", nullable: true, unsigned: true })
  cityId: number | null;

  @Column("int", { name: "town_id", nullable: true, unsigned: true })
  townId: number | null;

  @Column("double", {
    name: "latitude",
    nullable: true,
    precision: 10,
    scale: 8,
  })
  latitude: number | null;

  @Column("double", {
    name: "longitude",
    nullable: true,
    precision: 10,
    scale: 8,
  })
  longitude: number | null;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("varchar", { name: "token_key", length: 10 })
  tokenKey: string;

  @Column("varchar", { name: "printer_brands", nullable: true, length: 255 })
  printerBrands: string | null;

  @Column("int", { name: "computer_count", default: () => "'1'" })
  computerCount: number;

  @Column("int", { name: "printer_count", default: () => "'1'" })
  printerCount: number;

  @Column("bigint", { name: "automation_app_id", unsigned: true })
  automationAppId: string;

  @Column("tinyint", {
    name: "receive_updates",
    width: 1,
    default: () => "'0'",
  })
  receiveUpdates: boolean;

  @Column("varchar", { name: "reference_code", nullable: true, length: 255 })
  referenceCode: string | null;

  @ManyToOne(() => Users, (users) => users.pharmacies, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: Users;
}
