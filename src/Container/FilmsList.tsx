import Capitao from "../Image/capitao.png";
import Disney from "../Image/disney.png";
import IronMan from "../Image/ironman.png";
import Marvel from "../Image/marvel.png";
import Thor from "../Image/thor.png";

const filmsList = [
  {
    id: 1,
    title: "Homem de Ferro",
    text: "Tony Stark (Robert Downey Jr.) é um industrial bilionário, que também é um brilhante inventor, ao ser sequestrado, ele é obrigado a construir uma arma devastadora, mas ao invés disso, cria uma armadura capaz de mudar a história.",
    image: IronMan,
    apparitions: [],
    disp: [Disney],
    note: 3,
  },
  {
    id: 3,
    title: "Thor",
    text: "Quando é banido do reino de Asgard e exilado na Terra, o arrogante guerreiro Thor (Chris Hemsworth) é obrigado a lutar para reaver seus poderes perdidos.",
    image: Thor,
    apparitions: [],
    disp: [Disney],
    note: 2,
  },
  {
    id: 4,
    title: "Capitão América",
    text: "Em Capitão América: O Primeiro Vingador, conhecemos a história de Steve Rogers (Chris Evans) e como ele se tornou o melhor soldado do mundo. ",
    image: Capitao,
    apparitions: [],
    disp: [Disney],
    note: 4,
  },
  {
    id: 5,
    title: "Capitã Marvel",
    text: "Capitã Marvel, parte do exército de elite dos Kree, uma raça alienígena, encontra-se no meio de uma batalha entre seu povo e os Skrulls. ",
    image: Marvel,
    apparitions: [],
    disp: [Disney],
    note: 4,
  },
];

export default filmsList;
