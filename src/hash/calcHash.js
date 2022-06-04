import { createHash } from 'crypto';
import { existsSync } from 'fs';
import { readFile } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
export const calculateHash = async () => {
    try {
        const file = join(__dirname, 'files', 'fileToCalculateHashFor.txt');
        if (existsSync(file)) {
            const content = await readFile(file, { encoding: 'utf8' });
            console.log(createHash('sha256').update(content).digest('hex'));
        }
        else {
            throw new Error('FS operation failed');
        }
    }
    catch (e) {
        console.error(e.message);
    }
};
calculateHash();
