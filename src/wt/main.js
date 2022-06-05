import { cpus } from 'os';
import { join, dirname } from 'path';
import { Worker } from 'worker_threads';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

export const performCalculations = async () => {
  const promises = [];

  cpus().forEach((_, i) => {
    promises[i] = new Promise((res) => {
      const worker = new Worker(join(__dirname, 'worker.js'), {
        workerData: 10 + i,
      });
      worker.on('message', (msg) => {
        res({ status: 'resolved', data: msg });
      });
      worker.on('error', () => {
        res({ status: 'error', data: null });
      });
    });
  });
  const res = await Promise.all(promises);
  return res;
};

performCalculations().then(console.log);
