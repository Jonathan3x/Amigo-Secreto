let amigos = [];

function agregarAmigo() {
  let amigoUsuario = document.getElementById("amigo");
  let valorAmigo = amigoUsuario.value.trim();

  if (valorAmigo === "") {
    alert("Por favor, escribe un nombre para comenzar a jugar");
    return;
  }

  if (amigos.includes(valorAmigo)) {
    alert("Este amigo ya ha sido agregado.");
    return;
  }

  amigos.push(valorAmigo);
  limpiarInputUsuario();
  amigoUsuario.focus();
  crearLista();
  console.log(amigos);
}

function crearLista() {
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    let crearLista = document.createElement("li");
    crearLista.textContent = amigos[i];
    listaAmigos.appendChild(crearLista);
  }

  document.getElementById("botonSortear").disabled = false;
}

function sortearAmigo() {
  if (amigos.length < 2) {
    alert("No hay suficientes amigos para sortear.");
    return;
  }

  let resultadoAmigos = amigos[Math.floor(Math.random() * amigos.length)];
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `El amigo sorteado es: ${resultadoAmigos}`;

  document.getElementById("botonSortear").disabled = true;
}

function limpiarInputUsuario() {
  document.getElementById("amigo").value = "";
}

function limpiarListado() {
  amigos = [];
  crearLista();
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "";
  document.getElementById("botonSortear").disabled = true;
}

document.getElementById("amigo").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    agregarAmigo();
  }
});
