import { stdin, stdout } from 'process';
import { Transform } from 'stream';

export const transform = async () => {
  try {
    const reverse = new Transform({
      transform(chunk, encoding, callback) {
        callback(null, `${chunk.toString().split('').reverse().join('')}\n`);
      },
    });
    stdin.pipe(reverse).pipe(stdout);
  } catch (e) {
    console.error(e.message);
  }
};

transform();
