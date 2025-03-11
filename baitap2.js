function sum(a, b) {
    if (Number.isInteger(a) && Number.isInteger(b)) {
        return a + b;
    }
    console.log("Du lieu khong hop le")
}
console.log(`ket qua:`, sum(2, 6));
console.log(`ket qua:`, sum(3, "text"));
console.log(`ket qua:`, sum(7, -7));
console.log(`ket qua:`, sum(4.3, 3));