function isPalindrome(input) {
    if (typeof input !== "string") {
        console.log("dữ liệu không hợp lệ");
        return;
    }
    let reverseInput = input.split("").reverse().join("");
    return input === reverseInput;
}

let userInput = prompt("Nhập vào một chuỗi ký tự:");
if (isPalindrome(userInput)) {
    console.log("là chuỗi đối xứng");
} else {
    console.log("không phải chuỗi đối xứng");
}