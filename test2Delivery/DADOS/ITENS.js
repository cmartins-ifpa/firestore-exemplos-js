let itensJSON = [{
    "codigo": "1000001",
    "nome": "Filé com fritas",
    "composicao": "200g Filé, arroz, batatas fritas",
    "categoria": "Prato Executivo",
    "preco": 40,
    "sv": 1
}, {
    "codigo": "1000002",
    "nome": "Arroz Carreteiro",
    "composicao": "Arroz, charque",
    "categoria": "Prato Executivo",
    "preco": 30,
    "sv": 1
}, {
    "codigo": "1000003",
    "nome": "Risoto de frango",
    "composicao": "Arroz, 200g de frango",
    "categoria": "Prato Executivo",
    "preco": 45,
    "sv": 1
}, {
    "codigo": "1000004",
    "nome": "Camarão Especial",
    "composicao": "100g camarão frito ao alho, azeite",
    "categoria": "Prato Executivo",
    "preco": 60,
    "sv": 1
}, {
    "codigo": "1000005",
    "nome": "Peixe frito",
    "composicao": "200g filé de pescada, arroz, purê",
    "categoria": "Prato Executivo",
    "preco": 48,
    "sv": 1
}, {
    "codigo": "2000002",
    "nome": "Calabresa",
    "composicao": "Massa média, calabresa, queijo",
    "categoria": "Pizza",
    "preco": 50,
    "sv": 1
}, {
    "codigo": "2000003",
    "nome": "Portuguesa",
    "composicao": "Massa média, ovos, azeitona, queijo mussarela, cebola",
    "categoria": "Pizza",
    "preco": 50,
    "sv": 1
}, {
    "codigo": "2000004",
    "nome": "Paraense",
    "composicao": "Massa média, camarões, jambu",
    "categoria": "Pizza",
    "preco": 56,
    "sv": 1
}, {
    "codigo": "2000005",
    "nome": "Frango com catupiry",
    "composicao": "Massa média, peito de frango desfiado, queijo, creme catupiry",
    "categoria": "Pizza",
    "preco": 45,
    "sv": 1
}, {
    "codigo": "2000006",
    "nome": "Mussarela",
    "composicao": "Massa média, queijo mussarela, calabresa",
    "categoria": "Pizza",
    "preco": 35,
    "sv": 1
}, {
    "codigo": "2000007",
    "nome": "Napolitana",
    "composicao": "Massa média, oregano, tomate, queijo, calabresa",
    "categoria": "Pizza",
    "preco": 50,
    "sv": 1
}, {
    "codigo": "2000008",
    "nome": "Quatro queijos",
    "composicao": "Massa média, queijos: mussarela, gorgonzola, jung, ricota",
    "categoria": "Pizza",
    "preco": 55,
    "sv": 1
}, {
    "codigo": "2000009",
    "nome": "Atum com cebola",
    "composicao": "Massa fina, atum, queijo, cebola",
    "categoria": "Pizza",
    "preco": 50,
    "sv": 1
}, {
    "codigo": "2000001",
    "nome": "Marguerita",
    "composicao": "Massa fina",
    "categoria": "Pizza",
    "preco": 50,
    "sv": 1
}, {
    "codigo": "3000001",
    "nome": "Pudim de Leite",
    "composicao": "Leite, ovos, leite condensado",
    "categoria": "Sobremesa",
    "preco": 7,
    "sv": 1
}, {
    "codigo": "3000002",
    "nome": "Musse de chocolate",
    "composicao": "Taça de musse",
    "categoria": "Sobremesa",
    "preco": 9,
    "sv": 1
}, {
    "codigo": "3000003",
    "nome": "Bolo comum",
    "composicao": "Fatia de bolo ",
    "categoria": "Sobremesa",
    "preco": 5,
    "sv": 1
}, {
    "codigo": "4000001",
    "nome": "Refrigerante Coca Light",
    "composicao": "Lata 300",
    "categoria": "Bebida",
    "preco": 4,
    "sv": 1
}, {
    "codigo": "4000002",
    "nome": "Café expresso pequeno",
    "composicao": "xicara de café – 100ml",
    "categoria": "Bebida",
    "preco": 3,
    "sv": 1
}, {
    "codigo": "4000003",
    "nome": "Café expresso grande",
    "composicao": "xicara de café – 200ml",
    "categoria": "Bebida",
    "preco": 5,
    "sv": 1
}, {
    "codigo": "4000004",
    "nome": "Água (copo)",
    "composicao": "copo de água mineral 200ml",
    "categoria": "Bebida",
    "preco": 2,
    "sv": 1
}
];
let bordasJSON = [{
    "idborda": "b01",
    "borda": "Requeijão ",
    "preco ": 5
}, {
    "idborda": "b02",
    "borda": "Cheddar ",
    "preco ": 6
}, {
    "idborda": "b03",
    "borda": "Cream Cheese ",
    "preco ": 5
}, {
    "idborda": "b04",
    "borda": "Catupiry ",
    "preco ": 7
}
];

function getDadosItens() {
    console.log(itensJSON);
    return itensJSON;
}  


function getDadosBordas() {
    console.log(bordasJSON);
    return bordasJSON;
}  