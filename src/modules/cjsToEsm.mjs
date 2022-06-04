import path, { join } from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import './files/c.js';
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';
const __filename = fileURLToPath(import.meta.url);
const __dirname = fileURLToPath(new URL('.', import.meta.url));
const random = Math.random();
let unknownObject;
if (random > 0.5) {
    const data = readFileSync(join(__dirname, '/files/a.json'), {
        encoding: 'utf-8',
    });
    if (data) {
        unknownObject = JSON.parse(data);
    }
}
else {
    const data = readFileSync(join(__dirname, '/files/b.json'), {
        encoding: 'utf-8',
    });
    if (data) {
        unknownObject = JSON.parse(data);
    }
}
console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);
console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);
console.log('Dynamic Import', unknownObject);
const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});
export default {
    unknownObject,
    createMyServer,
};
