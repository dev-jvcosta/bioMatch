// Dados do Jogo: Pares das cartas (com imagem) e descrições com os cartões de curiosidade
const cardPairs = [
  {
    image:{
      title: "Cultura de Aspergillus flavius em Âgar",
      src: "../../assets/images/img01.jpeg",
    },
    description: {
      title: "Aspergillus que produz toxinas perigosas e cresce com cor verde-amarelada. Colônia após 7 dias de crescimento a 25°C em ágar Czapek Yeast Extract",
      fact: "Aspergillus flavus é conhecido por produzir aflatoxinas, potentes toxinas que podem contaminar alimentos como amendoim e milho, representando riscos significativos à saúde humana.",
    },
  },
  {
    image:{
      title: "Colônia de Aspergillus niger",
      src: "../../assets/images/img02.jpeg",
    },
    description: {
      title: "Colônia escura de Aspergillus Niger, usada na produção de ácido cítrico para alimentos e bebidas. Imagem exemplar do Aspergillus crescendo em placa de ágar, mostrando o formato da colônia.",
      fact: "Aspergillus niger é amplamente utilizado na indústria para a produção de ácido cítrico, um aditivo alimentar comum encontrado em refrigerantes e doces",
    },
  },
  {
    image:{
      title: "Tosse persistente",
      src: "../../assets/images/img03.jpeg",
    },
    description: {
      title: " É um sintoma comum na aspergilose pulmonar. Em alguns casos, a aspergilose crônica pode formar uma “bola fúngica” nos pulmões, chamada aspergiloma.",
      fact: "A tosse persistente é um dos sintomas mais comuns da aspergilose pulmonar, especialmente em pacientes com sistema imunológico comprometido.",
    },
  },
  {
    image:{
      title: "Máscara N95",
      src: "../../assets/images/img04.jpeg",
    },
    description: {
      title: "Meio de prevenção indispensável ambientes hospitalares e em locais com alto risco de exposição. O uso de máscara ajuda a prevenir a inalação de esporos de Aspergillus.",
      fact: "As máscaras N95, também conhecidas como PFF2 no Brasil, são projetadas para filtrar pelo menos 95% das partículas suspensas no ar, incluindo esporos de fungos como os do gênero Aspergillus. Seu uso é altamente recomendado em ambientes hospitalares e locais com alto risco de exposição a agentes infecciosos",
    },
  },
  {
    image:{
      title: "Tomografia com Nódulos Pulmonares",
      src: "../../assets/images/img05.jpeg",
    },
    description: {
      title: " Método de diagnóstico essencial para identificar, com precisão, alterações pulmonares em casos de aspergilose pulmonar.",
      fact: "A tomografia pode revelar o “sinal do halo” — uma imagem característica de infecção fúngica invasiva nos pulmões.",
    },
  },
  {
    image:{
      title: "Desumificador de ar",
      src: "../../assets/images/img06.jpeg",
    },
    description: {
      title: "Usado na prevenção de fungos, como o Aspergillus, por reduzir a umidade e dificultar sua proliferação.",
      fact: "Ambientes com alta umidade favorecem o crescimento de fungos como os do gênero Aspergillus. O uso de desumidificadores ajuda a manter a umidade relativa do ar em níveis adequados, prevenindo a proliferação desses microrganismos.",
    },
  },
  {
    image:{
      title: "Febre",
      src: "../../assets/images/img07.jpeg",
    },
    description: {
      title: "A febre é um sintoma frequente e pode ser um sinal de infecção fúngica invasiva.",
      fact: "Na aspergilose invasiva, a febre pode persistir mesmo com o uso de antibióticos, indicando infecção fúngica.",
    },
  },
  {
    image:{
      title: "Aspegillus Fumigatus",
      src: "../../assets/images/img09.jpeg",
    },
    description: {
      title: "Espécie que causa infecções pulmonares graves, especialmente em pacientes imunocomprometidos.",
      fact: "A fumigatus é tão pequeno que seus esporos conseguem chegar facilmente aos alvéolos pulmonares humanos",
    },
  },
  {
    image:{
      title: "Cultura e Microscopia de Aspergillus terreus",
      src: "../../assets/images/img10.jpeg",
    },
    description: {
      title: "Aspergillus terreus é capaz de produzir ácido itacônico, um metabólito com aplicações industriais, como na fabricação de plásticos e produtos farmacêuticos.",
      fact: "Aspergillus terreus é notório por sua resistência intrínseca à anfotericina B, um antifúngico comumente utilizado, o que torna o tratamento de infecções por essa espécie mais desafiador.",
    },
  },
  {
    image:{
      title: "Microscopia direta",
      src: "../../assets/images/img11.jpeg",
    },
    description: {
      title: "Visualização microscópica de hifas septadas e ramificadas, características (típicas de Aspergillus). A microscopia direta de amostras respiratórias pode revelar hifas septadas com ramificação em ângulo agudo, indicativas de Aspergillus spp.",
      fact: "O diagnóstico precoce via microscopia é essencial, pois Aspergillus pode invadir vasos sanguíneos e causar necrose tecidual se não tratado rapidamente.",
    },
  },
  {
    image:{
      title: "Reação alérgica: Aspergilose broncopulmonar alérgica (ABPA)",
      src: "../../assets/images/img12.jpeg",
    },
    description: {
      title: "A ABPA é uma resposta imune exagerada ao Aspergillus que causa inflamação nos brônquios, comum em pessoas com asma ou fibrose cística.",
      fact: "A ABPA pode causar produção de grandes tampões de muco com filamentos fúngicos, e é frequentemente confundida com crises de asma mal controladas.",
    },
  },
];

 // Criando Variaveis de estado do jogo
    let gameBoard = [];
    let flippedCards = [];
    let matchedPairs = 0;
    let currentPlayer = 1;
    let player1Score = 0;
    let player2Score = 0;
    let gameStarted = false;
    let startTime;
    let timerInterval;
    let firstCard = null;