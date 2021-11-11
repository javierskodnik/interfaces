document.getElementById("formulario").addEventListener("submit", function(evento){
    evento.preventDefault()
    console.log(evento)
    localStorage.setItem("nombre", document.getElementById("nombre").value)
    localStorage.setItem("usuario", document.getElementById("usuario").value)
    var usuario = document.getElementById("usuario").value
    var pass = document.getElementById("contraseña").value
   
    if (!/^[0-9]+$/.test(usuario)) { 
        alert("El nombre de usuario tiene que ser numérico")
        return 
    }

    if (pass.length < 4) {
        alert("La Contraseña debe tener al menos 4 caracteres")
        return
    }
    
    this.submit()

})




