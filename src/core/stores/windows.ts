import { WindowState, type App, type Window } from '@/types'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { FSNode } from '@/core/filesystem'

let lastId = 0
export const useWindowStore = defineStore('windows', () => {
  const windows = ref<Window[]>([])

  function launchApp(app: App, node?: FSNode) {
    const id = lastId++
    const { x, y } = calculateNextPosition()
    const window: Window = {
      id,
      app,
      title: app.name,
      x,
      y,
      zIndex: 0,
      width: 800,
      height: 600,
      state: WindowState.NORMAL,
      args: node
    }
    windows.value.push(window)
    placeOnTop(window)
  }

  function launchAppAt(app: App, x: number, y: number) {
    const id = lastId++
    const window: Window = {
      id,
      app,
      title: app.name,
      x,
      y,
      zIndex: 0,
      width: 800,
      height: 600,
      state: WindowState.NORMAL,
      args: null
    }
    windows.value.push(window)
    placeOnTop(window)
  }

  function calculateNextPosition() {
    const length = windows.value.length
    const x = 100 + length * 20
    const y = 100 + length * 20
    return { x, y }
  }

  function placeOnTop(window: Window) {
    const maxZIndex = Math.max(...windows.value.map((w) => w.zIndex))
    window.zIndex = maxZIndex + 1
  }

  function killApp(window: Window) {
    const index = windows.value.indexOf(window)
    windows.value.splice(index, 1)
  }

  function killWithId(id: number) {
    const window = windows.value.find((w) => w.id === id)
    if (window) {
      killApp(window)
    }
  }

  function maximize(window: Window) {
    if (window.state === WindowState.MAXIMIZED) {
      window.state = WindowState.NORMAL
    } else {
      window.state = WindowState.MAXIMIZED
    }
  }

  function minimize(window: Window) {
    if (window.state === WindowState.MINIMIZED) {
      window.state = WindowState.NORMAL
    } else {
      window.state = WindowState.MINIMIZED
    }
  }

  return {
    windows,
    launchApp,
    launchAppAt,
    killApp,
    killWithId,
    placeOnTop,
    maximize,
    minimize
  }
})
