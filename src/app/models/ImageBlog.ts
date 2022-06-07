import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import Blog from './Blog';

@Entity('images_blog')
export default class ImageBlog {
    
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  path: string;

  @ManyToOne(() => Blog, blog => blog.images_blog)
  @JoinColumn({ name: 'blog_id' })
  blog: Blog;
}
