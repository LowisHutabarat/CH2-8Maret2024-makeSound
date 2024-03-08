function handleClick(){
    alert("Ini Button di Klik");
}

var drumButtons = document.querySelectorAll("button");
console.log(drumButtons);

for(i=0; i<drumButtons.length; i++) {
    drumButtons[i].addEventListener("click",function() {
        
        let btnInnerHTML = this.innerHTML;

        makeSound(btnInnerHTML);

        buttonAnimation(btnInnerHTML)
    });
}

//Deteksi Keyboard yang ditekan

document.addEventListener ("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
            case "w" :
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
                break;
            case "a" :
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
                break;
            case "s" :
                var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
                break;
            case "d" :
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
                break;
            case "j" :
                var audio = new Audio("sounds/snare.mp3");
                audio.play();
                break;
            case "k" :
                var audio = new Audio("sounds/crash.mp3");
                audio.play();
                break;
            case "l" :
                var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;
            default:
                alert("There is No Button")
        }
}

function buttonAnimation(key) {
let activeButton = document.querySelector("." + key)
activeButton.classList.add("pressed");
activeButton.classList.add("white");
// classlist.add kelas dri css yang sudah ada untuk diapply

setTimeout(function() {
    activeButton.classList.remove("pressed")
    activeButton.classList.remove("white")
}, 100);
}
