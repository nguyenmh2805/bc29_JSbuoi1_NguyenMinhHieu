/**
 * Bài 1: Tính tiền lương nhân viên
 * - Đầu vào:
 *      + soNgayLam = 30
 *      + luongMotNgay = 100000
 * - Xử lý:
 *      + luongNhanVien = luongMotNgay * soNgayLam
 * - Đầu ra:
 *      + luongNhanVien
 * 
 */

var soNgayLam = 30;
var luongMotNgay = 100000;

var luongNhanVien = soNgayLam * luongMotNgay;
console.log("Tien luong nhan vien la: " + luongNhanVien);

/**
 * Bài 2: Tính giá trị trung bình:
 * - Đầu vào:
 *      + n1 = 1
 *      + n2 = 2
 *      + n3 = 3
 *      + n4 = 4
 *      + n5 = 5
 * - Xử lý: 
 *      + giaTriTB = ((n1 + n2 + n3 + n4 +n5) / 5)
 * - Đầu ra:
 *      + show kết quả giaTriTB
 */

var n1 = 1;
var n2 = -2;
var n3 = 0.3;
var n4 = 3.14;
var n5 = 5;

var giaTriTB = ((n1 + n2 + n3 + n4 +n5) / 5);
console.log("Gia tri trung binh cua 5 so thuc la: " + giaTriTB);

/**
 * Bài 3: Quy đổi tiền:
 * - Đầu vào:
 *      + tienUSD = 2
 *      + giaUSD = 23500
 * - Xử lý:
 *      + tienVND = tienUSD * giaUSD
 * -Đầu ra:
 *      + kết quả tienVND
 */

var tienUSD = 2;
var giaUSD = 23500;

var tienUSD = tienUSD * giaUSD;
console.log("So tien sau khi quy doi: " + tienUSD);

/**
 * Bài 4: Tính diện tích và chu vi hình chữ nhật:
 * - Đầu vào: 
 *      + chieuDai = 20
 *      + chieuRong = 10
 * - Xử lý:
 *      + dienTich = (chieuDai * chieuRong)
 *      + chuVi = (chieuDai + chieuRong) * 2
 * - Đầu ra:
 *      + kết quả dienTich và chuVi
 */

var chieuDai = 20;
var chieuRong = 10;

var dienTich = chieuDai * chieuRong;
console.log("Dien tich hinh chu nhat la: " + dienTich);
var chuVi = (chieuDai + chieuRong) * 2;
console.log("Chu vi hinh chu nhat la: " + chuVi);

/**
 * Bài 5: Tính tổng 2 ký số:
 * - Đầu vào:
 *      + n= 12
 * - Xử lý:
 *      + Lấy số hàng đơn vị: Math.floor(n % 10);
 *      + Lấy số hàng chục: hangChuc = Math.floor(n / 10);
 *      + tongKySo = (hàng đơn vị + hàng chục)
 * - Đầu ra: 
 *      + kết quả tongKySo
 */

var n = 55;

var hangDV = Math.floor(n % 10);
var hangChuc = Math.floor(n / 10);

var tongKySo = hangChuc + hangDV;
console.log("Tong 2 ky so la: " + tongKySo);
