// function kiểm tra số chẵn-lẻ
function add(number) {
    if (number % 2 === 0) {
      return 'Số chẵn';
    } else {
      return 'Số lẻ';
    }
  }
  
  console.log(add(1)); 
  console.log(add(2)); 
  
//kiểm tra số nguyên tố:

function add1(number) {
    if (number <= 1) {
      return false;
    }
    
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    
    return true;
  }
  console.log(add1(3)); 
  console.log(add1(8));

//   kiểm tra số hoàn hảo:

function add2(number) {
    let sum = 0;
    
    for (let i = 1; i < number; i++) {
      if (number % i === 0) {
        sum += i;
      }
    }
    
    return sum === number;
  }
  
  console.log(add2(6)); 
  console.log(add2(10));
  
  