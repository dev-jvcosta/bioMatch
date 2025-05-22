// Dados do Jogo: Pares das cartas (com imagem) e descrições com os cartões de curiosidade
const cardPairs = [
  {
    image:{
      title: "Cultura de Aspergillus flavius em Âgar",
      src: "../../assets/images/img01.jpeg",
    },
    description:{
      title: "Aspergillus que produz toxinas perigosas e cresce com cor verde-amarelada. Colônia após 7 dias de crescimento a 25°C em ágar Czapek Yeast Extract",
      fact: "Aspergillus flavus é conhecido por produzir aflatoxinas, potentes toxinas que podem contaminar alimentos como amendoim e milho, representando riscos significativos à saúde humana.",
    },
  },
  {
    image:{
      title: "Colônia de Aspergillus niger",
      src: "../../assets/images/img02.jpeg",
    },
    description:{
      title: "Colônia escura de Aspergillus Niger, usada na produção de ácido cítrico para alimentos e bebidas. Imagem exemplar do Aspergillus crescendo em placa de ágar, mostrando o formato da colônia.",
      fact: "Aspergillus niger é amplamente utilizado na indústria para a produção de ácido cítrico, um aditivo alimentar comum encontrado em refrigerantes e doces",
    },
  },
  {
    image:{
      title: "Tosse persistente",
      src: "../../assets/images/img03.jpeg",
    },
    description:{
      title: " É um sintoma comum na aspergilose pulmonar. Em alguns casos, a aspergilose crônica pode formar uma “bola fúngica” nos pulmões, chamada aspergiloma.",
      fact: "A tosse persistente é um dos sintomas mais comuns da aspergilose pulmonar, especialmente em pacientes com sistema imunológico comprometido.",
    },
  },
  {
    image:{
      title: "Máscara N95",
      src: "../../assets/images/img04.jpeg",
    },
    description:{
      title: "Meio de prevenção indispensável ambientes hospitalares e em locais com alto risco de exposição. O uso de máscara ajuda a prevenir a inalação de esporos de Aspergillus.",
      fact: "As máscaras N95, também conhecidas como PFF2 no Brasil, são projetadas para filtrar pelo menos 95% das partículas suspensas no ar, incluindo esporos de fungos como os do gênero Aspergillus. Seu uso é altamente recomendado em ambientes hospitalares e locais com alto risco de exposição a agentes infecciosos",
    },
  },
  {
    image:{
      title: "Tomografia com Nódulos Pulmonares",
      src: "../../assets/images/img05.jpeg",
    },
    description:{
      title: " Método de diagnóstico essencial para identificar, com precisão, alterações pulmonares em casos de aspergilose pulmonar.",
      fact: "A tomografia pode revelar o “sinal do halo” — uma imagem característica de infecção fúngica invasiva nos pulmões.",
    },
  },
  {
    image:{
      title: "Desumificador de ar",
      src: "../../assets/images/img06.jpeg",
    },
    description:{
      title: "Usado na prevenção de fungos, como o Aspergillus, por reduzir a umidade e dificultar sua proliferação.",
      fact: "Ambientes com alta umidade favorecem o crescimento de fungos como os do gênero Aspergillus. O uso de desumidificadores ajuda a manter a umidade relativa do ar em níveis adequados, prevenindo a proliferação desses microrganismos.",
    },
  },
  {
    image:{
      title: "Febre",
      src: "../../assets/images/img07.jpeg",
    },
    description:{
      title: "A febre é um sintoma frequente e pode ser um sinal de infecção fúngica invasiva.",
      fact: "Na aspergilose invasiva, a febre pode persistir mesmo com o uso de antibióticos, indicando infecção fúngica.",
    },
  },
  {
    image:{
      title: "Aspegillus Fumigatus",
      src: "../../assets/images/img09.jpeg",
    },
    description:{
      title: "Espécie que causa infecções pulmonares graves, especialmente em pacientes imunocomprometidos.",
      fact: "A fumigatus é tão pequeno que seus esporos conseguem chegar facilmente aos alvéolos pulmonares humanos",
    },
  },
  {
    image:{
      title: "Cultura e Microscopia de Aspergillus terreus",
      src: "../../assets/images/img10.jpeg",
    },
    description:{
      title: "Aspergillus terreus é capaz de produzir ácido itacônico, um metabólito com aplicações industriais, como na fabricação de plásticos e produtos farmacêuticos.",
      fact: "Aspergillus terreus é notório por sua resistência intrínseca à anfotericina B, um antifúngico comumente utilizado, o que torna o tratamento de infecções por essa espécie mais desafiador.",
    },
  },
  {
    image:{
      title: "Microscopia direta",
      src: "../../assets/images/img11.jpeg",
    },
    description:{
      title: "Visualização microscópica de hifas septadas e ramificadas, características (típicas de Aspergillus). A microscopia direta de amostras respiratórias pode revelar hifas septadas com ramificação em ângulo agudo, indicativas de Aspergillus spp.",
      fact: "O diagnóstico precoce via microscopia é essencial, pois Aspergillus pode invadir vasos sanguíneos e causar necrose tecidual se não tratado rapidamente.",
    },
  },
  {
    image:{
      title: "Aspergilose broncopulmonar alérgica (ABPA)",
      src: "../../assets/images/img12.jpeg",
    },
    description:{
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

    // Váriaveis de estado do jogo para modal de seleção de temporizador
    let selectedGameDuration = 0; // Duração total do jogo em segundos
    let timeRemaining = 0;        // Tempo restante em segundos para a contagem regressiva

    // Elementos do DOM
    const gameBoardElement = document.getElementById('game-board');
    const player1ScoreElement = document.getElementById('player1-score');
    const player2ScoreElement = document.getElementById('player2-score');
    const player1ActiveIndicator = document.getElementById('player1-active');
    const player2ActiveIndicator = document.getElementById('player2-active');
    const timerElement = document.getElementById('timer');
    const startButton = document.getElementById('start-btn');
    const resetButton = document.getElementById('reset-btn');
    const winnerModal = document.getElementById('winner-modal');
    const winnerTitle = document.getElementById('winner-title');
    const winnerMessage = document.getElementById('winner-message');
    const playAgainButton = document.getElementById('play-again-btn');
    const factModal = document.getElementById('fact-modal');
    const factTitle = document.getElementById('fact-title');
    const factImage = document.getElementById('fact-image');
    const factContent = document.getElementById('fact-content');
    const closeFactButton = document.getElementById('close-fact-btn');
    const matchSoundEffect = document.getElementById('match-sound-effect');

    // Novos elementos DOM para modal de seleção de temporizador
    const timerSelectModal = document.getElementById('timer-select-modal');
    const timer1MinButton = document.getElementById('timer-1min');
    const timer3MinButton = document.getElementById('timer-3min');
    const timer5MinButton = document.getElementById('timer-5min');
    const cancelTimerSelectButton = document.getElementById('cancel-timer-select-btn');
    
    // Initialize the game
    // Configura o tabuleiro do jogo (cria e embaralha as cartas)
    function setupGameBoard() {
        const allCards = [];
        cardPairs.forEach((pair, index) => {
            allCards.push({
                type: 'image',
                pairId: index,
                title: pair.image.title,
                content: pair.image.src,
                fact: pair.description.fact
            });
            allCards.push({
                type: 'description',
                pairId: index,
                title: '', // O título da frente da carta de descrição é 'Descrição'
                content: pair.description.title, // Corrigido para usar pair.description.title
                fact: pair.description.fact
            });
        });

        gameBoard = shuffleArray(allCards);
        gameBoardElement.innerHTML = ''; // Limpa o tabuleiro antes de adicionar novas cartas

        gameBoard.forEach((card, index) => {
            const cardElement = document.createElement('div');
            cardElement.className = 'card'; // Classes de altura responsiva podem ser adicionadas aqui ou no CSS
            cardElement.dataset.index = index;
            
            const cardInner = document.createElement('div');
            cardInner.className = 'card-inner';
            
            const cardFront = document.createElement('div');
            cardFront.className = 'card-front flex flex-col items-center justify-center p-2'; // Adicionado p-2
            
            const cardIcon = document.createElement('i');
            if (card.type === 'image') {
                cardIcon.className = 'fas fa-microscope text-3xl sm:text-4xl mb-1 sm:mb-2';
            } else {
                cardIcon.className = 'fas fa-align-left text-3xl sm:text-4xl mb-1 sm:mb-2';
            }
            
            const cardTitle = document.createElement('div');
            cardTitle.className = 'font-bold text-xs sm:text-sm text-center';
            cardTitle.textContent = card.type === 'image' ? card.title : 'Descrição';
            
            cardFront.appendChild(cardIcon);
            cardFront.appendChild(cardTitle);
            
            const cardBack = document.createElement('div');
            cardBack.className = 'card-back p-2'; // Adicionado p-2
            
            if (card.type === 'image') {
                const img = document.createElement('img');
                img.src = card.content;
                img.alt = card.title;
                img.className = 'card-image mb-1 sm:mb-2'; // Ajustado margin
                cardBack.appendChild(img);
                
                const imgTitle = document.createElement('div');
                imgTitle.className = 'font-bold text-xs sm:text-sm text-center';
                imgTitle.textContent = card.title;
                cardBack.appendChild(imgTitle);
            } else {
                const descText = document.createElement('div');
                descText.className = 'text-xs sm:text-sm text-gray-700 overflow-auto h-full'; // h-full para ocupar espaço
                descText.textContent = card.content;
                cardBack.appendChild(descText);
            }
            
            cardInner.appendChild(cardFront);
            cardInner.appendChild(cardBack);
            cardElement.appendChild(cardInner);
            
            cardElement.addEventListener('click', () => handleCardClick(cardElement, index));
            
            gameBoardElement.appendChild(cardElement);
        });
        gameBoardElement.style.pointerEvents = 'none'; // Começa desabilitado
    }

    // Embaralha um array usando o algoritmo Fisher-Yates
    function shuffleArray(array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }

    // Verifica se o jogador pode clicar na carta
    function handleCardClick(cardElement, index) {
        if (!gameStarted || cardElement.classList.contains('flipped') || cardElement.classList.contains('matched')) {
            return;
        }
        
        const card = gameBoard[index];
        

        // Gira a carta
        cardElement.classList.add('flipped');
        flippedCards.push({ element: cardElement, index, card });

        // Se for a primeira carta da vez, apenas lembre-a
        if (flippedCards.length === 1) {
            firstCard = { element: cardElement, index, card };
            return;
        }
   
        // Verifica se combinam as cartas
        const secondCard = { element: cardElement, index, card };
        checkForMatch(firstCard, secondCard);
    }

    // Checa se as cartas combinam
    function checkForMatch(card1, card2) {

        // Desativa clicks enquanto processa
        gameBoardElement.style.pointerEvents = 'none';

        // verifica se as cartas pertencem ao mesmo par
        if (card1.card.pairId === card2.card.pairId && card1.card.type !== card2.card.type) {
            // TOCAR O SOM DE MATCH
            if(matchSoundEffect){
              matchSoundEffect.currentTime = 0; // Reinicia o som para o início, caso seja tocado rapidamente em sequência
              matchSoundEffect.play().catch(error =>{
                //Autoplay foi bloqueado ou outro erro qualquer
                // É possível logar o erro ou lidar com ele, mas geralmente para sons em resposta a cliques não há problemas.
                console.log("Erro ao tocar o som de match:", error);
              });
            }

            // Encontra o par de cartas para marcar como combinadas
            matchedPairs++;

            // Atualiza o placar
            if (currentPlayer === 1) {
                player1Score++;
                player1ScoreElement.textContent = player1Score;
            } else {
                player2Score++;
                player2ScoreElement.textContent = player2Score;
            }

            // Marca as cartas como combinadas
            setTimeout(() => {
                card1.element.classList.add('matched');
                card2.element.classList.add('matched');

                // Mostra o modal de curiosidade
                showFactModal(card1.card);

                // Desvira as cartas
                flippedCards = [];
                firstCard = null;

                // Verifica se o jogo acabou
                if (matchedPairs === cardPairs.length) {
                    endGame();
                } else {

                    // reabilita os cliques
                    gameBoardElement.style.pointerEvents = 'auto';
                }
            }, 500);
        } else {

            // Sem partida - desvira as cartas
            setTimeout(() => {
                card1.element.classList.remove('flipped');
                card2.element.classList.remove('flipped');

                // Desvira as cartas
                flippedCards = [];
                firstCard = null;
                

                // Troca de jogador
                currentPlayer = currentPlayer === 1 ? 2 : 1;
                updatePlayerIndicators();
                

                // Reabilita os cliques
                gameBoardElement.style.pointerEvents = 'auto';
            }, 1000);
        }
    }

    // Mostra o modal de curiosidade
    function showFactModal(card) {
        factTitle.textContent = card.type === 'image' ? card.title : 'Did You Know?';
        
        if (card.type === 'image') {
            factImage.src = card.content;
            factImage.alt = card.title;
            factImage.style.display = 'block';
        } else {
            factImage.style.display = 'none';
        }
        
        factContent.textContent = card.fact;
        factModal.classList.remove('hidden');
    }

    // Atualiza o turno dos indicadores de jogador
    function updatePlayerIndicators() {
        if (currentPlayer === 1) {
            player1ActiveIndicator.classList.remove('hidden');
            player2ActiveIndicator.classList.add('hidden');
        } else {
            player1ActiveIndicator.classList.add('hidden');
            player2ActiveIndicator.classList.remove('hidden');
        }
    }

    // Nova inicialização do jogo com seleção de temporizador e inicia o jogo
    function actuallyStartGame() {
        gameStarted = true;
        // startButton.disabled = true; // Já foi desabilitado
        startButton.textContent = 'Jogo em Progresso';

        updatePlayerIndicators(); // Garante que o jogador 1 comece

        // Inicia o timer de contagem regressiva
        timerInterval = setInterval(countdownTick, 1000);
        
        // Habilita cliques no tabuleiro
        gameBoardElement.style.pointerEvents = 'auto';
    }

    // Atualiza o temporizador exibido por uma contagem regressiva
    function countdownTick() {
        timeRemaining--;
        updateTimerDisplay(timeRemaining);

        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            gameStarted = false;
            gameBoardElement.style.pointerEvents = 'none';
            endGame(true); // Passa true para indicar que o tempo esgotou
        }
    }

    // Termina o jogo
    function endGame(timeRanOut = false) {
        clearInterval(timerInterval);
        gameStarted = false; // Jogo terminou
        gameBoardElement.style.pointerEvents = 'none'; // Desabilita o tabuleiro
        // Não precisa reabilitar startButton aqui, pois o playAgainButton no modal fará o reset
        // ou o usuário pode clicar em "Reset" manualmente.
        // startButton.disabled = false; // Será habilitado por resetGame
        // startButton.textContent = 'Start Game';

        let winnerText = '';
        let messageDetail = '';
        const finalTimeFormatted = timerElement.textContent; // Tempo que aparece no display

        if (timeRanOut) {
            winnerTitle.textContent = 'Tempo Esgotado!';
            if (player1Score > player2Score) {
                winnerText = 'Jogador 1 venceu por pontos!';
            } else if (player2Score > player1Score) {
                winnerText = 'Jogador 2 venceu por pontos!';
            } else { // Empate nos pontos
                if (player1Score === 0 && player2Score === 0) { // Ninguém pontuou
                    winnerText = "Empate! Nenhum jogador pontuou.";
                } else { // Empate com pontos
                    winnerText = "Empate por pontos!";
                }
            }
            messageDetail = `Pontuação: Jogador 1 - ${player1Score}, Jogador 2 - ${player2Score}.`;
        } else { // Jogo terminado por completar os pares
            winnerTitle.textContent = 'Jogo Concluído!';
            if (player1Score > player2Score) {
                winnerText = 'Jogador 1 venceu!';
            } else if (player2Score > player1Score) {
                winnerText = 'Jogador 2 venceu!';
            } else { // Empate, mesmo completando todos os pares (ambos fizeram a mesma quantidade de pontos)
                winnerText = "Empate!";
            }
            // Calcula o tempo que levou
            let timeTakenSeconds = selectedGameDuration - timeRemaining;
            if (timeTakenSeconds < 0) timeTakenSeconds = selectedGameDuration; // Caso o timeRemaining não tenha sido atualizado a tempo

            const minutesTaken = Math.floor(timeTakenSeconds / 60).toString().padStart(2, '0');
            const secondsTaken = (timeTakenSeconds % 60).toString().padStart(2, '0');
            messageDetail = `Pontuação: Jogador 1 - ${player1Score}, Jogador 2 - ${player2Score}. Tempo: ${minutesTaken}:${secondsTaken}.`;
        }

        winnerMessage.textContent = `${winnerText} ${messageDetail}`;
        winnerModal.classList.remove('hidden');
    }

    // Reinicia o Jogo
    function resetGame() {
    clearInterval(timerInterval);

    winnerModal.classList.add('hidden');
    factModal.classList.add('hidden');
    timerSelectModal.classList.add('hidden'); // Esconder modal de tempo também

    // Reset game state variables
    gameStarted = false;
    matchedPairs = 0;
    currentPlayer = 1;
    player1Score = 0;
    player2Score = 0;
    selectedGameDuration = 0;
    timeRemaining = 0;
    flippedCards = [];
    firstCard = null;

    player1ScoreElement.textContent = '0';
    player2ScoreElement.textContent = '0';
    updatePlayerIndicators();

    timerElement.textContent = '00:00';
    startButton.textContent = 'Start Game';
    startButton.disabled = false;

    setupGameBoard(); // Configura o tabuleiro com novas cartas
    // gameBoardElement.style.pointerEvents = 'none'; // Já é feito em setupGameBoard
    }

    function handleTimerSelection(durationInSeconds) {
      selectedGameDuration = durationInSeconds;
      timeRemaining = durationInSeconds;
      updateTimerDisplay(timeRemaining); // Atualiza o display do timer para o tempo escolhido
      timerSelectModal.classList.add('hidden');
      actuallyStartGame(); // Função que realmente inicia o jogo
    }

    // Update timer display (para contagem regressiva ou apenas mostrar tempo)
    function updateTimerDisplay(seconds) {
        const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
        const secs = (seconds % 60).toString().padStart(2, '0');
        timerElement.textContent = `${minutes}:${secs}`;
    }

    timer1MinButton.addEventListener('click', () => handleTimerSelection(parseInt(timer1MinButton.dataset.time)));
    timer3MinButton.addEventListener('click', () => handleTimerSelection(parseInt(timer3MinButton.dataset.time)));
    timer5MinButton.addEventListener('click', () => handleTimerSelection(parseInt(timer5MinButton.dataset.time)));

    cancelTimerSelectButton.addEventListener('click', () => {
        timerSelectModal.classList.add('hidden');
        startButton.disabled = false; // Reabilita o botão "Start Game" se o usuário cancelar
    });

    // Agentes dos Eventos
    startButton.addEventListener('click', () => {
    if (gameStarted) return; // Se o jogo já começou, não faz nada

    // O resetGame() já terá sido chamado no playAgain ou no carregamento inicial.
    // AQUI o tabuleiro já está pronto e embaralhado.
    timerSelectModal.classList.remove('hidden');
    startButton.disabled = true; // Desabilita o botão "Start Game" enquanto o modal está aberto
    });

    resetButton.addEventListener('click', resetGame);

    playAgainButton.addEventListener('click', () => {
    winnerModal.classList.add('hidden');
    resetGame(); // Chama resetGame que prepara tudo para um novo "Start Game"
    });

    closeFactButton.addEventListener('click', () => {
        factModal.classList.add('hidden');
        // Re-enable clicks
        gameBoardElement.style.pointerEvents = 'auto';
    });

    // Inicializa o jogo na página de carregamento
    document.addEventListener('DOMContentLoaded', () => {
    resetGame(setupGameBoard()); // Chama resetGame para configurar o estado inicial corretamente
    });

    // Inicializa o carregamento da página
    
