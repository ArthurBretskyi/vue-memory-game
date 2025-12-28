<template>
    <div class="card" :class="{ flipped: isFlipped, matched: isMatched }" role="button" tabindex="0"
        @click="emit('card-click')">
        <img :src="image" alt="card image" />
    </div>
</template>
  

<script setup>
const props = defineProps({
    image: {
        type: String,
        required: false
    },
    isFlipped: {
        type: Boolean,
        required: true
    },
    isMatched: {
        type: Boolean,
        required: true
    }
})
const emit = defineEmits(['card-click'])
</script>

<style lang="css" scoped>
.card {
    width: 120px;
    height: 160px;

    background-color: #ccc;
    border: 1px solid #fff;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    transition:
        transform 0.3s ease,
        box-shadow 0.3s ease,
        background-color 0.3s ease;
}

.card img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    opacity: 0;
    transition: opacity 0.3s ease;

    pointer-events: none;
}

.card.flipped {
    background-color: transparent;
}

.card.flipped img {
    opacity: 1;
}

.card.matched {
    border: 2px solid green;
    cursor: default;
    pointer-events: none;
    box-shadow: none;
}
</style>    