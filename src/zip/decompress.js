import { createReadStream, createWriteStream } from 'fs';
import { unlink } from 'fs/promises';
import { dirname, join } from 'path';
import { pipeline } from 'stream/promises';
import { fileURLToPath } from 'url';
import { createGunzip, gunzip } from 'zlib';

const __dirname = dirname(fileURLToPath(import.meta.url));

export const decompress = async () => {
  try {
    const gunzip = createGunzip({ info: true });
    const sourceFile = join(__dirname, '/files/archieve.gz');
    const destinationFile = join(__dirname, '/files/fileToCompress.txt');
    const source = createReadStream(sourceFile);
    const destination = createWriteStream(destinationFile);
    await pipeline(source, gunzip, destination);
    await unlink(sourceFile);
    console.log('complete');
  } catch (e) {
    console.error(e.message);
  }
};

decompress();
