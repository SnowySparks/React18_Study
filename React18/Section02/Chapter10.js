// Date 객체 생성
const date1 = new Date()
console.log(date1) // 2024-07-08T13:00:26.745Z

const date2 = new Date("1970-01-07") //1970-01-07T00:00:00.000Z
const date3 = new Date("1970-02-23/12:11:11")
// 1970.01.07 , 1970/01/07 등등 도 가능
// 시간을 넣고 싶으면 뒤에 /시간 : new Date("1970-01-07/12:23:14")
// new Date(1970, 1, 7, 12, 23, 14) 도 가능
console.log(date2)


// 타임스탬프
// 특정 시간이 "1970.01.01/00:00:00" 초로부터 몇 ms 지났는지 의미하는 수
// Unix Time이라고도 함
// 객체에 담겨져 있는 시간에 대한 UnixTime이 리턴됨
const ts1 = date1.getTime()
console.log(ts1) // 1720443838937

// 시간 요소 추출하기
let year = date1.getFullYear();
let month = date1.getMonth() + 1; // 1월은 0, 2월은 1, ... 이런식으로 나옴
let date = date1.getDay()

const hour = date1.getHours()
const minutes = date1.getMinutes()
const sec = date1.getSeconds()

// console.log(
//     year,
//     month,
//     date,
//     hour,
//     minutes,
//     sec
// )
// 2024 7 1 22 9 41


// 시간 수정
date1.setFullYear(2023)
date1.setMonth(2) // 1월은 0 이라는 것에 주의
date1.setDate(30)
date1.setHours(23)
date1.setMinutes(42)
date1.setSeconds(1)
console.log(date1) // 2023-03-30T14:42:01.662Z


// 시간을 여러 포맷으로 출력 
console.log(date1.toDateString()) //Thu Mar 30 2023
console.log(date1.toLocaleDateString()) // 우리나라 현지화 2023. 3. 30.