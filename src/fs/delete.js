import { existsSync } from 'fs';
import { unlink } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
export const remove = async () => {
    try {
        const filePath = join(__dirname, 'files', 'fileToRemove.txt');
        if (existsSync(filePath)) {
            await unlink(filePath);
        }
        else {
            throw new Error('FS operation failed');
        }
    }
    catch (e) {
        console.error(e.message);
    }
};
remove();
