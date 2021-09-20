
document.getElementById("formulario").addEventListener("submit", function(evento){
    evento.preventDefault()
    var usuario = document.getElementById("usuario").value
    var pass = document.getElementById("contraseña").value


    if (usuario.length != 8 || usuario.search(/[0-9]/) < 0) {
        alert("El nombre de usuario tiene que ser de 8 numeros")
        return 
    }

    if (pass.length < 6 || pass.search(/[a-z]/i) < 0 || pass.search(/[0-9]/) < 0) {
        alert("La Contraseña debe tener al menos 6 caracteres, una letra y un número")
        return
    }

    this.submit()

})
