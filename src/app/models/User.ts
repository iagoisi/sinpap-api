import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate, CreateDateColumn, UpdateDateColumn } from 'typeorm';

import bcrypt from 'bcryptjs';

@Entity('users')
export default class User {
    
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  @Column()
  id_perito: number;


  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8);
  }

}
