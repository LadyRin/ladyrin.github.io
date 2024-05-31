export interface AppInfo {
  name: string
  icon: string
  args: any
}

export interface WindowInfo {
  id: number
  app: AppInfo
  title: string
  x: number
  y: number
  zIndex: number
  width: number
  height: number
  state: number
}

export const WindowState = {
  NORMAL: 0,
  MINIMIZED: 1,
  MAXIMIZED: 2
}
