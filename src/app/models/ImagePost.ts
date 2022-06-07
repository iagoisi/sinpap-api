import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import Post from './Post';

@Entity('images_post')
export default class ImagePost {
    
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  path: string;

  @ManyToOne(() => Post, post => post.images_post)
  @JoinColumn({ name: 'post_id' })
  post: Post;
}
