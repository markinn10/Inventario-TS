import { Product } from "../models/Product";

export class ProductService {
  private produtos: Product[] = [];

  criar(
    nome: string,
    descricao: string,
    preco: number,
    quantidade: number,
    categoriaId: string
  ): Product {
    const novo = new Product(nome, descricao, preco, quantidade, categoriaId);
    this.produtos.push(novo);
    return novo;
  }

  listar(): Product[] {
    return this.produtos;
  }

  buscarPorId(id: string): Product | undefined {
    return this.produtos.find(prod => prod.id === id);
  }

  buscarPorNome(nome: string): Product[] {
    return this.produtos.filter(prod =>
      prod.nome.toLowerCase().includes(nome.toLowerCase())
    );
  }

  buscarPorCategoria(categoriaId: string): Product[] {
    return this.produtos.filter(prod => prod.categoriaId === categoriaId);
  }

  atualizar(
    id: string,
    nome: string,
    descricao: string,
    preco: number,
    quantidade: number
  ): boolean {
    const produto = this.buscarPorId(id);
    if (!produto) return false;

    produto.nome = nome;
    produto.descricao = descricao;
    produto.preco = preco;
    produto.quantidade = quantidade;
    produto.dataAtualizacao = new Date();
    return true;
  }

  remover(id: string): boolean {
    const index = this.produtos.findIndex(prod => prod.id === id);
    if (index === -1) return false;

    this.produtos.splice(index, 1);
    return true;
  }

  verificarSeCategoriaTemProdutos(categoriaId: string): boolean {
    return this.produtos.some(prod => prod.categoriaId === categoriaId);
  }
}
