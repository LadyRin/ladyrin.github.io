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
    :class="{ revealed: revealed, mine: isMine }"
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
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
  cursor: pointer;
  user-select: none;
  font-size: 20px;
}
</style>
