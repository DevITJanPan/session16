function add(word) {
  // Lấy chữ cái đầu tiên và viết hoa
 let firstLetter = word.charAt(0).toUpperCase();
  
  // Lấy phần còn lại của từ và viết thường
 let restOfWord = word.slice(1).toLowerCase();

  // Kết hợp chữ cái đầu tiên và phần còn lại
 let capitalizedWord = firstLetter + restOfWord;

  // Trả về từ đã chuẩn hóa
  return capitalizedWord;
}

// sử dụng hàm
let originalWord = "rIkKEi";
let normalizedWord = add(originalWord);
console.log(normalizedWord); // Kết quả: "Rikkei"

  