// Inserisco l'array che specifica la mia lista della spesa
let listaSpesa = ['pane', 'verdura', 'zucchero', 'sale'];

// Richiamo il tag in html dentro il quale devo andare a stampare
const lista = document.getElementById('lista');

// Imposto il ciclo while per scorrere la lista
let i = 0;
while (i < listaSpesa.length) {

    // Imposto con una costante la stringa che deve essere stampata in html
    const element = `<li>${listaSpesa[i]}</li>`

    // Stampo in html la stringa
    lista.innerHTML += element;
    i++;
}