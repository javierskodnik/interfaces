var beep = document.querySelectorAll("beep")

for(var i = 0; i < beep.length; i ++){
    beep[i].addEventListener("click", function(){
        this.classList.toggle("resaltado")
    })
}