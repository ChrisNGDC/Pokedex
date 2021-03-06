class Pokemon {
    constructor(posPokedex, nombre, tipos, descripcion) {
        this.posPokedex = posPokedex;
        this.nombre = nombre;
        this.tipos = tipos;
        this.descripcion = descripcion;
    }
}

/* Estructura de pokemon

    new Pokemon(
        "XXX",
        "Nombre",
        ["Tipo1", "Tipo2"],
        "descripcion",
    ),

*/


var pokemons = [
    new Pokemon(
        "001",
        "Bulbasaur",
        ["planta","veneno"],
        "Este Pokémon nace con una semilla en el lomo, que brota con el paso del tiempo.",
    ),
    new Pokemon(
        "002",
        "Ivysaur",
        ["planta","veneno"],
        "Cuando le crece bastante el bulbo del lomo, pierde la capacidad de erguirse sobre las patas traseras.",
    ),
    new Pokemon(
        "003",
        "Venusaur",
        ["planta","veneno"],
        "La planta florece cuando absorbe energía solar, lo cual le obliga a buscar siempre la luz del sol.",
    ),
    new Pokemon(
        "004",
        "Charmander",
        ["fuego"],
        "Prefiere las cosas calientes. Dicen que cuando llueve le sale vapor de la punta de la cola.",
    ),
    new Pokemon(
        "005",
        "Charmeleon",
        ["fuego"],
        "Este Pokémon de naturaleza agresiva ataca en combate con su cola llameante y hace trizas al rival con sus afiladas garras.",
    ),
    new Pokemon(
        "006",
        "Charizard",
        ["fuego","volador"],
        "Escupe un fuego tan caliente que funde las rocas. Causa incendios forestales sin querer.",
    ),
    new Pokemon(
        "007",
        "Squirtle",
        ["agua"],
        "Cuando retrae su largo cuello en el caparazón, dispara agua a una presión increíble.",
    ),
    new Pokemon(
        "008",
        "Wartortle",
        ["agua"],
        "Se lo considera un símbolo de longevidad. Los ejemplares más ancianos tienen musgo sobre el caparazón.",
    ),
    new Pokemon(
        "009",
        "Blastoise",
        ["agua"],
        "Para acabar con su enemigo, lo aplasta con el peso de su cuerpo. En momentos de apuro, se esconde en el caparazón.",
    ),
    new Pokemon(
        "010",
        "Caterpie",
        ["bicho"],
        "descripcion",
    ),
    new Pokemon(
        "011",
        "Metapod",
        ["bicho"],
        "descripcion",
    ),
    new Pokemon(
        "012",
        "Butterfree",
        ["bicho","volador"],
        "descripcion",
    ),
    new Pokemon(
        "013",
        "Weedle",
        ["bicho","veneno"],
        "descripcion",
    ),
    new Pokemon(
        "014",
        "Kakuna",
        ["bicho","veneno"],
        "descripcion",
    ),
    new Pokemon(
        "015",
        "Beedrill",
        ["bicho","veneno"],
        "descripcion",
    ),
    new Pokemon(
        "016",
        "Pidgey",
        ["normal","volador"],
        "descripcion",
    ),
    new Pokemon(
        "017",
        "Pidgeotto",
        ["normal","volador"],
        "descripcion",
    ),
    new Pokemon(
        "018",
        "Pidgeot",
        ["normal","volador"],
        "descripcion",
    ),
    new Pokemon(
        "019",
        "Rattata",
        ["normal"],
        "descripcion",
    ),
    new Pokemon(
        "020",
        "Raticate",
        ["normal"],
        "descripcion",
    ),
    new Pokemon(
        "021",
        "Spearow",
        ["normal","volador"],
        "descripcion",
    ),
    new Pokemon(
        "022",
        "Fearow",
        ["normal","volador"],
        "descripcion",
    ),
    new Pokemon(
        "023",
        "Ekans",
        ["veneno"],
        "descripcion",
    ),
    new Pokemon(
        "024",
        "Arbok",
        ["veneno"],
        "descripcion",
    ),
    new Pokemon(
        "025",
        "Pikachu",
        ["electrico"],
        "Cuanto más potente es la energía eléctrica que genera este Pokémon, más suaves y elásticas se vuelven las bolsas de sus mejillas.",
    ),
    /*
    new Pokemon(
        "026",
        "Nombre",
        ["Tipo1", "Tipo2"],
        "descripcion",
    ),
    */
    new Pokemon(
        "150",
        "Mewtwo",
        ["psiquico"],
        "Su ADN es casi el mismo que el de Mew. Sin embargo, su tamaño y carácter son muy diferentes.",
    ),
]