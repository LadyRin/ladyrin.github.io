<script setup lang="ts">
import MinesweeperBoard from '@/components/apps/minesweeper/MinesweeperBoard.vue'
import { ref } from 'vue'

const playing = ref(false)
const rows = ref(0)
const cols = ref(0)
const numMines = ref(0)

const startGame = (_rows: number, _cols: number, _numMines: number) => {
  rows.value = _rows
  cols.value = _cols
  numMines.value = _numMines
  playing.value = true
}

const endGame = () => {
  playing.value = false
}
</script>

<template>
  <div class="minesweeper-app">
    <template v-if="!playing">
      <h1>Choose a difficulty:</h1>
      <button @click="startGame(10, 10, 10)">Easy 10x10 (10 mines)</button>
      <button @click="startGame(15, 15, 30)">Medium 15x15 (30 mines)</button>
      <button @click="startGame(20, 20, 75)">Hard 20x20 (75 mines)</button>
      <button @click="startGame(30, 30, 200)">Insane 30x30 (200 mines)</button>
    </template>
    <template v-else>
      <MinesweeperBoard :rows="rows" :cols="cols" :numMines="numMines" @end="endGame" />
    </template>
  </div>
</template>

<style scoped lang="scss">
.minesweeper-app {
  background-color: #414141c3;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
}

button {
  margin: 10px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  background-color: #007bff;
  color: white;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    background-color: #004286;
  }
}
</style>
