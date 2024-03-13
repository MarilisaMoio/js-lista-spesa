//versione 1: dato l'array della spesa, stampare singolarmente gli elementi nel DOM con il FOR 

//lista di partenza
const list = [
    'Latte',
    'Cacao',
    'Insalata',
    'Carote',
    'Pomodori',
    'Piatti pronti'
];

//cattura dell'ul
const groceryContainer = document.querySelector(".groceries");

//stamp per ogni elemento
for (let i = 0; i < list.length; i++){
    const thisItem = list[i];
    groceryContainer.innerHTML += `<li>${thisItem}</li>`;
}