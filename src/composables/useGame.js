import { ref, computed } from "vue";
import { baseCards } from "@/utils/baseCards";
import { shuffleCards } from "@/utils/shuffleCards";

export function useGame() {
  const cards = ref([]);
  const openedCards = ref([]);
  const moves = ref(0);

  const isBusy = ref(false);
  const matchedPairs = computed(() => {
    return cards.value.filter((card) => card.matched).length / 2;
  });
  const totalPairs = computed(() => {
    return cards.value.length / 2;
  });
  const isGameOver = computed(() => {
    return matchedPairs.value === totalPairs.value;
  });

  function handleCardClick(index) {
    if (isBusy.value) return;

    const card = cards.value[index];

    if (card.flipped || card.matched) return;

    card.flipped = true;

    openedCards.value.push(index);

    if (openedCards.value.length === 2) {
      isBusy.value = true;
      checkForMatch();
    }
  }

  function checkForMatch() {
    const [firstIndex, secondIndex] = openedCards.value;

    const firstCard = cards.value[firstIndex];
    const secondCard = cards.value[secondIndex];

    const isMatch = firstCard.name === secondCard.name;

    if (isMatch) {
      firstCard.matched = true;
      secondCard.matched = true;
      isBusy.value = false;
    } else {
      setTimeout(() => {
        firstCard.flipped = false;
        secondCard.flipped = false;
        isBusy.value = false;
      }, 800);
    }

    openedCards.value = [];
    moves.value++;
  }

  function initGame() {
    isBusy.value = false;
    moves.value = 0;
    openedCards.value = [];

    const preparedCards = baseCards.map((card) => ({
      ...card,
      flipped: false,
      matched: false,
    }));

    const doubledCards = [...preparedCards, ...preparedCards].map(
      (card, index) => ({ ...card, uid: index })
    );

    const shuffledCards = shuffleCards(doubledCards);

    cards.value = shuffledCards;
  }

  return {
    cards,
    openedCards,
    moves,
    isBusy,
    matchedPairs,
    totalPairs,
    isGameOver,
    handleCardClick,
    initGame,
  };
}
