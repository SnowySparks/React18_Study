console.log(1)

setTimeout(() => {
    console.log(2)
},3000)
console.log(3)
// 1
// 3
// 2 (3초뒤에 출력됨!)