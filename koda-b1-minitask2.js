// No 1
const we = {
  are: {
    the: {
      best: "Koda",
    },
  },
};

console.log(we.are.the.best);

// No 2
const hello = {
  world: "Hello World",
};
console.log(hello.world);

// No 3
const obj = {
  str: [
    null,
    null,
    null,
    [null, [null, null, { man: [{ tech: { academy: "Tech Academy" } }] }]],
  ],
};

console.log(obj.str[3][1][2].man[0].tech.academy);

// No 4
const my = [{ favourite: [null, null, null, { fruit: { is: "Apple" } }] }];

console.log(my[0].favourite[3].fruit.is);

// No 5
const num = {
  first: [null, 16],
  second: [null, null, 16],
};

console.log(num.first[1] + num.second[2]);
