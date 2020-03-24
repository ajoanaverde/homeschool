// creer pluisieurs 'users' (objects) avec des diferentes 'ocupations' (tableaux)
// faire ceci de plusiers façons differentes 

var mae = {
    "name": "Elisabete",
    "age": 51,
    "ocupations": [
        "regard meurtrier",
        "ménage",
        "cuisine",
        "parler au telephone"
    ]
}

var pai = {
    "name": "José",
    "age": 67,
    "ocupations": [
        "raller",
        "regarder la tele",
        "ménage (contrarié)"
    ]
}

var eu = {
    "name": "Joana"
}

console.log(mae.name); 

console.log(pai["name"]);

mae.name = "Elisabete Maria";

console.log(mae.name); 

console.log(eu);

eu["age"] = 26;

console.log(eu);