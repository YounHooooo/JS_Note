// // const proxy = new Proxy(
// //     {quiz: "테스트"},
// //     {
// //         set(target, property, value) {
// //             target[property] = value;

// //             const h1 = document.querySelector("h1");
// //             h1.innerText = value;

// //         },
// //     }
// // );

// // proxy.quiz = "설거지";
// // console.log(proxy.quiz);

// // setTimeout(() => {
// //     proxy.quiz = "안녕하신가"
// // }, 3000);

// // console.log(proxy)

// // 객체
// const obj = {
//     name : '이윤호',
//     age : '30'
// }

// // 값을 꺼낼때 두가지 방법

// // 점 표기법
// console.log(obj.name);

// // 대괄호 표기법
// console.log(obj['name']);

// // 배열안에 배열 or 객체 넣기
// const arr = [1, 2, 3, {name: '이윤호'}];

// console.log(arr);

// // 객체 안에 배열or 객체 넣기
// const obj_first = {
//     arr: [1, 2, 3],
//     something: {
//         name: '이윤호',
//         age: '30',
//         job: 'dev'
//     }
// }
// console.log(obj_first);

// // 산술 연산자
// // +, -, *, /

// // 나누기 , 몫을 출력함
// console.log(10 / 5);

// // 나누기 , 나머지 값을 결과로 출력함
// console.log(10 % 5);

// // 2x2x2
// console.log(2 ** 3);

// // 증감 연산자
// let number = 10;
// number++;

// console.log(number);

// const a = 2 < 3;
// const b = 30 > 50;

// // & 연산자는 두변의 값이 같아야 true
// console.log(a && b);

// // || 연산자는 두변 중 하나의 값이 true면 true
// console.log(a || b);

// // 삼항 연산자
// // 조건 ? 참일 때 실행될 부분 : 거짓일 때 실행될 부분

// console.log(2 < 3 ? '참' : '거짓');

// //널리쉬
// const c = undefined;
// const d = null;
// const e = '홍길동';

// console.log(c ?? d ?? e);

// const a = 10;
// const b = 20;
// const c = 20;

// if(a > b) {
//     console.log('a가 더 큽니다!');

// } else if (b !== c) {
//     console.log('b랑 c가 같습니다!');

// } else {
//     alert('여기는 언제 출력되나요?');

// }

// const number = 10;

// switch (number) {
//     case 10:
//         console.log(number);
//     case 2:
//         console.log(number);
//         break;
//     default:
//         console.log('아무것도 해당되지 않아요!');
// }

// if (number % 2 == 0) {
//     console.log('짝수!');
// } else {
//     console.log('홀수!');
// }

// switch (number % 2) {
//     case 0:
//         console.log('짝수!');
//         break;
//     case 1:
//         console.log('홀수!');
//         break;
// }

// for (let i = 0; i < 10; i++) {
//     if (i === 7) {
//         continue;
//     }

//     console.log(i);
// }

// const arr = [1, 2, 3];

// for (const i of arr) {
//     console.log(i);
// }

// let i = 0;

// while (i < 10) {
//     console.log(i++);
// }

// function bok(main) {
//     console.log(`${main} 볶음밥`)
// }

// bok('새우');
// bok('김치');

// function sum(a, b) {
//     console.log(a + b);
// }
// sum(10,20);

// function a() {
//     const b = 10;
//     console.log(b);
// }

// a();
// console.log(b);

var add = function(a,b) {
    console.log(a+b);
};

add(3,8);

// 화살표 함수
// 코드의 라인을 줄이기 위해 사용

const add = (a, b) => a+b;
console.log(add(1,7));

// 생성자 함수
function Parson(name,age) {
    this.name = name;
    this.age = age;
    this.walk = function() {

        console.log("걷는중");
    }
}

const p1 = new Parson("홍길동",20);
const p2 = new Parson("신길동",30);

console.log(p1);
console.log(p2);

console.log(p2.name);
console.log(p2.walk());

// 내부 함수
function outer() {
    let x = 10;

    function inner() {
        console.log(x);
    }

    inner();
}

outer();


// 재귀 함수
function countdown(cnt) {
    if (cnt === 0) {
    console.log("0이 되었습니다");
        } else {
    console.log(cnt);
    countdown(cnt - 1);
    }
}

countdown(5);

// 콜백 함수

// 콜백 함수 예시
function fetchData(callback) {
    // 비동기 작업 시뮬레이션 (예: setTimeout을 사용하여 1초 후에 콜백 실행)
    setTimeout(function() {
        const data = '이것은 데이터입니다!';
        callback(data); // 콜백 함수 호출
    }, 1000);
}

// fetchData 함수 호출과 콜백 함수 전달
fetchData(function(data) {
    console.log('받은 데이터:', data);
});
