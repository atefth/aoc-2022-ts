import { parseLines } from '../../utils/input-parser';

const caloriesPerElf = (input: string) => {
  return parseLines(input)
    .split('\n\n')
    .map((elf) =>
      elf
        .split('\n')
        .map(Number)
        .reduce((sum, current) => sum + current)
    );
};

export const elfWithMostCalories = (input: string) => {
  return Math.max(...caloriesPerElf(input));
};

export const elvesWithMostCalories = (input: string) => {
  // eslint-disable-next-line functional/immutable-data
  return caloriesPerElf(input)
    .sort((a, b) => (a < b ? 1 : a > b ? -1 : 0))
    .slice(0, 3)
    .reduce((sum, current) => sum + current);
};
