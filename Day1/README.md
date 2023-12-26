# Variable (Biến)
- Biến là "bộ nhớ được đặt tên" cho dữ liệu
- Trong JS có 3 loại: var , let và const 
## 1. Var 
- Phạm vi (Scope): Có phạm vi toàn cục hoặc vi hàm (global scope hoặc function scope )
- Tính chất: Có thể khai báo lại và có thể truy cập trước khi khai báo (hosting)

## 2. Let 
- Phạm vi:  Có phạm vi là block {} hoặc vi hàm
- Tính chất: Không thể khai báo lại trong cùng một phạm vi, nhưng có thể thay đổi được giá trị

## 3. Const 
- Phạm vi: Có phạm vi là block {} hoặc vi hàm
- Tính chất: Không thể khai báo lại

### Lưu ý:
- Var hiện tại không được khuyến khích sử dụng trong các phiên bản JS mới 
- Thay vào đó mình sẽ sử dụng "let" và "const" vì nó giúp giảm các vấn đề do hosting gây ra và giúp mã nguồn hiệu quả và dễ bảo trì hơn

+ Hosting:
- Nó ám chỉ quá trình đưa các khai báo biến và hàm lên đầu của phạm vi trước khi mã lệnh thực sự được thực thi

# Quy tắc đặt tên biến
1.CamelCase 
2.Bắt đầu bằng chữ thường, sau mỗi từ nó bắt đầu bằng chữ cái in hoa
3.Chỉ sử dụng chữ cái, số và dấu gạch dưới.
4.Không được bắt đầu bằng số 
5.Hạn chế dùng tên quá ngắn hoặc quá dài
6.Chọn tên rõ ràng, đúng chức năng
7.Đặt tên tiếng Anh

# Cú pháp Comments
1. Mục đích
- Ghi chú
- Vô hiệu hóa code 
2. Loại Comment
- Comment 1 dòng (//)
- Comment nhiều dòng (/* */)
3. Sử dụng phím tắt
- Windows: Ctrl + /
- MacOS: Command + /

# Built-In Functions
1. Alert
2. Console
3. Confirm
4. Propmt
5. SetTimeout (đợi 1 time rồi thực hiện action)
6. SetInterval (cách 1 time chạy 1 lần)

# Toán tử 
## Toán tử số học (Arithmetic)
+ --> Cộng
- --> Trừ
* --> Nhân
/ --> Chia
** --> Lũy thừa
% --> Chia dư
++ --> Tăng 1 giá trị
-- --> Giảm 1 giá trị

## Toán tử gán 

Toán tử         Ví dụ      Tương đương
=               x = y         x = y
+=              x += y        x = x + y
-=              x -= y        x = x - y
*=              x *= y        x = x * y
/=              x /= y        x = x / y
**=             x **= y      x = x ** y

## Toán tử nối chuỗi

- Khi ta sử dụng string dùng dấu '+' để nối chuỗi

## Toán tử so sánh
 
 == ---> Bằng (chỉ so sánh giá trị)
 === ---> Bằng (so sánh cả giá trị và kiểu dữ liệu)
 != ---> Không bằng
 / > ---> Lớn hơn
 < ---> Nhỏ hơn
 / >= Lớn hơn hoặc bằng
 <= Nhỏ hơn hoặc bằng

 ## Kiểu dữ liệu Boolean
 True - Đúng
 False - Sai

- Các kiểu giá trị sẽ chuyển sang Boolen sẽ là False
    0 (số không)
    false 
    '' hoặc ""
    undefined
    NaN
    null

 ## Câu điều kiện If-Else

 if(){
    ... //Đúng thì trả về
 }else{
    ... // Sai thì trả về 
 }
 

  if(){
    ... //Đúng thì trả về
 }
 else if(){
    ... // Tiếp tục kiếm tra
 }
 else{
    ... // Sai thì trả về 
 }

## Toán tử logical
1. && --> AND
2. || --> OR
3. ! --> NOT 

# Kiểu dữ liệu

## Kiểu liệu nguyên thủy - Primitive Data Types
- Gía trị được tạo ra và lưu vào vùng nhớ nào đó và không thể sửa 
- Khi gán thì nó sẽ tạo ra vùng nhớ khác để lưu giá trị mới 
1. Number
2. String
3. Boolean
4. Undefined
5. Null
6. Symbol 

## Kiểu dữ liệu phức tạp -  Complex Data Types

1. Function
2. Object

## Kiểu dữ liệu tham chiếu - Reference Data Types
1. Object 
2. Array
3. Function
4. Date

## Kiểu dữ liệu đặc biệt

1.Symbol: Kiểu dữ kiệu không thể thay đổi (ES6)
2.BitInt: Kiểu dữ liệu mới (ES 2020) đại diện cho số lớn và vượt qua kiểu Number

## Kiểu dữ liệu bổ sung

1.Map: Đối tượng dữ một giữ một bản đồ dưới dạng các cặp key-value, trong đó key có thể là bất kỳ kiểu dữ liệu nào
2.Set: Đối tượng dữ một tập hợp các giá trị duy nhất , không chấp nhận giá trị thay đổi

# TypeOF 
- Kiểm tra kiểu dữ liệu

