import readline from "readline-sync";
import { CategoryService } from "../services/CategoryService";
import { ProductService } from "../services/ProductService";

const categoryService = new CategoryService();
const productService = new ProductService(); // quando for refatorado com TypeORM

export async function categoriaMenu() {
  let sair = false;

  while (!sair) {
    console.clear();
    console.log("=== MENU DE CATEGORIAS ===");
    console.log("1. Criar categoria");
    console.log("2. Listar categorias");
    console.log("3. Buscar por ID");
    console.log("4. Buscar por nome");
    console.log("5. Atualizar categoria");
    console.log("6. Remover categoria");
    console.log("0. Voltar");
    const opcao = readline.question("Escolha uma opção: ");

    switch (opcao) {
      case "1":
        const nome = readline.question("Nome da categoria: ");
        const descricao = readline.question("Descrição: ");
        const nova = await categoryService.criar(nome, descricao);
        console.log("✅ Categoria criada:", nova);
        break;

      case "2":
        const todas = await categoryService.listar();
        console.table(todas);
        break;

      case "3":
        const idBusca = readline.question("ID: ");
        const encontrada = await categoryService.buscarPorId(idBusca);
        console.log(encontrada ?? "❌ Categoria não encontrada.");
        break;

      case "4":
        const nomeBusca = readline.question("Nome: ");
        const resultados = await categoryService.buscarPorNome(nomeBusca);
        console.table(resultados);
        break;

      case "5":
        const idAtualizar = readline.question("ID da categoria: ");
        const novoNome = readline.question("Novo nome: ");
        const novaDescricao = readline.question("Nova descrição: ");
        const atualizado = await categoryService.atualizar(idAtualizar, novoNome, novaDescricao);
        console.log(atualizado ? "✅ Atualizado com sucesso." : "❌ Categoria não encontrada.");
        break;

      case "6":
        const idRemover = readline.question("ID da categoria: ");

        if (await productService.verificarSeCategoriaTemProdutos(idRemover)) {
          console.log("❌ Não é possível remover: há produtos vinculados a essa categoria.");
          break;
        }

        const removido = await categoryService.remover(idRemover);
        console.log(removido ? "✅ Categoria removida." : "❌ Categoria não encontrada.");
        break;

      case "0":
        sair = true;
        break;

      default:
        console.log("Opção inválida.");
    }

    if (!sair) readline.question("\nPressione ENTER para continuar...");
  }
}
