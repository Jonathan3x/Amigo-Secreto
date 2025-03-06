let amigos = [];

function agregarAmigo() {
  let amigoUsuario = document.getElementById("amigo");
  let valorAmigo = amigoUsuario.value.trim();

  if (valorAmigo === "") {
    alert("Por favor, escribe un nombre para comenzar a jugar");
    return;
  }

  amigos.push(valorAmigo);
  limpiarInputUsuario();
  amigoUsuario.focus();
  crearLista();
  console.log(amigos);
}

function crearLista() {
  listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    let crearLista = document.createElement("li");
    crearLista.textContent = amigos[i];
    listaAmigos.appendChild(crearLista);
  }
}

function sortearAmigo() {
  if (amigos.length < 2) {
    alert("No hay amigos para sortear");
    return;
  }

  let resultadoAmigos = amigos[Math.floor(Math.random() * amigos.length)];
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `El amigo sorteado es: ${resultadoAmigos}`;

  let limpiarLista = document.getElementById("listaAmigos");
  limpiarLista.innerHTML = "";

  document.getElementById("botonSortear").disabled = true;
}

function limpiarInputUsuario() {
  document.getElementById("amigo").value = "";
}

document.getElementById("amigo").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    agregarAmigo(); 
  }
});
