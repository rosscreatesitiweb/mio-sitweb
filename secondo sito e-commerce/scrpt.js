// Aggiungi prodotti al carrello
const addButtons = document.querySelectorAll('.aggiungi-carrello');
const carrelloContenuto = document.getElementById('carrello-contenuto');
let carrello = [];

function aggiungiAlCarrello(event) {
    const nomeProdotto = event.target.getAttribute('data-nome');
    const prezzoProdotto = event.target.getAttribute('data-prezzo');
    const prodotto = { nome: nomeProdotto, prezzo: prezzoProdotto };
    carrello.push(prodotto);
    mostraCarrello();
}

function mostraCarrello() {
    carrelloContenuto.innerHTML = '';
    carrello.forEach((prodotto) => {
        const li = document.createElement('li');
        li.textContent = prodotto.nome - €{prodotto.prezzo};
        carrelloContenuto.appendChild(li);
    });
}addButtons.forEach(button => {
    button.addEventListener('click', aggiungiAlCarrello);
});

// Checkout e visualizzazione pagamento
const checkoutButton = document.getElementById('checkout');
checkoutButton.addEventListener('click', () => {
    if (carrello.length > 0) {
        document.getElementById('pagamento').style.display = 'block';
    } else {
        alert('Il carrello è vuoto!');
    }
});

// Sistema di messaggistica
const inviaButton = document.getElementById('invia');
inviaButton.addEventListener('click', () => {
    const messaggio = document.getElementById('messaggio').value;
    alert(Messaggio inviato: ${messaggio});
});

// Sistema di valutazione
const valutaButton = document.getElementById('valuta');
valutaButton.addEventListener('click', () => {
    alert('Grazie per la tua valutazione!');
});
```
