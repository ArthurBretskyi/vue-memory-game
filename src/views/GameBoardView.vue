<template>
    <div class="game_container">
        <h1 class="title">Memory Game</h1>
        <GameDashboard :moves="moves" :total-pairs="totalPairs" :matched-pairs="matchedPairs" :is-game-over="isGameOver"
            @restart-game="restartGame" />
        <div class="cards-list">
            <CardComponent v-for="(card, index) in cards" :key="card.id" :image="card.image" :is-flipped="card.flipped"
                :is-matched="card.matched" @card-click="handleCardClick(index)" />
        </div>
    </div>
</template>
<script setup>
import { useGame } from '@/composables/useGame';
import { onMounted } from 'vue';
import CardComponent from '@/components/CardComponent.vue'
import GameDashboard from '@/components/GameDashboard.vue';

const {
    cards,
    moves,
    totalPairs,
    matchedPairs,
    isGameOver,
    handleCardClick,
    initGame,
} = useGame()

onMounted(() => {
    initGame()
})

function restartGame() {
    initGame()
}
</script>

<style lang="css" scoped>
.game_container {
    display: flex;
    flex-direction: column;
    gap: 25px;
}

.title {
    font-size: 3rem;
    margin-bottom: 1.25rem;
    text-align: center;
    color: #fff;
}

.cards-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: .9375rem;

}
</style>