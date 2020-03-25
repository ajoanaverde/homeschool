// creer pluisieurs 'users' (objects) avec des diferentes 'ocupations' (tableaux)
// faire ceci de plusiers façons differentes 

var lesMartins = {
    "mae": {
        "name": "Elisabete",
        "age": 51,
        "ocupations": [
            "regard meurtrier",
            "ménage",
            "cuisine",
            "parler au telephone"
        ]
    },

    pai: {
        "name": "José",
        "age": 67,
        "ocupations": [
            "raller",
            "regarder la tele",
            "ménage (contrarié)"
        ]
    },

    eu: {
        "name": "Joana"
    }
}
console.log(lesMartins.mae.name);

console.log(lesMartins.pai["name"]);

lesMartins.mae.name = "Elisabete Maria";

console.log(lesMartins.mae.name);

console.log(lesMartins.eu);

lesMartins.eu["age"] = 26;

console.log(lesMartins.eu);