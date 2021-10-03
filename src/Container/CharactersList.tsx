import HomemAranha from "../Image/aranha.png";
import Hulk from "../Image/hulk.png";
import Thanos from "../Image/thanos.png";
import Wanda from "../Image/wanda.png";

const charactersList = [
  {
    id: 1,
    title: "Homem-Aranha",
    text: "Após ser mordido por uma aranha radioativa, Peter Parker se torna o amigo da vizinhança, o Homem-Aranha.",
    image: HomemAranha,
    apparitions: [
      "Capitão América - Guerra Civil",
      "Vingadores - Guerra Infinita",
      "Vingadores - Ultimato",
      "Homem Aranha - Longe de casa",
      "Homem Aranha - De volta pra casa",
    ],
    disp: [],
    note: 5,
  },
  {
    id: 2,
    title: "Wanda Maximoff",
    text: "Wanda Maximoff foi sequestrada da Sérvia e trazida para a Montanha Wundagore, base do Alto Evolucionário. Durante anos, ela e seu irmão gêmeo, Pietro, acreditavam que eram filhos de um casal de ciganos.",
    image: Wanda,
    apparitions: [
      "Vingadores - Era de Ultron",
      "Capitão América - Guerra Civil",
      "Vingadores - Guerra Infinita",
      "Vingadores - Ultimato",
      "WandaVision",
    ],
    disp: [],
    note: 4,
  },
  {
    id: 3,
    title: "Thanos",
    text: "A lua Titã era governada por Mentor (A'Lars), quando então reinava paz e tecnologia. Mentor tinha dois filhos: Eros e Thanos.  Ao contrário do irmão, Thanos, era bem mais poderoso e almejava ainda mais.",
    image: Thanos,
    apparitions: [
      "Vingadores",
      "Guardões da Galáxia - vol. I",
      "Vingadores - Guerra Infinita",
      "Vingadores - Ultimato",
    ],
    disp: [],
    note: 5,
  },
  {
    id: 4,
    title: "Hulk",
    text: "Na história original dos quadrinhos, o Hulk é um selvagem e poderoso alter ego do Dr. Robert Bruce Banner, um cientista que foi atingido por raios gama enquanto salvava um adolescente durante o teste militar.",
    image: Hulk,
    apparitions: [
      "Vingadores",
      "Vingadores - Era de Ultron",
      "Thor - Ragnarok",
      "Vingadores - Guerra Infinita",
      "Vingadores - Ultimato",
    ],
    disp: [],
    note: 4,
  },
];

export default charactersList;
