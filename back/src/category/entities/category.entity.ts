import { Column, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Language } from '../../language/entities/language.entity';

export class Category {
  @PrimaryGeneratedColumn()
  id?: number;
  @Column()
  title: string;
  @OneToOne(() => Language)
  @JoinColumn()
  language: Language;
}
