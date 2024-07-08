// 1.filter -> 
// 기존 배열에서 조건을 만족하는 요소들만 필더링해 새로운 배열 리턴
// 카테고리 필터에 매우 유용
let arr1 = [
    {name : "ABCD", hobby : "테니스"},
    {name : "철수", hobby : "게임"},
    {name : "영희", hobby : "탁구"},
    {name : "의지", hobby : "테니스"},
]

const tennisPeople = arr1.filter( (item, idx, arr)=> item.hobby === "테니스")
//[ { name: 'ABCD', hobby: '테니스' }, { name: '의지', hobby: '테니스' } ]
// console.log(tennisPeople)



// map
// 배열 모든 원소 순회하면서, 각 콜백함수를 실행하고 그 결과값들을 배열에 모아서 새로운 배열로 리턴
let arr2 = [1, 2, 3, 4, -1]
const mapResult = arr2.map((item, idx, arr)=> {
    // console.log(item)
    return item * 2
})
// console.log(mapResult) // [ 2, 4, 6, 8, -2 ]


//sort
// 배열을 "사전순" 으로 정렬됨 - 즉 각 원소들을 str로 바꾸어서... 사전순으로
const arr3 = [10, 3, 5]
arr3.sort()
// console.log(arr3) // [ 10, 3, 5 ]

// 단 sort안에 콜백함수를 넣어 그 기준을 바꿀 수 있음
// 이때 2개 원소 파라미터를 받는데 연산결과가 음수이면 앞에 원소가 앞으로(오름차순)
// 양수이면 뒤쪽 파라미터가 앞쪽으로 (내림차순)
// 0이면 아무것도 안함
arr3.sort((a, b) => a - b) // [ 3, 5, 10 ] : 오름차순
// console.log(arr3)
arr3.sort((a, b) => b- a)// [ 10, 5, 3 ] : 내림차순
// console.log(arr3) 


// toSorted() : 정렬된 결과를 리턴함. 원본 배열은 수정되지 않음
const arr4 = arr3.toSorted((a, b)=> a-b)
console.log(arr4) //[ 3, 5, 10 ]
console.log(arr3) // [ 10, 5, 3 ]

// join
// 배열의 모든 요소를 하나의 문자열로 반환하는 메서드
let arr6 = ["Hi ", "I love", "React"]
const joined = arr6.join()
const joined2 = arr6.join(" ") //구분자설정, 기본값은 ,
console.log(joined) // Hi ,I love,React
console.log(joined2) // Hi  I love React
const locale = new Date().toLocaleString('en-US', { timeZone: 'Asia/Seoul' });