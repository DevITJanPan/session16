// . Viết function tính thế kỷ của một năm nhập vào từ bàn phím. Biết thế kỷ thứ
// nhất tính từ năm 1 đến 100
function add() {
    let year=Number(prompt("Nhập năm:"));
    let century=Math.ceil(year/100);
    if(century==1){
        console.log("Thế kỷ thứ nhất");
    }else{
        console.log("Thế kỷ"+century);
    }   
}

add();