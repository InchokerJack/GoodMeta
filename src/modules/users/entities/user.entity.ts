import { Column, Entity, Index, ObjectIdColumn, Unique, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@Unique(['email', 'password'])
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  @Index({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  walletAddress: string;

  @Column()
  role: string;
}
