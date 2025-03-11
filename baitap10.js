function chooseProduct(products, cart) {
    const productName = prompt("Nhập tên sản phẩm bạn muốn mua");
    let productFound = false;

    for (let i = 0; i < products.length; i++) {
        if (productName === products[i][0]) {
            console.log(products[i][0]);
            productFound = true;
            cart[i][0] = productName;
            cart[i][1]++;
            cart[i][2] = cart[i][1] * products[i][2];
        }
    }

    if (productFound) {
        console.log("Đã thêm vào giỏ hàng 1 sản phẩm");
    } else {
        console.log("Sản phẩm không có trong cửa hàng");
    }
}

const products = [
    ["mì tôm", 5, 5000],
    ["bánh mì", 12, 15000],
    ["bánh bao", 5, 8000],
    ["mèn mén", 30, 20000]
];

const cart = Array(products.length).fill(["", 0, 0]);

while (true) {
    console.log("1. Xem danh sách sản phẩm");
    console.log("2. Chọn sản phẩm thêm vào giỏ hàng");
    console.log("3. Tổng tiền và hóa đơn");
    console.log("4. Thoát");

    const choice = +prompt("Nhập lựa chọn của bạn: ");

    switch (choice) {
        case 1:
            console.table(products);
            break;
        case 2:
            chooseProduct(products, cart);
            break;
        case 3:
            let totalAmount = 0;
            console.table(cart);
            for (let i = 0; i < cart.length; i++) {
                totalAmount += cart[i][2];
            }
            console.log("Tổng tiền là: " + totalAmount);
            break;
        case 4:
            console.log("Thoát chương trình");
            return;
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng chọn lại.");
    }
}