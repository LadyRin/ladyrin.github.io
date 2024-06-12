<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import MinesweeperCell from '@/components/apps/minesweeper/MinesweeperCell.vue'

const props = defineProps<{
  rows: number
  cols: number
  numMines: number
}>()

defineEmits(['end'])

const mines = ref<boolean[][]>([])
const revealedCells = ref<boolean[][]>([])
const flags = ref<boolean[][]>([])
const loaded = ref(false)
const gameLost = ref(false)

const isMineHere = (x: number, y: number): boolean => {
  if (x < 0 || y < 0 || x >= props.cols || y >= props.rows) return false
  return mines.value[y][x]
}

const minesNearby = (x: number, y: number): number => {
  const neighbors = [
    [x - 1, y - 1],
    [x, y - 1],
    [x + 1, y - 1],
    [x - 1, y],
    [x + 1, y],
    [x - 1, y + 1],
    [x, y + 1],
    [x + 1, y + 1]
  ]
  return neighbors.filter(([nx, ny]) => isMineHere(nx, ny)).length
}

const reveal = (x: number, y: number): void => {
  if (x < 0 || y < 0 || x >= props.cols || y >= props.rows) {
    return
  }

  if (isFlagged(x, y)) {
    return
  }

  revealedCells.value[y][x] = true
  if (isMineHere(x, y)) {
    gameLost.value = true
    revealAll()
    return
  }

  if (minesNearby(x, y) === 0) {
    const neighbors = [
      [x - 1, y - 1],
      [x, y - 1],
      [x + 1, y - 1],
      [x - 1, y],
      [x + 1, y],
      [x - 1, y + 1],
      [x, y + 1],
      [x + 1, y + 1]
    ]
    neighbors.forEach(([nx, ny]) => {
      if (nx < 0 || ny < 0 || nx >= props.cols || ny >= props.rows) return
      try {
        if (!revealedCells.value[ny][nx]) {
          reveal(nx, ny)
        }
      } catch (e) {
        console.log('error', nx, ny, e)
      }
    })
  }
}
const revealAll = (): void => {
  revealedCells.value = revealedCells.value.map((row) => row.map(() => true))
}

const flag = (x: number, y: number): void => {
  if (x < 0 || y < 0 || x >= props.cols || y >= props.rows) return
  if (revealedCells.value[y][x]) return
  flags.value[y][x] = !flags.value[y][x]
}

const isRevealed = (x: number, y: number): boolean => {
  if (x < 0 || y < 0 || x >= props.cols || y >= props.rows) return false
  return revealedCells.value[y][x]
}

const isFlagged = (x: number, y: number): boolean => {
  if (x < 0 || y < 0 || x >= props.cols || y >= props.rows) return false
  return flags.value[y][x]
}

const isGameWon = computed(() => {
  let unrevealedCount = 0
  revealedCells.value.forEach((row) => {
    row.forEach((cell) => {
      if (!cell) {
        unrevealedCount++
      }
    })
  })
  return unrevealedCount === props.numMines
})

const placeMines = (): void => {
  mines.value = Array.from({ length: props.rows }, () =>
    Array.from({ length: props.cols }, () => false)
  )

  let minesPlaced = 0
  while (minesPlaced < props.numMines) {
    const x = Math.floor(Math.random() * props.cols)
    const y = Math.floor(Math.random() * props.rows)
    if (!mines.value[y][x] && x !== 0 && y !== 0) {
      mines.value[y][x] = true
      minesPlaced++
    }
  }
}

onMounted(() => {
  placeMines()
  revealedCells.value = Array.from({ length: props.cols }, () =>
    Array.from({ length: props.rows }, () => false)
  )
  flags.value = Array.from({ length: props.cols }, () =>
    Array.from({ length: props.rows }, () => false)
  )
  loaded.value = true
})
</script>

<template>
  <div class="minesweeper-board" v-if="loaded">
    <div v-for="(n, y) in props.rows" :key="y" class="minesweeper-row">
      <MinesweeperCell
        v-for="(n, x) in props.cols"
        :key="x"
        :x="x"
        :y="y"
        :revealed="isRevealed(x, y)"
        :minesNearby="minesNearby(x, y)"
        :isMine="isMineHere(x, y)"
        :isFlagged="isFlagged(x, y)"
        @reveal="reveal(x, y)"
        @flag="flag(x, y)" />
    </div>
    <div class="results" v-if="gameLost || isGameWon">
      <h3 v-if="gameLost">Game over</h3>
      <h3 v-else-if="isGameWon">You won!</h3>
      <button @click="$emit('end')">Back to menu</button>
    </div>
    <div class="results" v-else>
      <h3>Flags left: {{ props.numMines - flags.flat().filter((f) => f).length }}</h3>
    </div>
  </div>
</template>

<style scoped lang="scss">
.minesweeper-board {
  background-color: #f0f0f0;
}

.minesweeper-row {
  display: flex;
}

.minesweeper-cell {
  width: 25px;
  height: 25px;
  border: 1px solid #ccc;
  background-color: #ddd;
  display: flex;
  justify-content: center;
  align-items: center;

  &.revealed {
    background-color: #fff;
  }
}

.results {
  margin-top: 20px;
  height: 100px;
  text-align: center;
}
</style>
