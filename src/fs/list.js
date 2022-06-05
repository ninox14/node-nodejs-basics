import { existsSync } from 'fs';
import { readdir } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
export const list = async () => {
    try {
        const folder = join(__dirname, 'files');
        if (existsSync(folder)) {
            console.log(await readdir(folder));
        }
        else {
            throw new Error('FS operation failed');
        }
    }
    catch (e) {
        console.error(e.message);
    }
};
list();
