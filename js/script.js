const dicas = [
    "Crie uma rotina: Estabeleça um horário fixo para estudar e siga-o consistentemente para tornar o ato um hábito.",
    "Ambiente: Escolha um local com boa iluminação e livre de distrações, como TV ou celular. Evite estudar na cama, pois pode causar sono.",
    "Planeje: Use um cronograma para organizar matérias e horários. Anote os compromissos fixos para visualizar os períodos livres. ",
    "Estude",
    "deixe de ser um panaca",
    "Vô lá saber"
]

const botao = document.querySelector(`#botao`);
const dica = document.querySelector(`#dica`);

function gerarDica(){
    const indiceAleatorio = Math.floor(Math.random() * dicas.length);
    dica.innerText = dicas[indiceAleatorio];
};

botao.addEventListener('click', gerarDica);