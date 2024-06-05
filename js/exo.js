// =======================================A. Manipulation des tableaux:--------------------------
// Créez un tableau nommé fruits contenant les éléments suivants : "apple", "banana", "cherry".
let fruits = ["apple","banana","cherry"]
console.log(fruits);

// ajouter orange il se rajoute en dernier au tableau
fruits.push("orange")
console.log(fruits)

// enleve apple shift enleve le 1er mot
fruits.shift("fruits")
console.log(fruits)
// pour ajouter un fruit au début
fruits.unshift("raisin")
console.log(fruits);

// pour afficher la longueur du tableau length
console.log(fruits.length);

// Parcourez le tableau et affichez chaque fruit dans la console
fruits.forEach(function (dessert) {
console.log(dessert)
})

// =========================================B. Manipulation des objets:---------------------------------
// Créez un objet nommé person avec les propriétés suivantes : firstName (valeur "John"), lastName (valeur"Doe") et âge (valeur 30).
let person = {
    firstName: "John",
    lastName: "Doe",
    âge: 30
}
console.log(person);

// Ajoutez une propriété city avec la valeur "New York".
person.city ="New York"
console.log(person);
// Modifiez la valeur de la propriété age pour qu'elle soit 31.
person.âge = 31
console.log(person);
// Supprimez la propriété lastName.
delete person.lastName
console.log(person);
// Parcourez les propriétés de l'objet et affichez chaque clé et valeur dans la console.

for (let cle in person){
    if(person.hasOwnProperty (cle)){
        console.log(cle + ": "+person[cle])
    }
}



// =================================================C. Combinaison de tableaux et d'objets:---------------------
// Créez un tableau nommé people contenant trois objets,
// chacun représentant une personne avec les propriétés
// name et age.
let people = [
    {
    name :"pierre",
    age: 32,
    },
    {
name: "toto",
age: 54,
    },
    {
    name:"titi",
    age: 105
    },
]
console.log(people)

// Ajoutez un nouvel objet pour une personne nommée
// "David" avec l'âge de 40.
// ajoutez un nom
people.push({
    name: "David",
    age: 40
})
console.log(people)
console.log(people[1].age)

// filtrer
let filtrePeople = people.filter((person)=> person.name == "toto")
console.log(filtrePeople[0].age);
// Affichez l'âge de la deuxième personne dans le tableau.


// Parcourez le tableau et affichez le nom + age de chaque
// personne dans la console.

people.map((item) => console.log(item.name))
people.map((item) => console.log(item.age))



