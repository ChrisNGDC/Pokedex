function crearLista(lista) {
    let nuevalista = lista.map(pokemon => `
                            <div class="col-3 p-0" id="P${pokemon.posPokedex}">
                            <div class="card m-1">
                                <a style="cursor:zoom-in" onclick="mostrarPokemon(${todos.indexOf(pokemon)})"><img src="${pokemon.imagen}" class="card-img-top" alt="..."></a>
                                <div class="card-body">
                                    <h5 class="card-title" style="font-size: 0.95rem;">${pokemon.nombre}</h5>
                                    <h6 class="card-title" id="tipos" style="overflow-wrap: normal;color: #FFF;text-shadow: 0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black;"></h6>
                                </div>
                            </div>`);
    return nuevalista;
}

let todos = pokemons

////////////////////////////
let normal = pokemons.filter(pokemon => pokemon.tipos.includes("normal"));
let lucha = pokemons.filter(pokemon => pokemon.tipos.includes("lucha"));
let volador = pokemons.filter(pokemon => pokemon.tipos.includes("volador"));
let veneno = pokemons.filter(pokemon => pokemon.tipos.includes("veneno"));
let tierra = pokemons.filter(pokemon => pokemon.tipos.includes("tierra"));
let roca = pokemons.filter(pokemon => pokemon.tipos.includes("roca"));
let bicho = pokemons.filter(pokemon => pokemon.tipos.includes("bicho"));
let fantasma = pokemons.filter(pokemon => pokemon.tipos.includes("fantasma"));
let hierro = pokemons.filter(pokemon => pokemon.tipos.includes("hierro"));
let fuego = pokemons.filter(pokemon => pokemon.tipos.includes("fuego"));
let agua = pokemons.filter(pokemon => pokemon.tipos.includes("agua"));
let planta = pokemons.filter(pokemon => pokemon.tipos.includes("planta"));
let electrico = pokemons.filter(pokemon => pokemon.tipos.includes("electrico"));
let psiquico = pokemons.filter(pokemon => pokemon.tipos.includes("psiquico"));
let hielo = pokemons.filter(pokemon => pokemon.tipos.includes("hielo"));
let dragon = pokemons.filter(pokemon => pokemon.tipos.includes("dragon"));
let siniestro = pokemons.filter(pokemon => pokemon.tipos.includes("siniestro"));
////////////////////////////

function limpiarLista() {
    document.querySelector("#lista").innerHTML = "";
    document.querySelectorAll("li a").forEach( selector => selector.classList.remove("active"));
}

function agregarALista(bloque) {
    document.querySelector("#lista").insertAdjacentHTML("beforeend", bloque);
}

function tipo(unTipo, color) {
    return `<span style="font-size: 0.8rem;background-color:`+ color +`; padding: 0rem 0.3rem 0.25rem 0.3rem; margin: 0 0.1rem; border-radius: 10px;">`+ unTipo +` </span>`;
}

const tipos = {
    "normal": tipo("Normal", "lightgrey"),
    "lucha": tipo("Lucha", "red"),
    "volador": tipo("Volador", "MediumSlateBlue"),
    "veneno": tipo("Veneno", "violet"),
    "tierra": tipo("Tierra", "Khaki"),
    "roca": tipo("Roca", "Goldenrod"),
    "bicho": tipo("Bicho", "YellowGreen"),
    "fantasma": tipo("Fantasma", "DarkSlateBlue"),
    "hierro": tipo("Hierro", "LightSteelBlue"),
    "fuego": tipo("Fuego", "orange"),
    "agua": tipo("Agua", "DodgerBlue"),
    "planta": tipo("Planta", "LawnGreen"),
    "electrico": tipo("Electrico", "yellow"),
    "psiquico": tipo("Psiquico", "pink"),
    "hielo": tipo("Hielo", "lightblue"),
    "dragon": tipo("Dragon", "BlueViolet"),
    "siniestro": tipo("Siniestro", "SaddleBrown"),

}

function ponerTipos(listaPoke) {
    let htmlTipos = document.querySelectorAll("#lista #tipos");
    let listaTipos = listaPoke.map(pokemon => pokemon.tipos);
    for (let j = 0; j < htmlTipos.length; j++) {
        listaTipos[j].forEach(unTipo => htmlTipos[j].insertAdjacentHTML("beforeend", tipos[unTipo]));
    }
}

////////////////////////////
function mostrar(listaTipo, nombreTipo) {
    limpiarLista();
    crearLista(listaTipo).forEach( bloque => agregarALista(bloque));
    ponerTipos(listaTipo);
    document.querySelector("#" + nombreTipo).classList.add("active");
}

function buscar(pokemonE) {
    let nombrePokemon = pokemonE.value.toLowerCase();
    let pokemones = pokemons.filter(pokemon => pokemon.nombre.toLowerCase().includes(nombrePokemon));
    limpiarLista();
    crearLista(pokemones).forEach( bloque => agregarALista(bloque));
    ponerTipos(pokemones);
}
////////////////////////////

function pokemonAMostrar(pokemon) {
    return  `
    <div class="card m-1 text-center" id="pokemon">
        <h4 class="card-title">N.º ${pokemon.posPokedex}</h4>
        <a style="cursor:zoom-out" onclick="quitarPokemon()"><img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.posPokedex}.png" class="card-img-top" alt="..."></a>
        <div class="card-body p-3">
            <h4 class="card-title">${pokemon.nombre}</h4>
            <h5 class="card-title" id="tipos" style="color: #FFF;text-shadow: 0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black;"></h5>
            <h6 class="m-0">${pokemon.descripcion}</h6>
        </div>
    </div>`
}

const terminar = document.querySelector("#final");
terminar.style.display = "none";

function quitarPokemon() {
    if (document.querySelector("#pokemon") != null) {
        let pokemon = document.querySelector("#pokemon");
        pokemon.parentNode.removeChild(pokemon)
    }
    terminar.style.display = "none";
}

function mostrarPokemon(posEnLista) {
    quitarPokemon();
    document.querySelector("#carrito").insertAdjacentHTML("afterbegin", pokemonAMostrar(todos[posEnLista]));
    let htmlTipos = document.querySelector("#carrito #tipos");
    let listaTipos = todos[posEnLista].tipos;
    listaTipos.forEach(unTipo => htmlTipos.insertAdjacentHTML("beforeend", tipos[unTipo]));
    terminar.style.display = "block";
    document.querySelector("#P" + todos[posEnLista].posPokedex).scrollIntoView({behavior: 'smooth'});
}