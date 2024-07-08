// for of  = 배열
let arr = [1, 2, "apple"];
for (const val of arr) {
  console.log(val);
}

// for in = 객체
const obj = {
  a: "a",
  b: 123,
  c: "React",
};

for (const key in obj) {
  console.log(key, obj[key]);
}
