import test from 'ava';

import { elfWithMostCalories, elvesWithMostCalories } from '.';

test('Part One', async (t) => {
  t.is(elfWithMostCalories('day-1/puzzle.txt'), 70698);
});

test('Part Two', async (t) => {
  t.is(elvesWithMostCalories('day-1/puzzle.txt'), 206643);
});
