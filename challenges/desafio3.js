// Retorne o lanche mais vendido, mostrando apenas o nome e a quantidade do lanche mais vendido

db.produtos
.find({}, { _id: 0, nome: 1, vendidos: 1 })
.sort({ vendidos: -1 })
.limit(1);
