let users = [];

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.(com|vn)$/;
    return emailRegex.test(email);
}

function registerEmail(email) {
    if (!isValidEmail(email)) {
        console.log("Email không hợp lệ!");
        return;
    }

    if (users.includes(email)) {
        console.log("Tài khoản đã tồn tại!");
    } else {
        users.push(email);
        console.log("Đăng ký thành công!");
    }
}

registerEmail("example@gmail.com");
registerEmail("example@gmail.com");
registerEmail("example@domain.vn");
registerEmail("invalid-email");