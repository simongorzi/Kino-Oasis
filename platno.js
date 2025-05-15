const container = document.querySelector(".seats-container");
const count = document.getElementById("count");
const total = document.getElementById("total");

//  Funkce pro výpočet celkové ceny vybraných sedadel
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll(".seats-container .seat.selected");
    const selectedCount = selectedSeats.length;

    let ticketPrice = localStorage.getItem("selectedFilmPrice");

    if (!ticketPrice || isNaN(parseInt(ticketPrice))) {
        console.error(" Chyba: Cena filmu nebyla nalezena v LocalStorage nebo je neplatná!");
        ticketPrice = 0;
    } else {
        ticketPrice = parseInt(ticketPrice);
    }

    console.log(` Cena jednoho sedadla: ${ticketPrice} Kč`);
    console.log(` Počet vybraných sedadel: ${selectedCount}`);

    const totalPrice = selectedCount * ticketPrice;

    count.innerText = selectedCount;
    total.innerText = `${totalPrice} Kč`;

    localStorage.setItem("totalPrice", totalPrice.toString());
}

//  Přesměrování na platbu
document.addEventListener("DOMContentLoaded", function () {
    const payButton = document.getElementById("payButton");

    if (!payButton) {
        console.error(" Chyba: Tlačítko pro platbu nebylo nalezeno!");
        return;
    }

    payButton.addEventListener("click", function (e) {
        const selectedSeats = document.querySelectorAll(".seat.selected");

        if (selectedSeats.length === 0) {
            alert(" Musíte vybrat alespoň jedno sedadlo pro pokračování!");
            e.preventDefault();
            return;
        }

        const selectedFilm = localStorage.getItem("selectedFilm");
        if (!selectedFilm) {
            alert(" Chyba: Nebyl vybrán žádný film!");
            return;
        }

        const selectedSeatsIndices = [...selectedSeats].map(seat => parseInt(seat.dataset.index));
        localStorage.setItem("pendingSeats", JSON.stringify(selectedSeatsIndices));

        console.log(" Přecházíme na platbu – totalPrice už je uložen:", localStorage.getItem("totalPrice"));

        window.location.href = "platba.html";
    });
});

//  Po načtení stránky načteme data z LocalStorage
document.addEventListener("DOMContentLoaded", () => {
    const selectedFilm = localStorage.getItem("selectedFilm");
    let ticketPrice = localStorage.getItem("selectedFilmPrice");

    if (selectedFilm) {
        document.getElementById("selected-film-name").innerText = selectedFilm;
    }

    if (!ticketPrice || isNaN(parseInt(ticketPrice))) {
        console.error(" Chyba: Cena filmu nebyla nalezena v LocalStorage!");
        ticketPrice = 0;
    } else {
        ticketPrice = parseInt(ticketPrice);
    }

    console.log(` Načtená cena za jedno sedadlo: ${ticketPrice} Kč`);

    const seatPriceElement = document.getElementById("seatPrice");
    if (seatPriceElement) {
        seatPriceElement.innerText = `${ticketPrice} Kč`;
    }

    container.innerHTML = "";

    for (let i = 0; i < 64; i++) {
        const seat = document.createElement("div");
        seat.classList.add("seat");
        seat.dataset.index = i;
        seat.innerText = i + 1;
        container.appendChild(seat);
    }

    container.addEventListener("click", (e) => {
        if (e.target.classList.contains("seat")) {
            e.target.classList.toggle("selected");
            updateSelectedCount();
        }
    });

    updateSelectedCount();
});
3