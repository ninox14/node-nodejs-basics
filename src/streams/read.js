import { stdout } from 'process';
import { createReadStream, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
export const read = async () => {
    try {
        const file = join(__dirname, 'files', 'fileToRead.txt');
        if (existsSync(file)) {
            const stream = createReadStream(file);
            stream.on('open', () => stream.pipe(stdout));
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
