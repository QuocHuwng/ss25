let arr = [];

function soChan(arr) {
    if (!Array.isArray(arr)) {
        console.log("Du lieu khong hop le");
        return;
    }

    let chan = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            chan.push(arr[i]);
        }
    }

    if (chan.length > 0) {
        console.log(chan.join(', '));
    } else {
        console.log("mang khong chua so chan");
    }
}

soChan([11, 4, 65, 6]); 
soChan([1, 3, 5, 17]);  
soChan("text");       