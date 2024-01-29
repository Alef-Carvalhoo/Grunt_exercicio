document.addEventListener('DOMContentLoaded', function (){
    document.getElementById('formulario').addEventListener('submit', function(evento){
        evento.preventDefault();
        Usuario = document.getElementById('nome').value;
        alert(Usuario);
    })
})