let nguoiDung = [];

function laEmailHopLe(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.(com|vn)$/;
    return emailRegex.test(email);
}

function dangKyEmail(email) {
    if (!laEmailHopLe(email)) {
        console.log("Email không hợp lệ!");
        return;
    }

    if (nguoiDung.includes(email)) {
        console.log("Tài khoản đã tồn tại!");
    } else {
        nguoiDung.push(email);
        console.log("Đăng ký thành công!");
    }
}

const email = prompt("Nhập email của bạn:");
dangKyEmail(email);
