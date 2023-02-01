import { Timestamp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js';

let pedidosJSON = [
	{
		"cliente_id": "21819908402",
		"nome_cliente": "JOAO MENDES",
		"datapedido": "10/01/2023",
		"datatualizacao": Timestamp.now(),
		"valortot": 4.4,
		"sv": 1,
		"itens": [{
			"item_id": "4000003",
			"nome_item": "Café expresso grande",
			"qtd": 2,
			"valortot": 4.4,
			"sv": 1
		}]
	},
	{
		"cliente_id": "89578547110",
		"nome_cliente": "CARLOS SANTOS",
		"datapedido": "11/01/2023",
		"datatualizacao": Timestamp.now(),
		"valortot": 50.2,
		"sv": 1,
		"itens": [{
			"item_id": "1000005",
			"nome_item": "Peixe frito",
			"qtd": 1,
			"valortot": 48,
			"sv": 1
		},
		{
			"item_id": "4000003",
			"nome_item": "Café expresso grande",
			"qtd": 1,
			"valortot": 2.2,
			"sv": 1
		}]
	}
];


export function getDadosPedidos() {
	console.log(pedidosJSON);
	return pedidosJSON;
}  