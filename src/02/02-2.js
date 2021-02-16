// 템플릿 문자열

var string1 = '안녕하세요';
var string2 = '반갑습니다';
// var greeting = string1 + string2;
var greeting = `${string} ${string2}`
var product = { name : '도서', price: '4200원'};
// var message = '제품' + product.name + '의 가격은' + product.price + '입니다'; 
var message = `제품 ${product.name}의 가격은 ${product.price} 입니다`;

