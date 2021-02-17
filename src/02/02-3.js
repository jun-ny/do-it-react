// 전개 연산자

var array1 = ['one', 'two'];
var array2 = ['three', 'four'];
const combined = [...array1, ...array2];
// 결과 : combined = ['one', 'two', 'three', 'four'];
const [ first, second, three = 'empty', ...others] = array1;
// 결과 : first = 'one', second = 'two', three = 'empty', others = []

var objectOne = {one: 1, two: 2, other: 0};
var objectTwo = {three: 3, four: 4, others: -1};
var combined = {
    one: objectOne.one,
    two: objectOne.two,
    three: objectTwo.three,
    four: objectTwo.four,
};

// assign() : 병합, assign()의 첫 번째 인자는 결과로 반환할 객체이며({}), 나머지 인자는 병합할 객체이다.
var combined = Object.assign({}, objectOne, objectTwo);
// combined = {one: 1, two: 2, three: 3, four: 4, other: -1}
var combined = Object.assign({}, objectTwo, objectOne);
// combined = {one: 1, two: 2, three: 3, four: 4, other: 0}
// 중복되는 키값이 있으면 이후에 전달된 객체(objectOne)의 값으로 덮어쓴다.

// -> 전개 연산자를 사용하면

var combined = {
    ...objectOne,
    ...objectTwo
};

//이게 객체 내장 함수인 assign()과 같음.

var { other, ...others } = combined;
// others = { one: 1, two: 2, three: 3, four: 4}