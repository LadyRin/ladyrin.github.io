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
    number: number;
    selected: boolean;
    appToRun: AppInfo;
}

export interface AppInfo {
    name: string;
    icon: string;
    pid: number;
}
