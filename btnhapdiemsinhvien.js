let ly = prompt("Điểm Lý");
let hoa = prompt("Điểm Hóa");
let sinh = prompt("Điểm Sinh");

ly = parseInt(ly);
hoa = parseInt(hoa);
sinh = parseInt(sinh);

let trungbinh = (ly + hoa + sinh)/3;
let tong = ly + hoa + sinh;
document.write("Đây là điểm trung bình = " + trungbinh);
document.write('<br>');
document.write("Đây là điểm tổng = " + tong);
document.write('<br>');