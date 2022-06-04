import { createReadStream, createWriteStream } from 'fs';
import { unlink } from 'fs/promises';
import { dirname, join } from 'path';
import { pipeline } from 'stream/promises';
import { fileURLToPath } from 'url';
import { createGzip, constants } from 'zlib';

const { Z_BEST_COMPRESSION } = constants;

const __dirname = dirname(fileURLToPath(import.meta.url));
export const compress = async () => {
  try {
    const gzip = createGzip({ level: Z_BEST_COMPRESSION });
    const sourceFile = join(__dirname, 'files', 'fileToCompress.txt');
    const destinationFile = join(__dirname, '/files/archieve.gz');
    const source = createReadStream(sourceFile);
    const destination = createWriteStream(destinationFile);
    await pipeline(source, gzip, destination);
    await unlink(sourceFile);
    console.log('complete');
  } catch (e) {
    console.error(e.message);
  }
};

compress();
