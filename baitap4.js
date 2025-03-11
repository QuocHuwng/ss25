function soNguyenTo(number) {
    if (!Number.isInteger(number)) {
        console.log("dữ liệu không hợp lệ");
        return;
    }
    if (number <= 1) {
        console.log("không phải là số nguyên tố");
        return;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            console.log("không phải là số nguyên tố");
            return;
        }
    }
    console.log("là số nguyên tố");
}

soNguyenTo(17); 
soNguyenTo(6); 
soNguyenTo("text"); 