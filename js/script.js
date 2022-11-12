{
    const welcome = () => {
        console.log("Witam Panowie i Panie! Ten kod jest już w repozytorium Git.");
    };

    const toggleBackground = () => {
        const body = document.querySelector(".body");
        const nextColorName = document.querySelector(".js-nextColorName");

        body.classList.toggle("grey");
        nextColorName.innerText = body.classList.contains("grey") ? "górski" : "szary";
    };

    const init = () => {
        const changeBackgroundButton = document.querySelector(".js-changeBackgroundButton");
        changeBackgroundButton.addEventListener("click", toggleBackground);

        welcome();
    };

    init();

    const changeFoto = () => {
        const image = document.querySelector(".js-image");
        const imageSwitch = document.querySelector(".js-imageSwitch");

        image.classList.toggle("hidden");
        imageSwitch.innerText = image.classList.contains("hidden") ? "Włącz" : "Wyłącz";
    }
    const initFoto = () => {
        const hideFoto = document.querySelector(".js-hideFoto");
        hideFoto.addEventListener("click", changeFoto);
    }

    initFoto();

    const day = document.querySelector(".day").innerText;
    const whichActivity = document.querySelector(".whichActivity");

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
}

if (image.classList.contains("hidden")) {
    console.log("Zdjęcie jest ukryte")
} else {
    console.log("Zdjęcie jest włączone")
}

if (body.classList.contains("grey")) {
    console.log("Jest szary motyw")
} else {
    console.log("Jest górski motyw")
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
