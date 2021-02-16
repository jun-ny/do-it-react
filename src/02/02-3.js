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

