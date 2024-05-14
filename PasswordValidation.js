function isStrongPassword(password, repeatedWords = []) {
  
  if (password.trim() === '') {
      return false;
  }

  
  for (let i = 0; i < password.length - 1; i++) {
      if (password[i] === password[i + 1]) {
          return false;
      }
  }


  for (const word of repeatedWords) {
      if (password.toLowerCase() === word.toLowerCase()) {
          return false;
      }
  }

  return true;
}


const password = "password123";
const repeatedWords = ["jethro", "12345678", "qwertyuiop","1-2-2020"];
if (isStrongPassword(password, repeatedWords)) {
  console.log("Password is valid.");
} else {
  console.log("Password is invalid.");
}
