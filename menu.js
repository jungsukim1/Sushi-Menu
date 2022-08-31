const toggleButton = document.getElementsByClassName('toggle-button')[0];
const popup = document.getElementById("popup");
const popupcontainer = document.getElementById("popupcontainer");
const topnav = document.getElementById("topnav");
const navbar = document.getElementById("navbar");
const gluten = document.getElementById("gluten");
const soy = document.getElementById("soy");
const egg = document.getElementById("egg");
const dairy = document.getElementById("dairy");
const sesame = document.getElementById("sesame");
const shellfish = document.getElementById("shellfish");
const vegan = document.getElementById("vegan");
const vegetarian = document.getElementById("vegetarian");
const greenonion = document.getElementById("greenonion");
const msg = document.getElementById("msg");
const avocado = document.getElementById("avocado");
const GLUTENFOODS = ["ramen", "takowasabi", "karaagedonburi", "chashudonburi", "originaltakoyaki", 
"kimchitakoyaki", "porkgyoza", "veggyoza", "Segg", "Sbeancake", "Sscallop", "Smasago", "Stobiko", "Sikura", "Sunagi", "Swagyu", "unagi", "kimchisashimi", "regualrsashimi",
"deluxesashimi", "cowboy", "kawari", "oyster", "beeftataki", "dynamiteroll", "volcanoroll", "yamroll", "californiaroll", "rainbowroll", "signatureroll", "philadelphiaroll",
"unagiroll", "specialrolls", "sauteedlongbean", "teriyakichicken", "magicsteak", "teriyakibeef", "steamedrice", "chickenfriedrice", "grilledsalmon", "grilledscallop",
"grilledshrimp", "tempura", "Sscallopspecial"];
const SOYFOODS = [""

]
const EGGFOODS = ["ramen", "karaagedonburi", "takoyaki", "Segg", "Ssearedsalmon", "Ssearedtuna", 
"Sscallop", "Sscallopspecial", "Slobster", "regualrsashimi", "deluxesashimi", "hanabi", "kawari",
"greensalad", "seaweedsalad", "lobstersalad", "dynamiteroll", "volcanoroll", "yamroll", "californiaroll",
"spicysalmonroll", "spicytunaroll", "signatureroll", "lobsterroll", "spicycrunchroll",
"benihanaroll", "hotbeefroll", "hotcaliroll", "vegetableroll", "maledragonroll", "femaledragonroll",
"kissdragonroll", "jaymakroll", "togarashiroll", "teriyakichicken", "magicsteak", "teriyakibeef",
"steamedrice", "chickenfriedrice", "misoblackcod", "grilledscallop", "grilledshrimp", "yumyamfries",
"gingerbeef", "ikayaki", "potatocake", "chickenkaraage", "calamaritempura", "squidlegs"
]
const DAIRYFOOD = ["takoyaki", "cowboy", "dynamiteroll", "volcanoroll", "yamroll", "signatureroll", "philadelphiaroll",
"mangoroll", "lobsterroll", "benihanaroll", "midoriroll", "hotbeefroll", "hotcaliroll", "vegetableroll", "maledragonroll",
"femaledragonroll", "kissdragonroll", "goldendragonroll", "togarashiroll", "tigerroll", "teriyakichicken", "magicsteak",
"teriyakibeef", "steamedrice", "chickenfriedrice", "grilledscallop", "grilledshrimp", "shrimptempura", "yamtempura", "broccolitempura",
"asparagustempura", "avocadotempura", "gingerbeef", "gingershrimp", "ikayaki", "calamaritempura"
];
const SESAMEFOOD = ["ramen", "seaweed", "pickledcucumber", "gyoza", "Sunagi", "unagi", "greensalad", "seaweedsalad", "lobstersalad", "dynamiteroll", 
"volcanoroll", "avocadorolll", "cucumberroll", "yamroll", "californiaroll", "spicysalmonroll", "spicytunaroll", "philadelphiaroll", "unagiroll",
"spicycrunchroll", "hotbeefroll", "jaymakroll", "togarashiroll", "tigerroll", "sauteedlongbean", "teriyakichicken", "magicsteak",
"teriyakibeef", "steamedrice", "chickenfriedrice", "avocadotempura", "gingerbeef"
];
const SHELLFISHFOOD = ["kimchi", "takowasabi", "takoyaki", "Sshrimp", "Soctupus", "Sscallop", "Sscallopspecial", "Slobster", "scallop", "octopus",
"kimchisashimi", "regualrsashimi", "deluxesashimi", "cowboy", "oyster", "lobstersalad", "dynamiteroll", "volcanoroll", "californiaroll", "rainbowroll",
"signatureroll", "mangoroll", "lobsterroll", "spicycrunchroll", "hotcaliroll", "maledragonroll", "femaledragonroll", "kissdragonroll", "goldendragonroll",
"sauteedlongbean", "grilledscallop", "grilledshrimp", "shrimptempura", "yamtempura", "broccolitempura", "asparagustempura", "gingershrimp", "ikayaki", 
"squidlegs"
]

let GLUTTENALLERGY = false;
let SOYALLERGY = false;
let EGGALLERGY = false;
let DAIRYALLERGY = false;
let SESAMEALLERGY = false;
let SHELLFISHALLERGY = false;
let VEGAN = false;
let VEGATARIAN = false;
let GREENONIONALLERGY = false;
let MSGALLERGY = false;
let AVOCADOALLERGY = false;

toggleButton.addEventListener('click', () =>{
    topnav.classList.toggle('active');
});

function openPopup(){
    popup.classList.add("open-popup");
    popupcontainer.classList.add("turnoff");

}

function closePopup(){
    popup.classList.remove("open-popup");
    popupcontainer.classList.remove("turnoff");
    navbar.classList.add("topnavsticky");
    checkAllergy();
}

window.onload = openPopup();

function checkAllergy(){
    if(gluten.checked == true){
        GLUTTENALLERGY = true;
        glutenAllergy(GLUTTENALLERGY);
    }else if(soy.checked == true){
        let SOYALLERGY = true;
        soyAllergy(SOYALLERGY);
    }else if(egg.checked == true){
        let EGGALLERGY = true;
        eggAllergy(EGGALLERGY);
    }else if(dairy.checked == true){
        let DAIRYALLERGY = true;
        dairyAllergy(DAIRYALLERGY);
    }else if(sesame.checked == true){
        let SESAMEALLERGY = true;
        sesameAllergy(SESAMEALLERGY);
    }else if(shellfish.checked == true){
        let SHELLFISHALLERGY = true;
        shellfishAllergy(SHELLFISHALLERGY);
    }else if(vegan.checked == true){
        let VEGAN = true;
        veganDiet(VEGAN);
    }else if(vegetarian.checked == true){
        let VEGATARIAN = true;
        vegetarianDiet(VEGATARIAN);
    }else if(greenonion.checked == true){
        let GREENONIONALLERGY = true;
        greenonionAllergy(GREENONIONALLERGY);
    }else if(msg.checked == true){
        let MSGALLERGY = true;
        msgAllergy(MSGALLERGY);
    }else if(avocado.checked == true){
        let AVOCADOALLERGY = true;
        avocadoAllergy(AVOCADOALLERGY);
    }
}

function glutenAllergy(allergy){
    if(allergy == false){
        alert("Error!");
    }

    for(let i = 0; i < GLUTENFOODS.length; i++){
        if(GLUTENFOODS[i] === "ramen" || GLUTENFOODS[i] === "tempura" || GLUTENFOODS[i] === "specialrolls"){
            let parent = document.getElementById(GLUTENFOODS[i]).childNodes;
            for(let i = 0; i<parent.length; i++){
                if(parent[i].nodeName.toLocaleLowerCase() == 'div'){
                    parent[i].style.borderColor = 'red';
                }
            }
        }
        document.getElementById(GLUTENFOODS[i]).style.border = '0.2rem solid red';
    }
}

function eggAllergy(allergy){
    if(allergy == false){
        alert("Error!");
    }

    for(let i = 0; i < EGGFOODS.length; i++){
        if(EGGFOODS[i] === "ramen"){
            let parent = document.getElementById(EGGFOODS[i]).childNodes;
            for(let i = 0; i<parent.length; i++){
                if(parent[i].nodeName.toLocaleLowerCase() == 'div'){
                    parent[i].style.borderColor = 'red';
                }
            }
        }
        document.getElementById(EGGFOODS[i]).style.border = '0.2rem solid red';
    }
}

function sesameAllergy(allergy){
    if(allergy == false){
        alert("Error!");
    }

    for(let i = 0; i < SESAMEFOOD.length; i++){
        if(SESAMEFOOD[i] === "gyoza" || SESAMEFOOD[i] === "ramen"){
            let parent = document.getElementById(SESAMEFOOD[i]).childNodes;
            for(let i = 0; i<parent.length; i++){
                if(parent[i].nodeName.toLocaleLowerCase() == 'div'){
                    parent[i].style.borderColor = 'red';
                }
            }
        }
        document.getElementById(SESAMEFOOD[i]).style.border = '0.2rem solid red';
    }
}

function dairyAllergy(allergy){
    if(allergy == false){
        alert("Error!");
    }

    for(let i = 0; i < DAIRYFOOD.length; i++){
        if(DAIRYFOOD[i] === "takoyaki"){
            let parent = document.getElementById(DAIRYFOOD[i]).childNodes;
            for(let i = 0; i<parent.length; i++){
                if(parent[i].nodeName.toLocaleLowerCase() == 'div'){
                    parent[i].style.borderColor = 'red';
                }
            }
        }
        document.getElementById(DAIRYFOOD[i]).style.border = '0.2rem solid red';
    }
}

function shellfishAllergy(allergy){
    if(allergy == false){
        alert("Error!");
    }

    for(let i = 0; i < SHELLFISHFOOD.length; i++){
        if(SHELLFISHFOOD[i] === "takoyaki"){
            let parent = document.getElementById(SHELLFISHFOOD[i]).childNodes;
            for(let i = 0; i<parent.length; i++){
                if(parent[i].nodeName.toLocaleLowerCase() == 'div'){
                    parent[i].style.borderColor = 'red';
                }
            }
        }
        document.getElementById(SHELLFISHFOOD[i]).style.border = '0.2rem solid red';
    }
}