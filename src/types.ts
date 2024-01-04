export interface CommandLog {
    command: string;
    output: string;
    number: number;
}

export interface Command {
    name: string;
    description: string;
    callback: (args: string[]) => string;
}

export interface AppIconInfo {
    name: string;
    icon: string;
    selected: boolean;
    app: AppInfo;
}

export interface AppInfo {
    name: string;
    icon: string;
    pid: number;
    windowState: number;
    args: any;
}

export const AppWindowState = {
    NORMAL: 0,
    MINIMIZED: 1,
    MAXIMIZED: 2
}
