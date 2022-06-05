import { fork } from 'child_process';
import { join, dirname } from 'path';
import { stderr, stdin, stdout } from 'process';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export const spawnChildProcess = async (args) => {
  const file = join(__dirname, '/files/script.js');
  // LOOK HERE: https://discord.com/channels/755676888680366081/980732948745695373/982962934407901214
  fork(file, [...args], { stdio: [stdin, stdout, stderr, 'ipc'] });
};

const args = process.argv.slice(2);

spawnChildProcess(args);
