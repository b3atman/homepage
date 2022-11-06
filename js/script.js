console.log("Witam Panowie i Panie!");

let hidefoto = document.querySelector(".hidefoto");
let body = document.querySelector(".body");
let image = document.querySelector(".image");
let themeName = document.querySelector(".themeName");
let imageSwitch = document.querySelector(".imageSwitch");
let changeBackground = document.querySelector(".changeBackground");

hidefoto.addEventListener("click", () => {
    image.classList.toggle("hidden");

    imageSwitch.innerText = image.classList.contains("hidden") ? "Włącz" : "Wyłącz";
});

changeBackground.addEventListener("click", () => {
    body.classList.toggle("grey");

    themeName.innerText = body.classList.contains("grey") ? "biały" : "szary";
});

if (image.classList.contains("hidden")) {
    console.log("Zdjęcie jest ukryte")
} else {
    console.log("Zdjęcie jest włączone")
}

if (body.classList.contains("grey")) {
    console.log("Jest szary motyw")
} else {
    console.log("Jest biały motyw")
}

let day = document.querySelector(".day").innerText;
let whichActivity = document.querySelector(".whichActivity");

switch (day) {
    case "poniedziałek":
    case "środa":
        whichActivity.innerText = "biegał po lesie.";
        break;

    case "wtorek":
    case "czwartek":
        whichActivity.innerText = "jeździł rowerem po mieście.";
        break;

    default:
        whichActivity.innerText = "oglądał film na Netflixie.";
}

if (day === "poniedziałek") {
    console.log("Mamy poniedziałek");
} else if (day === "wtorek") {
    console.log("Mamy wtorek");
} else if (day === "środa") {
    console.log("Mamy środę");
} else if (day === "czwartek") {
    console.log("Mamy czwartek");
} else if (day === "piątek") {
    console.log("Mamy piątek");
} else {
    console.log("Mamy weekend");
}

if (day === "poniedziałek" || day === "środa") {
    console.log("Dzisiaj mam trening biegowy");
} else if (day === "wtorek" || day === "czwartek") {
    console.log("Dzisiaj mam jazdę na rowerze");
} else {
    console.log("Dzisiaj oglądam film w domu");
}
