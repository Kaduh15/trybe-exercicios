const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

//? 2 - Crie um reducer, implementando um switch retornando apenas o estado inicial como default. Não se esqueça de colocar o reducer como parâmetro para o createStore, feito na etapa anterior.

//? 3 - Incremente o switch criado no exercício anterior com as actions NEXT_COLOR e PREVIOUS_COLOR. Essas actions devem alterar o valor index guardado no INITIAL_STATE. Atente-se aos limites de tamanho do array, as posições devem iniciar em 0 e não podem exceder a numeração do último item do array.

function criarCor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
      cor += oneChar[aleatorio()];
  }
  return cor;
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'NEXT_COLOR':
      return {
        ...state,
        index: state.index === state.colors.length - 1 ? 0 : state.index + 1,
      };
      break;
    case 'PREVIOUS_COLOR':
      return {
        ...state,
        index: state.index === 0 ? state.colors.length - 1 : state.index - 1,
      };
      break;
    case 'RANDOM_COLOR':
      return {
        ...state,
        colors: [...state.colors, criarCor()],
      };
      break;
    default:
      return state;
  }
}

//? 1 - Crie uma store para a nossa aplicação.

const store = Redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



//? 4 - Crie eventListeners que escutam os cliques de cada botão, o Previous color e o Next color, e realizam um dispatch com o respectivo action.type de cada.
const nextColorButton = document.querySelector("#next");
const previousColorButton = document.querySelector("#previous");
const randomColorButton = document.querySelector("#random");

nextColorButton.addEventListener("click", () => {
  store.dispatch({
    type: 'NEXT_COLOR'
  })
})
previousColorButton.addEventListener("click", () => {
  store.dispatch({
    type: 'PREVIOUS_COLOR'
  })
})
randomColorButton.addEventListener("click", () => {
  store.dispatch({
    type: 'RANDOM_COLOR'
  })
})

//? 5 - Faça o subscribe da store, alterando o innerHTML da tag com id value para a cor atual e o style do elemento com id container. Você deverá ser capaz de ver as cores mudando ao fundo, e o nome da cor exibida.

store.subscribe(() => {
  const {
    colors, index
  } = store.getState()
  document.querySelector("#value").textContent = colors[index];
  document.querySelector("#container").style.backgroundColor = colors[index];
  if (colors[index] !== 'white') {
    document.querySelector("#container > p").style.color = 'white'
  } else {
    document.querySelector("#container > p").style.color = 'black'
  }
});