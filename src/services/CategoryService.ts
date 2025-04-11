import { AppDataSource } from "../database/data-source";
import { Category } from "../entities/Category";
import { Repository } from "typeorm";

export class CategoryService {
  private repo: Repository<Category>;

  constructor() {
    this.repo = AppDataSource.getRepository(Category);
  }

  async criar(nome: string, descricao: string): Promise<Category> {
    const categoria = this.repo.create({ nome, descricao });
    return await this.repo.save(categoria);
  }

  async listar(): Promise<Category[]> {
    return await this.repo.find();
  }

  async buscarPorId(id: string): Promise<Category | null> {
    return await this.repo.findOneBy({ id });
  }

  async buscarPorNome(nome: string): Promise<Category[]> {
    return await this.repo
      .createQueryBuilder("categoria")
      .where("LOWER(categoria.nome) LIKE :nome", { nome: `%${nome.toLowerCase()}%` })
      .getMany();
  }

  async atualizar(id: string, nome: string, descricao: string): Promise<boolean> {
    const categoria = await this.repo.findOneBy({ id });
    if (!categoria) return false;

    categoria.nome = nome;
    categoria.descricao = descricao;
    await this.repo.save(categoria);
    return true;
  }

  async remover(id: string): Promise<boolean> {
    const resultado = await this.repo.delete(id);
    return resultado.affected !== 0;
  }
}

