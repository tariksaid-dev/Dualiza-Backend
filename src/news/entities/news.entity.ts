import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class News {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('time')
  created_at: string;

  @Column('varchar')
  title: string;

  @Column('text')
  content: string;

  @Column('varchar')
  image: string;

  @Column('varchar')
  category: string;
}
