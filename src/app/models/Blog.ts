import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn } from 'typeorm';
import Image from './ImageBlog';



@Entity('blog')
export default class Blog {
    
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  titulo: string;


  @Column()
  texto: string;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;
  
  @OneToMany(() => Image, image => image.blog, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({name: 'blog_id'}) 
  images_blog: Image[];

}
