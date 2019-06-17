// Write a function that takes a number and
// returns a list of its digits.
// So for 2342 it should return [2,3,4,2].

export default function numberToList(num: number) {
  const splitString = num
    .toString()
    .replace(".", "")
    .split("");

  const convertToNums = (num: string) => parseInt(num);
  return splitString.map(convertToNums);
}
