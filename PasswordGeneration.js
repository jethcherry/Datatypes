function generatePass(firstName, lastName) {
    const firstNameThree = firstName.slice(0, 3);
    const lastNameThree = lastName.slice(-3);
    const password = firstNameThree + lastNameThree + "@2024";
    return password;
}


const firstName = "jethro";
const lastName = "Cheruiyot";
const generatedPassword = generatePass(firstName, lastName);
console.log("Generated Password:", generatedPassword);
