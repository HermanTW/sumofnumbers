const testList = [1, 2, 3, 4, 5, 6, 7];

function sumFor(list) {
  let total = 0;
  for (const i of list) {
    total += i;
  }
  return total;
}

console.log(sumFor(testList));

function sumWhile(list) {
  let total = 0;
  let counter = 0;
  while (counter < list.length) {
    total += list[counter];
    counter++;
  }
  return total;
}

console.log(sumWhile(testList));

function sumRecursion(list) {
  if (list.length !== 0) {
    const total = list.pop();
    return total + sumRecursion(list);
  }
  return 0;
}

console.log(sumRecursion(testList));

function sumTheSimpleWay(list) {
  return _.reduce(list, function (memo, num) { return memo + num; } );
}

console.log(sumTheSimpleWay(testList));
