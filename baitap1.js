let arr = [];

function findMin(arr){
if(!Array.isArray(arr)){
    console.log("du lieu khong hop le");
    return;
}
if(arr.length==0){
    console.log("mang khong chua phan tu");
    return;
}
let minElement =arr[0];
for (let i = 0; i < arr.length; i++) {
    if(minElement >arr[i]){
        minElement = arr[i];
    }
    
}
console.log("so nho nhat trong mang la :", minElement);

return minElement;
}
findMin([2, 4, 8, 1, 9]);
findMin([]);
findMin("abc");
findMin([5, 2, 7, 5, 4]);