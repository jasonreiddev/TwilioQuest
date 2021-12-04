// node sortOrder.js cats dogs

const firstValue = process.argv[2].toLowerCase();
const secondValue = process.argv[3].toLowerCase();

console.log(
  firstValue.localeCompare(secondValue, undefined, { numeric: true })
  // firstValue > secondValue ? 1 : secondValue > firstValue ? -1 : 0
);
