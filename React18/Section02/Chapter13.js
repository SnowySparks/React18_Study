// const promise = new Promise((resolve, reject) => {
//     // 비동기 작업 실행하는 함수 : Executor
    
//     setTimeout(()=>{
//         console.log("안녕")
//         reject("왜 실패했을까...?")
//     }, 2000)
// })

// setTimeout(() => {
//     console.log(Promise)
// },3000)

// const promise = new Promise((resolve, reject) => {
//     const num = null
//     setTimeout(() => {
//         if (typeof num === "number") resolve(num + 10)
//         else reject("숫자가 아니야")
//     })
// }, 3000)


// // then 메서드 . Promise객체가 성공시 그 리턴 값을 다시 콜백함수의 매개변수로 넣어서
// // 실행함 함수 짤 수 있음. 이렇게 해서 비동기 작업의 순서도 보장함
// promise.then(value => {
//     console.log(value)
// }).catch((error) => console.log(error))


function add10(num) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof num === "number") resolve(num + 10)
            else reject("숫자가 아니야")
        })
    }, 3000)

    return promise
}

add10(10).then(res => {
    return res+10
}).then(res => {
    return add10(res)
}).then(res => {
    console.log(res)
}).catch(error => {
    console.log(error)
})