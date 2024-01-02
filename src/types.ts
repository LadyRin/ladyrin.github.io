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
