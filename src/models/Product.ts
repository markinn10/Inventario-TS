import crypto from "crypto";

export interface IProduct {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  quantidade: number;
  categoriaId: string;
  dataCriacao: Date;
  dataAtualizacao: Date;
}

export class Product implements IProduct {
  public id: string;
  public nome: string;
  public descricao: string;
  public preco: number;
  public quantidade: number;
  public categoriaId: string;
  public dataCriacao: Date;
  public dataAtualizacao: Date;

  constructor(
    nome: string,
    descricao: string,
    preco: number,
    quantidade: number,
    categoriaId: string
  ) {
    this.id = crypto.randomUUID();
    this.nome = nome;
    this.descricao = descricao;
    this.preco = preco;
    this.quantidade = quantidade;
    this.categoriaId = categoriaId;
    this.dataCriacao = new Date();
    this.dataAtualizacao = new Date();
  }
}
