function Max(array) {
    let maxValue = array[0]; 
    
     for (let i = 1; i < array.length; i++) {
      if (array[i] > maxValue) {
        maxValue = array[i]; 
      }
    }
    
    return maxValue; 
  }
  let numbers = [5, 2, 9, 1, 7];
  let maxNumber = Max(numbers);
  console.log(maxNumber); 
  