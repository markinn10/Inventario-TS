import {
    Entity, PrimaryGeneratedColumn, Column,
    CreateDateColumn, OneToMany
  } from "typeorm";
  import { Product } from "./Product";
  
  @Entity()
  export class Category {
    @PrimaryGeneratedColumn("uuid")
    id: string;
  
    @Column()
    nome: string;
  
    @Column()
    descricao: string;
  
    @CreateDateColumn()
    dataCriacao: Date;
  
    @OneToMany(() => Product, product => product.categoria)
    produtos: Product[];
  }
  