import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class News {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('date')
  created_at: Date;

  @Column('varchar')
  title: string;

  @Column('text')
  content: string;

  @Column('varchar')
  image: string;

  @Column('varchar')
  category: string;

  @Column('varchar', {
    unique: true,
    nullable: false,
  })
  slug: string;

  @BeforeInsert()
  checkSlugInsert() {
    if (!this.slug) this.slug = this.title;

    this.slug = this.slug
      .toLowerCase()
      .replaceAll(' ', '_')
      .replaceAll("'", '');
  }

  @BeforeInsert()
  checkDate() {
    this.created_at = new Date();
  }

  @BeforeUpdate()
  checkSlugUpdate() {
    this.slug = this.slug
      .toLowerCase()
      .replaceAll(' ', '_')
      .replaceAll("'", '');
  }
}
