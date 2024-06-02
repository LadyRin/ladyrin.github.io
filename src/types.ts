export interface App {
  name: string
  icon: string
  component: any
}

export interface Window {
  id: number
  app: App
  title: string
  x: number
  y: number
  zIndex: number
  width: number
  height: number
  state: number
  args: any
}

export const WindowState = {
  NORMAL: 0,
  MINIMIZED: 1,
  MAXIMIZED: 2
}

export const FiletypeIcons: Record<string, string> = {
  text: 'text-html.svg',
  html: 'text-html.svg',
  vue: 'text-html.svg',
  dir: 'folder-cyan.svg',
  console: 'console.svg',
  welcome: 'info.svg',
  settings: 'settings.svg'
}

export interface CommandLog {
  command: string
  output: string
  number: number
}

export interface Command {
  name: string
  description: string
  callback: (args: string[]) => string
}

export interface Language {
  name: string
  text: string
  color: string
  percent: number
  seconds: number
}
