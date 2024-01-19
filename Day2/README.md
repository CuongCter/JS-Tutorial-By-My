# Hàm (function)
1. Hàm là gì? 
- Một khối mã 
- Làm việc một việc cụ thể 
2. Loại hàm 
- Built-in
- Tự định nghĩa
3. Tính chất gì ?
- Không được được thực thi khi chưa định nghĩa
- Sẽ thực thi khi ta gọi hàm
- Có thể nhận tham số 
- Và có thể trả về 1 giá trị (return)

## Tham số trong hàm (parameters)
- Là giá trị có thể truyền vào trong một function
- Kiểu dữ liệu của tham số không bị giới hạn
- Tính private chỉ được sử dụng trong function đó
- Có thể truyền 1 tham số hoặc nhiều tham số 
- Đối số (argments)

## Từ khóa return 
 - Trả về giá trị trong function
 - Có thể nhận bất kỳ kiểu dữ liệu nào

## Lưu ý 
- Khi function đặt trùng tên -> Gọi hàm cuối cùng
- Khai báo biến trong hàm -> Chỉ sử dụng được trong hàm
- Định nghĩa hàm trong hàm

## Phân loại 

1. Declaration function
2. Expression function
3. Arrow function

# Chuỗi (String)

## Tạo chuỗi 
1. var name = "Khang"  // tạo ra string
2. var name = new String("Khang") // tạo ra object 
- Nên dùng cách 1 
+ Cách 2 dài dòng 
+ Từ khóa New sẽ khởi tạo 1 đối tượng => Lâu hơn
+ Cách 2 tạo ra kiểu dữ liệu không mong muốn vì nó là Object

## Một số case sử dụng dụng backslach (\ )

## Xem độ dài chuỗi
- str.lenght

## Template String (``)

## String Methods

1. Lenght 
- str.lenght

2. findIndex 
- Trả về vị trí index của ký tự
- Nếu không có thì trả về - 1
- Nếu có nhiều ký tự trùng lặp trả về vị trí đầu tiên
- Có thể truyền thêm tham số để bắt đầu xét vị trí bắt đầu tìm
    str.indexOf('')
3. lastIndexOf
- Tương tự với indexOf nhưng ngược lại

4. search 
- Tương tự IndexOf nhưng không truyền được được vào tham số 
- Có thể tìm theo biểu thức chính quy
 str.search()
5. Cut string
- Sử dụng để cắt chuỗi 
 str.slice() 

6. Replace (ghi đè)
 - Chỉ thay thế được chuỗi đầu tiên
 - Nếu muốn thay thế nhiều phải sử dụng biểu thức chính quy
 - Tham số đầu tiên là chuỗi cần thay thế
 - Thám số thứu 2 là chuỗi thay thế 
 str.replace("", "")

7. Convert to uppercase 
 - Đưa chuỗi về kiểu chũ in hoa
 str.toLocaleUpperCase()

8. Convert to lowercase
 - Đưa chuỗi về kiểu chữ thường
 str.toLocaleLowerCase()

9. Split 
 - Căt 1 chuỗi thành 1 array
 str.split(",")

10. Trim 
 - Loại bỏ khoảng trắng thừa đầu và cuối
 str.trim()

11. Get a charater by index
 - Trả về giá trị trong chuỗi khi chuyền vào chỉ mục index
str.charAt()

# Kiểu dữ liệu số Number

## Trong JS có 2 loại số
- Các số thông thường trong JS được lưu trữ dưới dạng 64 bit IEEE - 754 (còn được gọi là các số phẩy động). Trong hầu hết các trường hợp khi làm việc với JS thì chúng ta sử dụng số só này
- Số BitInt là loại số sử dụng để biểu thị số nguyên có độ dài tùy ý

## Phương thức
1. Number.isFinite()
- Xác định số đó có phải là hữu hạn hay không - trả về Bloolen
Number.isFinite(number)

2. Number.isInteger()
- Xác định xem có phải số nguyên hay không - trả về Bloolen
Number.isInteger(number )

3. Number.parseFloat()
- Chuyển đổi chuỗi đã cho thành một số dấu phẩy động ( số thực)

4. Number.parseInt() 
- Chuyển đổi chuỗi đã cho thành 1 số nguyên

5. Number.prototype.toFixed()
- Chuyển đổi và trả về chuỗi đại diện cho số đã cho có số chính xác đén hàng thập phân tứ 

5. Number.prototype.toString()
- Chuyển đổi và trả về chuỗi đại diện cho số đã cho

### Lưu ý 
- NaN là đại diện cho 1 số không hợp lệ
- Kiểm tra bằng cách dùng isNaN