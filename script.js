// Game container
let game = document.querySelector(".game");
// 4 buttons
let buttonShow = document.querySelector(".show");
let buttonDouble = document.querySelector(".double");
let buttonShuffle = document.querySelector(".shuffle");
let buttonFlip = document.querySelector(".flip");
// Array containing image URLs
let url = "https://cdn.glitch.global/0911b48a-f615-45b4-9429-40d8a3a0c020/";
let cards = [
    "image-1.jpg?v=1710262523970",
    "image-2.jpg?v=1710262541897",
    "image-3.jpg?v=1710262558041",
    "image-4.jpg?v=1710262578920",
    "image-5.jpg?v=1710262593235",
    "image-6.jpg?v=1710262616444",
    "image-7.jpg?v=1710262628170",
    "image-8.jpg?v=1710262638896",
];

// Button to Show Deck
buttonShow.onclick = function() {
    // Log message
    console.log("Showing the deck...");
    // For of loop
    for (let card of cards) {
        game.insertAdjacentHTML("beforeend",
            "<div style='background-image: url(" + url +
            card +
            ")' class='card'>");
    }
};

buttonDouble.onclick = function () {
    console.log("Deck has" + cards.length + " cards.");
    for (let card of cards) {
        if (cards.length !== 16) {
            cards.push(card);
            game.insertAdjacentHTML("beforeend",
            "<div style='background-image: url(" +
            url + card + ") ' class='card'>"
                                    );
        }
    }
    };
    


// Button to Shuffle Cards


// Button to Flip All Cards


// Here we need a function for clicking on individual cards.
// (It won't work until we finish writing it.)
$(document).click(function(event) {
    // Get the id property of the clicked thing.
    let clickedId = event.target.id;
});