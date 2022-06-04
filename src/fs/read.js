import { existsSync } from 'fs';
import { readFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
export const read = async () => {
    try {
        const file = join(__dirname, 'files', 'fileToRead.txt');
        if (existsSync(file)) {
            const content = await readFile(file, { encoding: 'utf8' });
            console.log(content);
        }
        else {
            throw new Error('FS operation failed');
        }
    }
    catch (e) {
        console.error(e.message);
    }
};
read();
