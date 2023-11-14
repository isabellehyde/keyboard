const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

const randomLetter = alphabet[Math.floor(Math.random() * 26)];
console.log(randomLetter)

const userChoice = document.body.addEventListener('keyup', function(event){
    console.log(event.key)
})

if (randomLetter === userChoice) {
    document.getElementById("secret").innerHTML = "SECRET KEY PRESSED " + userChoice;
}
