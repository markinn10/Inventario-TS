import crypto from "crypto";

export interface ICategory {
  id: string;
  nome: string;
  descricao: string;
  dataCriacao: Date;
}

export class Category implements ICategory {
  public id: string;
  public nome: string;
  public descricao: string;
  public dataCriacao: Date;

  constructor(nome: string, descricao: string) {
    this.id = crypto.randomUUID();
    this.nome = nome;
    this.descricao = descricao;
    this.dataCriacao = new Date();
  }
}
