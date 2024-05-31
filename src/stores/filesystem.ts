import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFileSystemStore = defineStore('filesystem', () => {
  const root = ref(new FSDirectory('root'))

  return { root }
})

export class FSExplorer {
  private fs = useFileSystemStore()
  private currentDirectory: FSDirectory

  constructor() {
    this.currentDirectory = this.fs.root
  }

  get root(): FSDirectory {
    return this.fs.root
  }

  get workingDirectory(): FSDirectory {
    return this.currentDirectory
  }

  pwd(): string {
    let path = ''
    let component: FSComponent | null = this.workingDirectory
    while (component) {
      path = `${component.name}/${path}`
      component = component.parent
    }
    return path
  }

  ls(): string[] {
    return this.workingDirectory.children.map(
      (child) => child.name + (child.type === 'directory' ? '/' : '')
    )
  }

  mkdir(name: string): string {
    const result = this.workingDirectory.addChild(new FSDirectory(name))
    if (result === null) {
      return `mkdir: cannot create directory '${name}': File exists`
    }
    return `mkdir: created directory '${name}'`
  }
}

export interface FSComponent {
  name: string
  parent: FSComponent | null
  type: 'file' | 'directory'
}

export class FSFile implements FSComponent {
  name: string
  pathToContent: string
  content: string
  parent: FSComponent | null = null
  iconPath: string
  type = 'file' as const

  constructor(name: string, pathToContent: string, iconPath: string) {
    this.name = name
    this.pathToContent = pathToContent
    this.content = ''
    this.iconPath = iconPath
  }

  async loadContent(): Promise<void> {
    const response = await fetch(this.pathToContent)
    this.content = await response.text()
  }
}

export class FSDirectory implements FSComponent {
  name: string
  children: FSComponent[]
  parent: FSComponent | null = null
  type = 'directory' as const

  constructor(name: string) {
    this.name = name
    this.children = []
  }

  addChild(component: FSComponent): FSComponent | null {
    if (this.children.find((child) => child.name === component.name)) {
      return null
    }

    this.children.push(component)
    component.parent = this
    return component
  }

  removeChild(component: FSComponent): void {
    const index = this.children.indexOf(component)
    if (index !== -1) {
      this.children.splice(index, 1)
    }
  }
}
