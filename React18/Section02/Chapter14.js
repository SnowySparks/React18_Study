// async 
// 어떤 함수를 비동기 함수로 만들어줌
// 함수가 프로미스를 반환하도록 변환해주는 키워드

async function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name :"ABCD",
                id : "REACT18"
            })
        })
    },1500)
}


async function printData() {
    const data = await getData()
    console.log(typeof data)
    console.log(data)
}
printData()