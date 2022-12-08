import { readFileSync } from 'fs';

export const parseLines = (pathToFile) => {
  return readFileSync(
    `${__dirname.split('/').slice(0, -1).join('/')}/data/${pathToFile}`,
    { encoding: 'utf8', flag: 'r' }
  );
};
