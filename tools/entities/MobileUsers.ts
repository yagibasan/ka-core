import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Users } from './Users';

@Index('FL_MobileUser_UserId', ['userId'], {})
@Entity('mobile_users', { schema: 'kolayasistanusers' })
export class MobileUsers {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'user_id' })
  userId: number;

  @Column('varchar', { name: 'name', nullable: true, length: 255 })
  name: string | null;

  @Column('varchar', { name: 'lastname', nullable: true, length: 255 })
  lastname: string | null;

  @Column('date', { name: 'birth_day', nullable: true })
  birthDay: string | null;

  @Column('bigint', { name: 'identityno', nullable: true })
  identityno: string | null;

  @Column('varchar', { name: 'phone', nullable: true, length: 255 })
  phone: string | null;

  @Column('enum', { name: 'gender', nullable: true, enum: ['Erkek', 'Kadın'] })
  gender: 'Erkek' | 'Kadın' | null;

  @Column('decimal', {
    name: 'length',
    nullable: true,
    precision: 10,
    scale: 2,
  })
  length: string | null;

  @Column('decimal', {
    name: 'weight',
    nullable: true,
    precision: 10,
    scale: 2,
  })
  weight: string | null;

  @Column('varchar', { name: 'status', nullable: true, length: 255 })
  status: string | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Column('datetime', { name: 'last_login', nullable: true })
  lastLogin: Date | null;

  @Column('varchar', { name: 'profile_status', nullable: true, length: 255 })
  profileStatus: string | null;

  @Column('enum', {
    name: 'register_provider',
    nullable: true,
    enum: ['Facebook', 'Google', 'Email'],
    default: 'Email',
  })
  registerProvider: 'Facebook' | 'Google' | 'Email' | null;

  @ManyToOne(() => Users, (users) => users.mobileUsers, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: Users;
}
