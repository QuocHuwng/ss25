function soNguyenDuong(arr) {
    if (!Array.isArray(arr)) {
        console.log("dữ liệu không hợp lệ");
        return;
    }
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        let number = arr[i];
        if (Number.isInteger(number) && number > 0) {
            count++;
        }
    }
    if (count > 0) {
        console.log(count);
    } else {
        console.log("không có số nguyên dương trong mảng");
    }
}

soNguyenDuong([4, 5.4, 6, -2]);
soNguyenDuong([1, 2, 5, 7, -8, 6]);
soNguyenDuong([1.2, -3, -6]);