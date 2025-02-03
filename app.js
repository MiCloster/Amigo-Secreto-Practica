// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

//Función que agrega al nuevo amigo a la lista
function agregarAmigoALista(nuevoAmigo){
    let listaAmigos = document.getElementById("listaAmigos");
    let li = document.createElement("li");
    li.innerHTML = nuevoAmigo;
    listaAmigos.appendChild(li);
}

//Función que agrega un nuevo amigo.
function agregarAmigo(){
    let nombreAmigo = document.getElementById("amigo").value;
    
    if (nombreAmigo == ""){
        alert("Debe ingresar un nombre");}
    else{
        amigos.push(nombreAmigo);
        agregarAmigoALista(nombreAmigo);

    }
}

//Función que sortea un amigo.
function sortearAmigo(){
    let numeroRandom = Math.floor(Math.random() * amigos.length);
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = amigos[numeroRandom];
}