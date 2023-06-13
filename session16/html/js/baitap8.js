// Viết function trả ra trung bình cộng của một mảng số
function add(array) {
    if (array.length === 0) {
      return 0;
    }
    
    let sum = 0;
    
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    
    let average = sum / array.length;
    return average;
  }
  let numbers = [1, 2, 3, 4, 5];
  let averageNumber = add(numbers);
  console.log(averageNumber);
  