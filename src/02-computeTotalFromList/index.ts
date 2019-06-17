// Write a function that computes the
// running total of a list.

const add = (accumulator, current) => {
  return accumulator + current;
};

export default function computeTotalFromList(numbers: number[]): number {
  return numbers.reduce(add, 0);
}
