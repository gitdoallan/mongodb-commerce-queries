// Retorne o nome de todos os lanches que tenham o percentual de proteínas maior ou igual a 30 e menor ou igual a 40

db.produtos.find(
  { $and: [{ "valoresNutricionais.percentual": { $gte: 30 } }, { "valoresNutricionais.percentual": { $lte: 40 } }] },
  { _id: 0, nome: 1 },
);
