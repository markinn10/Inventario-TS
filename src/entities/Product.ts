import {
    Entity, PrimaryGeneratedColumn, Column,
    CreateDateColumn, UpdateDateColumn,
    ManyToOne, JoinColumn
  } from "typeorm";
  import { Category } from "./Category";
  
  @Entity()
  export class Product {
    @PrimaryGeneratedColumn("uuid")
    id: string;
  
    @Column()
    nome: string;
  
    @Column()
    descricao: string;
  
    @Column("float")
    preco: number;
  
    @Column("int")
    quantidade: number;
  
    @ManyToOne(() => Category, categoria => categoria.produtos)
    @JoinColumn({ name: "categoriaId" })
    categoria: Category;
  
    @Column()
    categoriaId: string;
  
    @CreateDateColumn()
    dataCriacao: Date;
  
    @UpdateDateColumn()
    dataAtualizacao: Date;
  }
  