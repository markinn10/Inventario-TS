import readline from "readline-sync";
import { categoriaMenu } from "../controllers/CategoryController";
import { produtoMenu } from "../controllers/ProductController";

export function mainMenu() {
  while (true) {
    console.clear();
    console.log("===== SISTEMA DE INVENTÁRIO =====");
    console.log("1. Gerenciar Categorias");
    console.log("2. Gerenciar Produtos");
    console.log("0. Sair");
    const option = readline.question("Escolha uma opção: ");

    switch (option) {
      case '1':
        categoriaMenu();
        break;
      case '2':
        produtoMenu();
        break;
      case '0':
        console.log("Saindo...");
        process.exit(0);
      default:
        console.log("Opção inválida.");
        readline.question("Pressione Enter para continuar...");
    }
  }
}
