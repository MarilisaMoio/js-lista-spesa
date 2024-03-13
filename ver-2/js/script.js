//versione 2: dato l'array della spesa, stampare singolarmente gli elementi nel DOM con il WHILE

//lista di partenza
const list = [
    'Latte',
    'Cacao',
    'Insalata',
    'Carote',
    'Pomodori',
    'Piatti pronti'
];

//richiamo all'ul
const groceryContainer = document.querySelector(".groceries");

//counter e relativo ciclo while per l'inserimento nei li e stamp
let counter = 0;

while(counter < list.length){
    const thisItem = list[counter];
    groceryContainer.innerHTML += `<li>${thisItem}</li>`;
    counter++;
}