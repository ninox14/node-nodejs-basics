import { existsSync } from 'fs';
import { writeFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
export const create = async () => {
    try {
        const filePath = join(__dirname, 'files', 'fresh.txt');
        if (!existsSync(filePath)) {
            const content = 'I am fresh and young';
            await writeFile(filePath, content);
        }
        else {
            throw new Error('FS operation failed');
        }
    }
    catch (e) {
        console.error(e.message);
    }
};
create();
