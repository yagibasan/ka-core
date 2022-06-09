import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserAgreements } from './UserAgreements';

@Entity('agreements', { schema: 'kolayasistanusers' })
export class Agreements {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'content', nullable: true, length: 255 })
  content: string | null;

  @Column('bit', { name: 'required', nullable: true })
  required: boolean | null;

  @Column('varchar', { name: 'status', nullable: true, length: 255 })
  status: string | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Column('varchar', { name: 'created_by', nullable: true, length: 255 })
  createdBy: string | null;

  @Column('varchar', { name: 'updated_by', nullable: true, length: 255 })
  updatedBy: string | null;

  @OneToMany(() => UserAgreements, (userAgreements) => userAgreements.agreement)
  userAgreements: UserAgreements[];
}
