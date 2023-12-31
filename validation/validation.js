var valid = true;
function kiemTraDuLieuRong(arrInput,arrNotiInput,nhanVien) {
    var valid = true;
    for (var z = 0; z < arrInput.length; z++) {
        if (nhanVien[arrInput[z]] == '') {
            valid = valid && false;
            document.getElementById(arrNotiInput[z]).style.display = 'inline-block';
            document.getElementById(arrNotiInput[z]).innerHTML = 'Vui lòng nhập dữ liệu';
        } else {
            valid = valid && true;
            document.getElementById(arrNotiInput[z]).style.display = 'none';
            document.getElementById(arrNotiInput[z]).innerHTML = '';
        }
    }
    return valid;
}

function kiemtraDoDaiTaiKhoan(valueTK,idNoti) {
    var valid = true;
    if (valueTK!== '') {
        if (valueTK.length < 4 || valueTK.length > 6) {
            valid = valid && false;
            document.getElementById(idNoti).style.display = 'inline-block';
            document.getElementById(idNoti).innerHTML = 'Độ dài tài khoản không được nhỏ hơn 4 và lớn hơn 6';
        }
    }
    return valid;
}

function kiemTraName(valueName,idNoti) {
    var valid = true;
    var regexChu = /^[A-Za-z]*$/;
    if (valueName !== '') {
        if (!regexChu.test(valueName)) {
            valid = valid && false;
            document.getElementById(idNoti).style.display = 'inline-block';
            document.getElementById(idNoti).innerHTML = 'Tên chỉ có thể là chữ';
        } 
    }
    return valid;
}

function kiemTraEmail(valueEmail,idNoti) {
    var valid = true;
    var regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (valueEmail !== '') {
        if (!regexEmail.test(valueEmail)) {
            valid = valid && false;
            document.getElementById(idNoti).style.display = 'inline-block';
            document.getElementById(idNoti).innerHTML = 'Định dạng email không đúng';
        } 
    }
    return valid;
}

function kiemTraPass(valuePass,idNoti) {
    var valid = true;
    var regexPass = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])((?=.*\W)|(?=.*_))^[^ ]+$/;
    if (valuePass !== '') {
        if (valuePass.length < 6 || valuePass.length > 10) {
            valid = valid && false;
            document.getElementById(idNoti).style.display = 'inline-block';
            document.getElementById(idNoti).innerHTML = 'Mật khẩu phải từ 6 đến 10 kí tự ';
        } else if (!regexPass.test(valuePass) ) {
            valid = valid && false;
            document.getElementById(idNoti).style.display = 'inline-block';
            document.getElementById(idNoti).innerHTML = 'Mật khẩu phải có ít nhất 1 kí tự in hoa, 1 chữ số và 1 kí tự đặc biệt';
        } 
    }
    return valid;
}

function kiemTraLuongCB(valueLuongCB,idNoti) {
    var valid = true;
    if (valueLuongCB !== '') {
        if (valueLuongCB < 1000000 || valueLuongCB > 20000000) {
            valid = valid && false;
            document.getElementById(idNoti).style.display = 'inline-block';
            document.getElementById(idNoti).innerHTML = 'Lương cơ bản phải từ 1.000.000 đến 20.000.000';
        }
    } 
    return valid;
}

function kiemTraGioLam(valueGioLam,idNoti) {
    var valid = true;
    if (valueGioLam !== '') {
        if (valueGioLam < 80 || valueGioLam > 200) {
            valid = valid && false;
            document.getElementById(idNoti).style.display = 'inline-block';
            document.getElementById(idNoti).innerHTML = 'Số giờ làm phải từ 80 đến 200 giờ';
        }
    }
    return valid;
}