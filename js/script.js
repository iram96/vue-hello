/*Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.*/

var app = new Vue({
    el: '#title',
    data: {
        message: 'Titolo esercizio',
        linkImg: 'https://cdn.pixabay.com/photo/2017/09/12/21/02/earth-2743662_960_720.png',
    }
})