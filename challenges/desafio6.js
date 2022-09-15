// Retorne o nome e as curtidas dos lanches que tiveram curtidas maiores que 10 e menores que 100

db.produtos.find(
  { curtidas: { $gt: 10, $lt: 100 } },
  { _id: 0, nome: 1, curtidas: 1 },
);
