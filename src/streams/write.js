import { stdin, stdout } from 'process';
import { createWriteStream } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { createInterface } from 'readline';
const __dirname = dirname(fileURLToPath(import.meta.url));
export const write = async () => {
    try {
        const file = join(__dirname, 'files', 'fileToWrite.txt');
        const stream = createWriteStream(file);
        const rl = createInterface(stdin, stdout);
        stream.on('open', () => {
            rl.on('line', (text) => stream.write(`${text}\n`, 'utf-8'));
        });
        process.on('exit', () => stream.close());
    }
    catch (e) {
        console.error(e.message);
    }
};
write();
