# Integrantes do Grupo

- Marcus Vinícius Cirqueira da Silva – UC23200964
- Yure Cardoso da Silva - UC2320053
- Vinicius Viana Rocha - UC23100480
- Gabriel Morais Resplandes Sirqueira - UC23102715
- Vilson Eduardo - UC23102145

## Projeto 1 – Inventário em memória (CLI)

Aplicação em linha de comando para gerenciamento de produtos e categorias com persistência em memória.

### Funcionalidades:
- CRUD de Categorias e Produtos
- Validação de integridade entre produtos e categorias
- Menu interativo com readline-sync
- Validação de dados do usuário
- Exibição formatada via `console.table`

---

## Projeto 2 – Inventário com TypeORM

(Será preenchido após implementação do TypeORM)

---

## Anotações e Estudos (TypeScript)

### Tipos básicos
- `string`, `number`, `boolean`, `Date`

### Tipos personalizados
```ts
type CategoriaId = string;
interface IProduto { nome: string; quantidade: number; }
