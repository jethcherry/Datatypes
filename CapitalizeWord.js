function capitalize(inputString) {
    const words = inputString.split(" ");

    const capitalizedStrings = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });

    const resultString = capitalizedStrings.join(" ");
    return resultString;
}


const String = "how are you doing ";
const result = capitalize(String);
console.log("Capitalized Words:", result);
