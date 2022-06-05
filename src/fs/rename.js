import { existsSync } from 'fs';
import { copyFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
export const rename = async () => {
    try {
        const fileNameSource = 'wrongFilename.txt';
        const fileNameDest = 'properFileName.md';
        const sourceFile = join(__dirname, 'files', fileNameSource);
        const destFile = join(__dirname, 'files', fileNameDest);
        if (existsSync(sourceFile) && !existsSync(destFile)) {
            await copyFile(sourceFile, destFile);
        }
        else {
            throw new Error('FS operation failed');
        }
    }
    catch (e) {
        console.error(e.message);
    }
};
rename();
