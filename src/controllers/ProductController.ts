import readline from "readline-sync";
import { ProductService } from "../services/ProductService";
import { CategoryService } from "../services/CategoryService";

const productService = new ProductService();
const categoryService = new CategoryService(); // Aqui deveria ser compartilhado globalmente se for em produção

export function produtoMenu() {
  let sair = false;

  while (!sair) {
    console.clear();
    console.log("=== MENU DE PRODUTOS ===");
    console.log("1. Criar produto");
    console.log("2. Listar produtos");
    console.log("3. Buscar por ID");
    console.log("4. Buscar por nome");
    console.log("5. Buscar por categoria");
    console.log("6. Atualizar produto");
    console.log("7. Remover produto");
    console.log("0. Voltar");
    const opcao = readline.question("Escolha uma opção: ");

    switch (opcao) {
      case "1":
        const nome = readline.question("Nome do produto: ");
        const descricao = readline.question("Descrição: ");
        const preco = parseFloat(readline.question("Preço: "));
        const quantidade = parseInt(readline.question("Quantidade: "));

        const categorias = categoryService.listar();
        if (categorias.length === 0) {
          console.log("Nenhuma categoria disponível. Crie uma categoria antes.");
          break;
        }

        console.log("\nCategorias disponíveis:");
        categorias.forEach(cat => {
          console.log(`- ${cat.nome} (ID: ${cat.id})`);
        });

        const categoriaId = readline.question("\nID da categoria: ");
        if (!categoryService.buscarPorId(categoriaId)) {
          console.log("Categoria não encontrada!");
          break;
        }

        const novo = productService.criar(
          nome,
          descricao,
          preco,
          quantidade,
          categoriaId
        );
        console.log("Produto criado:", novo);
        break;

      case "2":
        console.table(productService.listar());
        break;

      case "3":
        const idBusca = readline.question("ID do produto: ");
        console.log(productService.buscarPorId(idBusca) ?? "Não encontrado.");
        break;

      case "4":
        const nomeBusca = readline.question("Nome: ");
        console.table(productService.buscarPorNome(nomeBusca));
        break;

      case "5":
        const idCat = readline.question("ID da categoria: ");
        console.table(productService.buscarPorCategoria(idCat));
        break;

        case "6":
            const idAtualizar = readline.question("ID do produto: ");
            const novoNome = readline.question("Novo nome: ");
            const novaDesc = readline.question("Nova descrição: ");
            const novoPreco = parseFloat(readline.question("Novo preço: "));
            const novaQtd = parseInt(readline.question("Nova quantidade: "));
          
            const atualizado = productService.atualizar(
              idAtualizar,
              novoNome,
              novaDesc,
              novoPreco,
              novaQtd
            );
            console.log(atualizado ? "Atualizado!" : "Produto não encontrado.");
            break;
          
    

      case "7":
        const idRemover = readline.question("ID do produto: ");
        const removido = productService.remover(idRemover);
        console.log(removido ? "Removido com sucesso." : "Produto não encontrado.");
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
