function capitalize(inputString) {
    const words = inputString.split(" ");

    const capitalizedStrings = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });

    const resultString = capitalizedStrings.join(" ");
    return resultString;
}


const inputString = "how are you doing ";
const result = capitalize(inputString);
console.log("Capitalized Words:", result);
