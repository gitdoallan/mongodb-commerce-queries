// Retorne o nome de todos os lanches que possuam calorias abaixo de 500

db.produtos.find(
  { "valoresNutricionais.0.quantidade": { $lt: 500 } },
  { _id: 0, nome: 1 },
);
