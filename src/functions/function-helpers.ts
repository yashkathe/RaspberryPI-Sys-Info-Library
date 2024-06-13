import { exec } from 'child_process';
import { promises as fs } from 'fs';

export const executeCommand = (command: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                reject(`Error: ${error.message}`);
                return;
            }
            if (stderr) {
                reject(`Stderr: ${stderr}`);
                return;
            }
            resolve(stdout);
        });
    });
}

export const readFile = async (file: string): Promise<string> => {
    try {
        const fileContent = await fs.readFile(file, 'utf8');
        return fileContent;
    } catch (error: any) {
        throw new Error(`Failed to get CPU temperature: ${error.message}`);
    }
}