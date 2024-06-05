// DECLARATION
function soustraction (a,b){
let resultat = a - b
return resultat
}
let a = 5

let res = soustraction (6,9)
console.log(res)

let substract = function(x,y){
    return x - y
    console.log("soustraction")
}
let res1 = substract(9,8)
console.log(res1);


// -----------MULTIPLICATION FONCTION FLECHE
const multiplication= (s,f) =>{
    let resultat = s * f
    console.log(resultat);
}
const sansArg =( )=> {
    console.log(3,7);
}
multiplication(3,7)
sansArg()


// -------index HTML <button id='btn'> Click</button>
let button = document.getElementById("btn")
button.addEventListener("click",()=> {
console.log("bouton cliqué");
})

// ----------------les objets et tableaux

let utilisateur ={
    email:"exemple@gmail.com",
    nom: "pierre",
    prenom: "paul",
    âge: 33,
    tel: " 06 70 70 60 60",
    adresse:{
        rue: "jean mermoz",
        ville:"Pau",
        codePostale: 64000

    },
    competences: [
        "HTML",
        "CSS",
        "PHP",
        "PYTHON",
        "JS",
        "ANGULAR",
        "FIGMA"
    ]
}
console.log(utilisateur.competences);
utilisateur.permis = "B"
let cles = Object.keys(utilisateur.adresse);
console.log(cles);

// boucles let in
for(let cle in utilisateur){
    console.log(cle);
}

// -----------------boucles let of
for(let element of utilisateur.competences){
    console.log(element);
}

utilisateur.competences.forEach(e => {
    console.log("competences est", e)
})
for (let i=0; i<=utilisateur.competences.length; i++) {
    // console.log(utilisateur.competences[i])
}
utilisateur.competences.map(competences => console.log(competences))


// ----------------FILTER
let competences = utilisateur.competences
let resultat = competences.filter((item) => item === 'HTML' || item === 'JS')
console.log(resultat)
let res2 = competences.find(el => el === 'JS')
 console.log(res2)
 let index = competences.indexOf('JS')
 console.log("index de JS est ",index)


// ------TABLEAUX
let array1 =[
    "HTML",
        "CSS",
        "PHP",
]

let array2 =[
    "PYTHON",
    "JS",
    "ANGULAR",
    "FIGMA"
]
console.log(array1)
console.log(array2)

// concat
let array3 = array1.concat(array2)
console.log(array3);


let array = []
array1.map(item => array.push(item))
array2.map(item => array.push(item))
console.log(array)


