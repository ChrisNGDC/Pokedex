class Pokemon {
    constructor(posPokedex, nombre, tipos, descripcion, imagen) {
        this.posPokedex = posPokedex;
        this.nombre = nombre;
        this.tipos = tipos;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }
}

/* Estructura de pokemon

    new Pokemon(
        "XXX",
        "Nombre",
        ["Tipo1", "Tipo2"],
        "descripcion",
        "./images/pokemon/XXX.png",
    ),

*/


var pokemons = [
    new Pokemon(
        "001",
        "Bulbasaur",
        ["planta","veneno"],
        "Este Pokémon nace con una semilla en el lomo, que brota con el paso del tiempo.",
        "./images/pokemon/001.png",
    ),
    new Pokemon(
        "002",
        "Ivysaur",
        ["planta","veneno"],
        "Cuando le crece bastante el bulbo del lomo, pierde la capacidad de erguirse sobre las patas traseras.",
        "./images/pokemon/002.png",
    ),
    new Pokemon(
        "003",
        "Venusaur",
        ["planta","veneno"],
        "La planta florece cuando absorbe energía solar, lo cual le obliga a buscar siempre la luz del sol.",
        "./images/pokemon/003.png",
    ),
    new Pokemon(
        "004",
        "Charmander",
        ["fuego"],
        "Prefiere las cosas calientes. Dicen que cuando llueve le sale vapor de la punta de la cola.",
        "./images/pokemon/004.png",
    ),
    new Pokemon(
        "005",
        "Charmeleon",
        ["fuego"],
        "Este Pokémon de naturaleza agresiva ataca en combate con su cola llameante y hace trizas al rival con sus afiladas garras.",
        "./images/pokemon/005.png",
    ),
    new Pokemon(
        "006",
        "Charizard",
        ["fuego","volador"],
        "Escupe un fuego tan caliente que funde las rocas. Causa incendios forestales sin querer.",
        "./images/pokemon/006.png",
    ),
    new Pokemon(
        "007",
        "Squirtle",
        ["agua"],
        "Cuando retrae su largo cuello en el caparazón, dispara agua a una presión increíble.",
        "./images/pokemon/007.png",
    ),
    new Pokemon(
        "008",
        "Wartortle",
        ["agua"],
        "Se lo considera un símbolo de longevidad. Los ejemplares más ancianos tienen musgo sobre el caparazón.",
        "./images/pokemon/008.png",
    ),
    new Pokemon(
        "009",
        "Blastoise",
        ["agua"],
        "Para acabar con su enemigo, lo aplasta con el peso de su cuerpo. En momentos de apuro, se esconde en el caparazón.",
        "./images/pokemon/009.png",
    ),
    /*
    new Pokemon(
        "010",
        "Nombre",
        ["Tipo1", "Tipo2"],
        "descripcion",
        "./images/pokemon/010.png",
    ),
    */
    new Pokemon(
        "025",
        "Pikachu",
        ["electrico"],
        "Cuanto más potente es la energía eléctrica que genera este Pokémon, más suaves y elásticas se vuelven las bolsas de sus mejillas.",
        "./images/pokemon/025.png",
    ),
    /*
    new Pokemon(
        "026",
        "Nombre",
        ["Tipo1", "Tipo2"],
        "descripcion",
        "./images/pokemon/XXX.png",
    ),
    */
    new Pokemon(
        "150",
        "Mewtwo",
        ["psiquico"],
        "Su ADN es casi el mismo que el de Mew. Sin embargo, su tamaño y carácter son muy diferentes.",
        "./images/pokemon/150.png",
    ),
]