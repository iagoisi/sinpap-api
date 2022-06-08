import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from 'typeorm';

@Entity('permissions')
export default class Permission {
    
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;


  @Column()
  descripition: string;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

}
