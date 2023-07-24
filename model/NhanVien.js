/**
 * Mục đích: Lớp đối tượng nhân viên
 * Người tạo: Thuần
 * Ngày: 22/07/2023
 * Version: 1.0
 */

function NhanVien () {
    this.tknv = '';
    this.name = '';
    this.email = '';
    this.password = '';
    this.datepicker = '';
    this.luongCB = '';
    this.chucvu = '';
    this.gioLam = '';
    // phương thức
    this.tinhTongLuong = function() {
        var tong = 0 ;
        switch (this.chucvu) {
            case 'S': tong = this.luongCB * 3; break;
            case 'TP': tong = this.luongCB * 2; break;
            case 'NV': tong = this.luongCB * 1; break;
        }
        return tong;
    };
    this.xepLoai = function() {
        var loai = '';
        if (this.gioLam >= 192) {
            loai = 'Xuất sắc';
        } else if (this.gioLam >= 176) {
            loai = 'Giỏi';
        } else if (this.gioLam >= 160) {
            loai = 'Khá';
        } else {
            loai = 'Trung bình';
        }
        return loai;
    }
}