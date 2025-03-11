function vietHoaChuCaiDauTien(chuoi) {
    return chuoi.toLowerCase().split(' ').map(tu => tu.charAt(0).toUpperCase() + tu.slice(1)).join(' ');
}
console.log(vietHoaChuCaiDauTien("hello WORLD")); 
console.log(vietHoaChuCaiDauTien("rIKKei acaDEMy")); 