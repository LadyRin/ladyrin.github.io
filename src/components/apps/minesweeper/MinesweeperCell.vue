<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  revealed: boolean
  minesNearby: number
  isMine: boolean
  isFlagged: boolean
  x: number
  y: number
}>()

defineEmits(['reveal', 'flag'])

const visual = computed(() => {
  if (props.isFlagged) return '🚩'
  if (props.revealed) {
    if (props.isMine) return '💣'
    if (props.minesNearby === 0) return ''
    return props.minesNearby
  } else {
    return ''
  }
})
</script>

<template>
  <div
    class="minesweeper-cell"
    :class="{
      revealed: revealed,
      mine: isMine,
      one: minesNearby === 1,
      two: minesNearby === 2,
      three: minesNearby === 3,
      four: minesNearby === 4,
      five: minesNearby === 5,
      six: minesNearby === 6,
      seven: minesNearby === 7,
      eight: minesNearby === 8
    }"
    @click="$emit('reveal', { x: x, y: y })"
    @contextmenu.prevent="$emit('flag', { x: x, y: y })">
    {{ visual }}
  </div>
</template>

<style scoped lang="scss">
.minesweeper-cell {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  aspect-ratio: 1/1;
  border: 2px outset #999;
  background-color: #aaa;
  cursor: pointer;
  user-select: none;

  &:active {
    border: 2px inset #999;
  }

  &.revealed {
    background-color: #ccc;
    border: 2px inset #ddd;

    &:active {
      border: 2px inset #bbb;
      background-color: #c0c0c0;
    }
  }

  &.minesNearby {
    color: #000;
  }

  &.one {
    color: blue;
  }

  &.two {
    color: green;
  }

  &.three {
    color: red;
  }

  &.four {
    color: purple;
  }

  &.five {
    color: maroon;
  }

  &.six {
    color: turquoise;
  }

  &.seven {
    color: black;
  }

  &.eight {
    color: gray;
  }
}
</style>
