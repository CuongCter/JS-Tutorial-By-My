# Array 

## 1.Tạo mảng
- Có 2 cách tạo mảng 

var number = [1, 2, 3, 4]
var string = new Array('a', 'b', 'c', 'd')
```javascript
var number = [1, 2, 3, 4]
var string = new Array('a', 'b', 'c', 'd')
```

## 2. Truy xuất mảng 

- Độ dài của mảng
- Truy xuất vị trí index
```javascript
console.log(number.length);
console.log(string[2]);
```


## 3. Array Methods

-  ToString method: Đưa kiểu dữ liệu array -> string 
console.log(number.toString());

- Joing method: Tương tự thằng toString nhưng có thể kết bối các phần tủ thông qua ký tự truyền vào
console.log(number.join(' / '));

- pop method: Xóa element cuối mảng và trả về phần tử đã xóa
console.log(number.pop());

- push method: Thêm 1 hoặc nhiều phần tử vào cuối mnagr và trả về độ dài của mảng 
console.log(number.push(5 , 6, "string ", {hi:"hello"} ));

- shift method: Ngược lại với pop, xóa phần đầu mảng và trả về giá trị bị xóa 
console.log(number.shift());

- unShift method: Ngược lại với push
console.log(number.unshift("a", "b", "c", "d"));

- Spling method: Có thể xóa, cắt , chèn phần tử mới vào mảng
console.log(number.splice(1,0,'Phan tu moi', "hello world"));

console.log(number);

- Concat method: Nối 2 mảng lại với nhau 
var arrayNew = number.concat(string)
console.log(arrayNew);

- Slice method: Cắt element của mảng 

- forEach method: Duyệt qua từng phần tử của mảng 
courses.forEach(function (course,index) {
    console.log(course,index);
})

-Every method: Thường để kiểm tra điều kiện của tất cả các phần tử trong mảng và trả về boolean
var isFree = courses.every(function (course) {
    return course.coin === 0
})

- Some methods : Ngược lại với Every

- Find Methods: Dùng để tìm kiếm , nếu tìm được thì trả về đúng phần tử đố

- Filter : Trả về tất cả trường hợp thỏa mãn
var isFree = courses.filter(function (course) {
    return course.coin === 20
})

- Map method: Returns về một mảng mới với số lượng phần tử bằng số lượng mảng cũ 
var isFree = courses.map(function(course) {
    return course.name
})

- Reduce method
// array.reduce(callback, initialValue);
let sum = numbers.reduce(function(accumulator, currentNumber) {
    return accumulator + currentNumber;
}, 0);

console.log(sum);
// Output: 15
# Object

## Object là gì ?
- Là kiểu dữ liệu cơ bản và là một trong những cấu trúc dữ liệu quan trọng nhất.
- Một object trong JS là một tập hợp các cặp key-value
+ Trong đó mỗi key là một chuỗi (hoặc một biểu thức Regular Expression) và một value có thể là bất kỳ kieeur dữu liệu nào , bao gồm số, chuỗi , thậm chí là object khác ...

1. Thêm key-value
// myInfo.email = 'v@gmail.com';
myInfo['email'] = 'v2@gmail.com';

2.Lấy value
console.log(myInfo.name);
console.log(myInfo['age'])

3. Xóa key 
delete myInfo.name
console.log(myInfo);

4.Sửa 

myInfo.name = "hello world"
console.log(myInfo);

- Cách gọi Function --> Phương thức
        Còn lại --> Thuộc tính

## Object Constructor
- Là một hàm được sử dụng để tạo ra và khởi tạo đối tượng mới
- Một object constructor thường được được định nghĩa cách sử một hàm vá sau đó được gọi với từ khóa 'new', nó trả về một đối tượng mới.

var myInfo = {
    name: 'Khang',
    age: 18,
    getName: function(){
        return this.name
    }
}

function User(name, age) {
    this.name = name;
    this.age = age;
    this.getName = function(){
        return this.name
    }
}

var author = new User("Khang 1", 30)

author.title = "ABC"
author.commnet = "cmt"
console.log(author.getName());

## Object properties

1. Prototype là gì?
- Là một nguyên mẫu tạo lên đối tượng của object (như một nguyên liệu cấu thành lên 1 đối tượng )

## Đối tượng Date

var date = new Date()
console.log(typeof date);
console.log(date.getFullYear() + "/" + date.getMonth() + 1 + "/" + date.getDate());

## Math object
- Math.PI
- Math.round
- Math.abs
- Math.ceil
- Math.floor
- Math.random

# Vòng lặp
for...in:

Dùng để lặp qua các thuộc tính có thể đếm của một đối tượng.
Trong trường hợp mảng, nó lặp qua các chỉ số của mảng.
Duyệt qua tất cả các thuộc tính có thể đếm trong đối tượng, kể cả những thuộc tính được thêm vào prototype chain.
Thích hợp để lặp qua các thuộc tính của đối tượng (Object).

for...of:

Dùng để lặp qua các giá trị của đối tượng có thể lặp (iterable) như mảng, chuỗi, Set, Map, NodeList, v.v.
Không lặp qua các thuộc tính của đối tượng, chỉ lặp qua giá trị.
Thích hợp khi bạn quan tâm đến giá trị của đối tượng đối với một số cấu trúc dữ liệu cụ thể.

