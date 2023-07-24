/**
 * Mục đích: Lớp đối tượng nhân viên
 * Người tạo: Thuần
 * Ngày: 22/07/2023
 * Version: 1.0
 */

// Khai báo biến biến chứa mảng nhân viên từ input
var arrNhanVien = [];

// khai báo biến chưa mảng input
var arrInput = ['tknv','name','email','password','datepicker','luongCB','chucvu','gioLam'];

var arrNotiInput = ['tbTKNV','tbTen','tbEmail','tbMatKhau','tbNgay','tbLuongCB','tbChucVu','tbGiolam']

// dùng vòng lặp để lấy giá trị người dùng nhập vào
function themNhanVien() {
    event.preventDefault();

    // tạo ra 1 đối tượng từ lớp đối tượng NhanVien
    var nhanVien = new NhanVien();

    for (var i = 0; i < arrInput.length; i++) {
        var value = document.getElementById(arrInput[i]).value;
        nhanVien[arrInput[i]] = value;
    }
    
    console.log(nhanVien);
    
    // Validation
    var valid = true;

    valid = valid && kiemTraDuLieuRong(arrInput,arrNotiInput,nhanVien) && kiemtraDoDaiTaiKhoan(nhanVien.tknv,'tbTKNV') && kiemTraName(nhanVien.name,'tbTen') && kiemTraEmail(nhanVien.email,'tbEmail') && kiemTraPass(nhanVien.password,'tbMatKhau') && kiemTraLuongCB(nhanVien.luongCB,'tbLuongCB') && kiemTraGioLam(nhanVien.gioLam,'tbGiolam');
    console.log(valid);

    if (valid) {
        arrNhanVien.push(nhanVien);
        luuDuLieuLocal();
        renderGiaoDien();
    }
}

document.getElementById('btnThemNV').onclick = themNhanVien;

// Show input ra giao diện

function renderGiaoDien(arr) {
    if (!arr) {
        arr = arrNhanVien;
    }
    var content = '';
    
    for (var i = 0; i < arr.length; i++) {
        var nhanVien = arr[i];
        var newNhanVien = new NhanVien();

        Object.assign(newNhanVien,nhanVien);

        content += `<tr>
        <td>${newNhanVien.tknv}</td>
        <td>${newNhanVien.name}</td>
        <td>${newNhanVien.email}</td>
        <td>${newNhanVien.datepicker}</td>
        <td>${newNhanVien.chucvu}</td>
        <td>${newNhanVien.tinhTongLuong()}</td>
        <td>${newNhanVien.xepLoai()}</td>
        <td><button class="btn btn-danger text-white" onclick="xoaNhanVien('${newNhanVien.tknv}')">Xóa</button>
        <button class="btn btn-success text-white" data-toggle="modal" data-target="#myModal" onclick="layThongTinNhanVien('${newNhanVien.tknv}')" >Sửa</button></td>`;

        document.getElementById('tableDanhSach').innerHTML = content;

        document.getElementById('formNhanVien').reset();
    }
}

// lưu dữ liệu xuống local
function luuDuLieuLocal() {
    // biến chuyển đổi dữ liệu
    var nhanVienString = JSON.stringify(arrNhanVien);
    localStorage.setItem('nhanVien',nhanVienString);
}

function layDuLieuTuLocal() {
    // biến chuyển đổi dữ liệu
    var newArr = localStorage.getItem('nhanVien');
    if (newArr != null) {
        // chuyển đổi dữ liệu về lại kiểu dữ liệu ban đầu
        var arr = JSON.parse(newArr);
        arrNhanVien = arr;
        renderGiaoDien();
    }
}
layDuLieuTuLocal();

function xoaNhanVien(tkNV) {
    var index = -1;
    for (var i = 0; i < arrNhanVien.length; i++) {
        if (tkNV == arrNhanVien[i].tknv) {
            index = i;
        }
        arrNhanVien.splice(index,1);
    }
    console.log(arrNhanVien);
    luuDuLieuLocal();
    renderGiaoDien();
}

function layThongTinNhanVien(tkNV) {
    var nhanVien = {};
    for (var i = 0; i < arrNhanVien.length; i++) {
        if (tkNV == arrNhanVien[i].tknv) {
            nhanVien = arrNhanVien[i];
        }
    }

    // lấy thông gán lên input
    for ( z = 0; z < arrInput.length; z++) {
        document.getElementById(arrInput[z]).value = nhanVien[arrInput[z]];
    }

    document.getElementById('tknv').readOnly = true; 
    document.getElementById('btnCapNhat').style.display = 'inline-block';
    document.getElementById('btnThemNV').style.display = 'none';
}

function capNhatNhanVien() {
    var nhanVien = new NhanVien();
    for (var i = 0; i < arrInput.length; i++) {
        var newNV = document.getElementById(arrInput[i]).value;
        nhanVien[arrInput[i]] = newNV;
    }

    for ( z = 0; z < arrNhanVien.length; z++) {
        if (nhanVien.tknv == arrNhanVien[z].tknv) {
            arrNhanVien[z] = nhanVien;
            document.getElementById('tknv').readOnly = false;
            document.getElementById('btnCapNhat').style.display = 'none';
            document.getElementById('btnThemNV').style.display = 'inline-block';
        }
    }

    // Validation
    var valid = true;

    valid = valid && kiemTraDuLieuRong(arrInput,arrNotiInput,nhanVien) && kiemtraDoDaiTaiKhoan(nhanVien.tknv,'tbTKNV') && kiemTraName(nhanVien.name,'tbTen') && kiemTraEmail(nhanVien.email,'tbEmail') && kiemTraPass(nhanVien.password,'tbMatKhau') && kiemTraLuongCB(nhanVien.luongCB,'tbLuongCB') && kiemTraGioLam(nhanVien.gioLam,'tbGiolam');
    console.log(valid);

    if (valid) {

        luuDuLieuLocal();
        renderGiaoDien();
    }
}

document.getElementById('btnCapNhat').onclick = capNhatNhanVien;

function timKiemNhanVien() {
    var keyword = event.target.value.toLowerCase().trim();
    var newKeyWord = removeVietnameseTones(keyword);

    var arrTimKiem = [];
    
    for (var i = 0; i < arrNhanVien.length; i++) {
        var newNhanVien = new NhanVien();
        Object.assign(newNhanVien,arrNhanVien[i]);

        var loaiNhanVien = newNhanVien.xepLoai().toLowerCase().trim();
        var newLoaiNhanVien = removeVietnameseTones(loaiNhanVien);

        if (newLoaiNhanVien.includes(newKeyWord)){
            arrTimKiem.push(arrNhanVien[i]);
        }
    }
    renderGiaoDien(arrTimKiem);
}