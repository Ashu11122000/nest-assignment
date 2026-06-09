import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('files')
export class FileEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  publicId!: string;

  @Column()
  url!: string;

  @Column()
  originalName!: string;

  @CreateDateColumn()
  createdAt!: Date;
}
