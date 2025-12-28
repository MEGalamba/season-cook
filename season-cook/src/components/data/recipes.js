const recipes = [
  {
    id: 1,
    title: "Sopa de Abóbora",
    season: "Outono",
    time: 30,
    image: "https://blog.raizs.com.br/oboofekr/2024/10/como-fazer-abobora.jpg",
    ingredients: [
      {
        foodId: 1,
        name: "Abóbora",
        quantity: 500,
        unit: "g",
      },
      {
        foodId: 2,
        name: "Cebola",
        quantity: 1,
        unit: "unidade",
      },
      {
        foodId: 3,
        name: "Sal",
        quantity: null,
        unit: "q.b.",
      },
    ],
    instructions: [
      "Cortar a abóbora em cubos",
      "Refogar a cebola e o alho",
      "Adicionar a abóbora e água",
      "Cozer durante 20 minutos",
      "Triturar até ficar cremosa",
    ],
  },
];

export default recipes;
