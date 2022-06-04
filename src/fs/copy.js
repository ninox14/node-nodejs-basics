import { existsSync } from 'fs';
import { copyFile, mkdir, readdir } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
export const copy = async () => {
    try {
        const folderSourcePath = join(__dirname, 'files');
        const folderDest = join(__dirname, 'files_copy');
        if (!existsSync(folderDest) && existsSync(folderSourcePath)) {
            const sourceFiles = await readdir(folderSourcePath);
            await mkdir(folderDest);
            sourceFiles.forEach(async (file) => {
                await copyFile(join(folderSourcePath, file), join(folderDest, file));
            });
        }
        else {
            throw new Error('FS operation failed');
        }
    }
    catch (e) {
        console.error(e.message);
    }
};
copy();
