<template>
  <div class="app__container">
    <GameBoardView />
  </div>
</template>
<script setup>
import GameBoardView from './views/GameBoardView.vue';
</script>

<style lang="css">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  background-color: #0d0d11;
  font-family: "Poppins";
  font-weight: 300;
  color: #fff;
  height: 100vh;
}

[class*="__container"] {
  max-width: 1000px;
  margin: 0 auto;
  padding: 15px 15px;
}
</style>
