import { AppDataSource } from "./database/data-source";

AppDataSource.initialize()
  .then(() => {
    console.log("📦 Banco de dados conectado com sucesso!");
    // Aqui você pode chamar o menu principal ou testar inserções
  })
  .catch((error) => {
    console.error("❌ Erro ao conectar com o banco:", error);
  });
