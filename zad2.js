function getPassword(){
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const specialCharacters = '!@#$%^&*()-_=+[]{}|;:,.<>?';

const allChars = lowercaseLetters + uppercaseLetters + numbers + specialCharacters

const passwordLength = Math.floor(Math.random() * 9 + 8)

//Losujemy po jednym losowym znaku z kazdej wymaganej kategorii aby spelnic warunki

const randomUpperCase = uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)]
const randomLowerCase = lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)]
const randomNumber = numbers[Math.floor(Math.random() * numbers.length)]
const randomSpecialChar = specialCharacters[Math.floor(Math.random() * specialCharacters.length)]

//Uzupelniamy haslo losowymi znakami

const missingChars = passwordLength - 4
const randomChars = Array.from({ length: missingChars }, () => allChars[Math.floor(Math.random() * allChars.length)]);

const password = randomUpperCase + randomLowerCase + randomNumber + randomSpecialChar + randomChars

//Mieszamy haslo dla mniejszej powtarzalnosci
const passwordArray = password.split('')
for (let i = 0; i < passwordArray.length; i++){
    const j = Math.floor(Math.random() * (passwordLength + 1));
    [passwordArray[i], passwordArray[j]] = [passwordArray[j], passwordArray[i]];
}

return finalPassword = passwordArray.join('')
}

console.log(getPassword)
