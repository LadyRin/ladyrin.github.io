export interface FileSystemComponent {
    getName(): string;
    getType(): string;
    getParent(): FileSystemComponent | null;
    setParent(parent: FileSystemComponent): void;
}

export class FSFile implements FileSystemComponent {
    private name: string;
    private pathToContent: string;
    private content: string;
    private parent : FileSystemComponent | null = null;
    private iconPath: string;

    constructor(name: string, pathToContent: string, iconPath: string) {
        this.name = name;
        this.pathToContent = pathToContent;
        this.content = '';
        this.iconPath = iconPath;
    }

    async loadContent(): Promise<void> {
        const response = await fetch(this.pathToContent);
        this.content = await response.text();
    }

    getName(): string {
        return this.name;
    }

    getType(): string {
        return 'file';
    }

    getParent(): FileSystemComponent | null {
        return this.parent;
    }

    getIconPath(): string {
        return this.iconPath;
    }

    getContent(): string {
        return this.content;
    }

    setParent(parent: FileSystemComponent): void {
        this.parent = parent;
    }
}

export class FSDirectory implements FileSystemComponent {
    private name: string;
    private children: FileSystemComponent[];
    private parent : FileSystemComponent | null = null;

    constructor(name: string) {
        this.name = name;
        this.children = [];
    }

    getName(): string {
        return this.name;
    }

    addChild(component: FileSystemComponent): FileSystemComponent | null {
        if(this.children.find(child => child.getName() === component.getName())) {
            return null;
        }

        this.children.push(component);
        component.setParent(this);
        return component;
    }

    removeChild(component: FileSystemComponent): void {
        const index = this.children.indexOf(component);
        if (index !== -1) {
            this.children.splice(index, 1);
        }
    }

    getChildren(): FileSystemComponent[] {
        return this.children;
    }

    getType(): string {
        return 'directory';
    }

    getParent(): FileSystemComponent | null {
        return this.parent;
    }

    setParent(parent: FileSystemComponent): void {
        this.parent = parent;
    }
}

export class FileSystem {
    private static instance: FileSystem;
    private root: FileSystemComponent;

    private constructor() {
        this.root = new FSDirectory('');
        const rootDir = this.root as FSDirectory;
        rootDir.addChild(new FSDirectory('bin'));
        rootDir.addChild(new FSDirectory('etc'));
        const homeDir = rootDir.addChild(new FSDirectory('home')) as FSDirectory;
        rootDir.addChild(new FSDirectory('lib'));
        rootDir.addChild(new FSDirectory('usr'));
        rootDir.addChild(new FSDirectory('var'));

        const userDir = homeDir.addChild(new FSDirectory('user')) as FSDirectory;
        const desktop = userDir.addChild(new FSDirectory('Desktop')) as FSDirectory;
        desktop.addChild(new FSFile('À propos.html', 'content/about.html', 'text-html.svg'));
        desktop.addChild(new FSDirectory('projets'));
    }

    static getInstance(): FileSystem{
        if (!FileSystem.instance) {
            FileSystem.instance = new FileSystem();
        }
        return FileSystem.instance;
    }

    getRoot(): FileSystemComponent {
        return this.root;
    }
}

export class FileSystemExplorer {
    private fileSystem: FileSystem;
    private workingDirectory: FileSystemComponent;

    constructor() {
        this.fileSystem = FileSystem.getInstance();
        this.workingDirectory = this.fileSystem.getRoot();
    }

    getFileSystem(): FileSystem {
        return this.fileSystem;
    }

    getWorkingDirectory(): FileSystemComponent {
        return this.workingDirectory;
    }

    pwd(): string {
        let path = '';
        let component: FileSystemComponent | null = this.workingDirectory;
        while (component) {
            path = `${component.getName()}/${path}`;
            component = component.getParent();
        }
        return path;
    }

    ls(): string[] {
        return (this.workingDirectory as FSDirectory).getChildren().map(child => child.getName() + (child.getType() === 'directory' ? '/' : ''));
    }

    mkdir(name: string): string {
        const result = (this.workingDirectory as FSDirectory).addChild(new FSDirectory(name));
        if (result === null) {
            return `mkdir: cannot create directory '${name}': File exists`;
        }
        return `mkdir: created directory '${name}'`;
    }

    exists(path: string): boolean {
        const pathComponents = path.split('/');
        let component: FileSystemComponent = this.workingDirectory;
        for (const pathComponent of pathComponents) {
            if (pathComponent === '..') {
                component = component.getParent() || component;
            } else {
                component = (component as FSDirectory).getChildren().find(child => child.getName() === pathComponent) || component;
            }
        }
        return component !== this.workingDirectory;
    }

    getFile(path: string): FSFile | null {
        const pathComponents = path.split('/');
        let component: FileSystemComponent = this.workingDirectory;
        for (const pathComponent of pathComponents) {
            if (pathComponent === '..') {
                component = component.getParent() || component;
            } else {
                component = (component as FSDirectory).getChildren().find(child => child.getName() === pathComponent) || component;
            }
        }
        return component.getType() === 'file' ? component as FSFile : null;
    }

    setWorkingDirectory(component: FileSystemComponent): void {
        this.workingDirectory = component;
    }

    cd(path: string): void {
        const pathComponents = path.split('/');
        let component: FileSystemComponent = this.workingDirectory;
        for (const pathComponent of pathComponents) {
            if (pathComponent === '..') {
                component = component.getParent() || component;
            } else {
                component = (component as FSDirectory).getChildren().find(child => child.getName() === pathComponent) || component;
            }
        }
        this.workingDirectory = component;
    }
}