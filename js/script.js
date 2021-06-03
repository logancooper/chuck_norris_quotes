"use strict";

const modalElement = document.querySelector("#exampleModal");
//var myModal = new bootstrap.Modal(document.getElementById('myModal'), options)

const myModal = new bootstrap.Modal(modalElement);

fetch("https://api.chucknorris.io/jokes/random?category=dev")
    .then(function (response){
        return response.json();
    })
    .then(function (data){
        //do something
        const chuckQuote = document.querySelector("#chuckQuote");
        chuckQuote.innerText = data.value;
        myModal.show();
    })
    .catch(function (error){
        console.error("ERROR: ", error);
        return error;
    })