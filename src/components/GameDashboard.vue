<template>
    <div class="dashboard">
        <div class="stat">
            <span>Moves: {{ moves }}</span>
            <span>Pairs: {{ matchedPairs }} / {{ totalPairs }}</span>
        </div>
        <div v-if="isGameOver" class="win">🎉 You win!</div>
        <div class="restart">
            <button @click="emit('restart-game')">Restart Game</button>
        </div>

    </div>
</template>

<script setup>
const props = defineProps({
    moves: {
        type: Number,
        required: true
    },
    matchedPairs: {
        type: Number,
        required: true
    },
    totalPairs: {
        type: Number,
        required: true
    },
    isGameOver: {
        type: Boolean,
        required: true
    }
})
const emit = defineEmits(['restart-game'])
</script>

<style lang="css" scoped>
.dashboard {
    font-size: 1.5rem;

    display: flex;
    justify-content: space-around;
    align-items: center;
}

.stat {
    display: flex;
    gap: 1.25rem;
}

.win {
    font-size: 2rem;
    color: greenyellow;
}

button {
    padding: 12px;
    background-color: gainsboro;
    border: none;
    border-radius: .5rem;
    cursor: pointer;
}
</style>