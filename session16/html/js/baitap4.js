// Cho chuỗi dài hơn 15 kỹ tự, viết function cắt chuỗi, lấy ra 10 ký tự đầu tiên 
// và thêm vào dấu “…” ở cuối chuỗi
function string(arr){
    if(arr.length=15){
        return arr.split("").splice(0,10).join("");
    }
}
let arrInt=prompt("Nhập vào 1 chuỗi kí tự:");
console.log(string(arrInt)+("..."));