import { watch, ref, type Ref } from 'vue'

export interface FSNode {
  name: string
  parent: FSNode | null
  nodeType: 'file' | 'directory'
  fileType: string
}

export class FSFile implements FSNode {
  name: string
  parent: FSNode | null = null
  nodeType = 'file' as const
  fileType = 'text'

  constructor(name: string, fileType: string) {
    this.name = name
    this.fileType = fileType
  }
}

export class FSHTMLFile extends FSFile {
  fileType = 'html'
  path: string

  constructor(name: string, path: string) {
    super(name, 'html')
    this.path = path
  }
}

export class FSVueFile extends FSFile {
  fileType = 'vue'
  path: string

  constructor(name: string, path: string) {
    super(name, 'vue')
    this.path = path
  }
}

export class FSDirectory implements FSNode {
  name: string
  children: FSNode[]
  parent: FSNode | null = null
  nodeType = 'directory' as const
  fileType = 'dir'

  constructor(name: string) {
    this.name = name
    this.children = []
  }

  addChild(component: FSNode): FSNode | null {
    if (this.children.find((child) => child.name === component.name)) {
      return null
    }

    this.children.push(component)
    component.parent = this
    return component
  }

  removeChild(component: FSNode): void {
    const index = this.children.indexOf(component)
    if (index !== -1) {
      this.children.splice(index, 1)
    }
  }
}

class FileSystem {
  root: FSDirectory

  constructor() {
    this.root = new FSDirectory('root')

    this.root.addChild(new FSDirectory('bin'))
    this.root.addChild(new FSDirectory('boot'))
    this.root.addChild(new FSDirectory('dev'))
    this.root.addChild(new FSDirectory('etc'))

    const home = this.root.addChild(new FSDirectory('home')) as FSDirectory
    const shark = home.addChild(new FSDirectory('shark')) as FSDirectory
    const desktop = shark.addChild(new FSDirectory('Desktop')) as FSDirectory
    const documents = shark.addChild(new FSDirectory('Documents')) as FSDirectory
    const projets = desktop.addChild(new FSDirectory('projets')) as FSDirectory

    desktop.addChild(new FSVueFile('À propos.html', 'AboutPage'))

    documents.addChild(new FSHTMLFile('Projets.html', 'content/projects.html'))
    documents.addChild(new FSHTMLFile('Contact.html', 'content/contact.html'))

    projets.addChild(new FSHTMLFile('3DSlicer.html', 'content/projects/3dslicer.html'))
    projets.addChild(new FSHTMLFile('E:cclesia.html', 'content/projects/ecclesia.html'))
    projets.addChild(new FSHTMLFile('Exactly Enough Items.html', 'content/projects/eei.html'))
    projets.addChild(new FSHTMLFile('SharkOS.html', 'content/projects/sharkos.html'))
    projets.addChild(new FSHTMLFile('Shift.html', 'content/projects/shift.html'))

    desktop.addChild(new FSFile('Console', 'console'))
    desktop.addChild(new FSFile('Welcome', 'welcome'))
    desktop.addChild(new FSFile('Settings', 'settings'))
  }
}

export const filesystem = new FileSystem()

export class FSExplorer {
  private fs = filesystem
  workingDirectory: Ref<FSDirectory>

  constructor() {
    console.log('Creating FSExplorer')
    this.workingDirectory = ref(this.fs.root)

    watch(this.workingDirectory, (newDir) => {
      console.log('Working directory changed to:', newDir)
    })
  }

  get pathToWorkingDirectory(): FSDirectory[] {
    const path: FSDirectory[] = []
    let component = this.workingDirectory.value
    while (component) {
      path.unshift(component)
      component = component.parent as FSDirectory
    }
    return path
  }

  pwd(): string {
    let path = ''
    let component: FSNode | null = this.workingDirectory.value
    while (component) {
      path = `${component.name}/${path}`
      component = component.parent
    }
    return path
  }

  ls(): string[] {
    return this.workingDirectory.value.children.map(
      (child) => child.name + (child.nodeType === 'directory' ? '/' : '')
    )
  }

  mkdir(name: string): string {
    const result = this.workingDirectory.value.addChild(new FSDirectory(name))
    if (result === null) {
      return `mkdir: cannot create directory '${name}': File exists`
    }
    return `mkdir: created directory '${name}'`
  }

  cd(path: string): this {
    if (path === '/' || path === 'root') {
      this.workingDirectory.value = this.fs.root
      return this
    }

    if (path.startsWith('/')) {
      this.workingDirectory.value = this.fs.root
      path = path.substring(1)
    }

    const pathComponents = path.split('/')
    const component: Ref<FSNode> = this.workingDirectory
    for (const pathComponent of pathComponents) {
      if (pathComponent === '..') {
        component.value = component.value.parent ?? component.value
      } else {
        component.value =
          (component as Ref<FSDirectory>).value.children.find(
            (child) => child.name === pathComponent
          ) ?? component.value
      }
    }
    this.workingDirectory.value = component.value as FSDirectory
    return this
  }

  getFile(path: string): FSFile | null {
    const pathComponents = path.split('/')
    let component: FSNode = this.workingDirectory.value
    for (const pathComponent of pathComponents) {
      if (pathComponent === '..') {
        component = component.parent ?? component
      } else {
        component =
          (component as FSDirectory).children.find((child) => child.name === pathComponent) ||
          component
      }
    }
    return component.nodeType === 'file' ? (component as FSFile) : null
  }

  getFullPathOfNode(node: FSNode): string {
    let path = ''
    let component: FSNode | null = node
    while (component) {
      path = `${component.name}/${path}`
      component = component.parent
    }
    return path.slice(0, -1).replace('root/', '/')
  }
}
