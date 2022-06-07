import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn } from 'typeorm';
import Image from './ImagePost';

@Entity('post')
export default class Post {
    
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  title: string;


  @Column()
  text: string;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  @Column()
  link: string;
  
  @OneToMany(() => Image, image => image.post, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({name: 'post_id'}) 
  images_post: Image[];

}
