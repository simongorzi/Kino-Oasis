const container = document.querySelector(".seats-container");
const count = document.getElementById("count");
const total = document.getElementById("total");
const payButton = document.getElementById("pay");

// ✅ Funkce pro výpočet celkové ceny vybraných sedadel
function updateSelectedCount() {
    // Najdeme všechna vybraná sedadla
    const selectedSeats = document.querySelectorAll(".seats-container .seat.selected");
    const selectedCount = selectedSeats.length;

    // ✅ Načteme cenu filmu z LocalStorage
    let ticketPrice = localStorage.getItem("selectedFilmPrice");

    if (!ticketPrice || isNaN(parseInt(ticketPrice))) {
        console.error("❌ Chyba: Cena filmu nebyla nalezena v LocalStorage nebo je neplatná!");
        ticketPrice = 0;
    } else {
        ticketPrice = parseInt(ticketPrice);
    }

    console.log(`🎟️ Cena jednoho sedadla: ${ticketPrice} Kč`);
    console.log(`🟢 Počet vybraných sedadel: ${selectedCount}`);

    // ✅ Výpočet celkové ceny (počet sedadel × cena jednoho sedadla)
    const totalPrice = selectedCount * ticketPrice;

    // Zabránění přechodu bez výběru sedadel


    
    // ✅ Aktualizace HTML
    document.getElementById("count").innerText = selectedCount;
    document.getElementById("total").innerText = `${totalPrice} Kč`;

    // ✅ Uložení celkové ceny do LocalStorage pro stránku platby
    localStorage.setItem("totalPrice", totalPrice.toString());
}

// ✅ Přesměrování na platbu
document.addEventListener("DOMContentLoaded", function () {
    const payButton = document.getElementById("payButton");

    if (!payButton) {
        console.error("❌ Chyba: Tlačítko pro platbu nebylo nalezeno!");
        return;
    }

    payButton.addEventListener("click", function (e) {
        const selectedSeats = document.querySelectorAll(".seat.selected");

        // 🚨 Kontrola, zda byla vybrána alespoň 1 sedačka
        if (selectedSeats.length === 0) {
            alert("❌ Musíte vybrat alespoň jedno sedadlo pro pokračování!");
            e.preventDefault(); // 🚫 Zabrání přechodu na platbu
            return;
        }

        const selectedFilm = localStorage.getItem("selectedFilm");
        if (!selectedFilm) {
            alert("❌ Chyba: Nebyl vybrán žádný film!");
            return;
        }

        // ✅ Uložíme vybraná sedadla do LocalStorage
        const selectedSeatsIndices = [...selectedSeats].map(seat => parseInt(seat.dataset.index));
        localStorage.setItem("pendingSeats", JSON.stringify(selectedSeatsIndices));

        // ✅ Uložíme celkovou cenu do LocalStorage
        const ticketPrice = parseInt(localStorage.getItem("selectedFilmPrice")) || 0;
        const totalPrice = selectedSeats.length * ticketPrice;
        localStorage.setItem("totalPrice", totalPrice);

        console.log(`✅ Přesměrování na platbu s cenou: ${totalPrice} Kč`);
        
        // ✅ Přesměrování na stránku platby
        window.location.href = "platba.html";
    });
});




// ✅ Po načtení stránky načteme data z LocalStorage
document.addEventListener("DOMContentLoaded", () => {
    const selectedFilm = localStorage.getItem("selectedFilm");
    let ticketPrice = localStorage.getItem("selectedFilmPrice");

    if (selectedFilm) {
        document.getElementById("selected-film-name").innerText = selectedFilm;
    }

    if (!ticketPrice || isNaN(parseInt(ticketPrice))) {
        console.error("❌ Chyba: Cena filmu nebyla nalezena v LocalStorage!");
        ticketPrice = 0;
    } else {
        ticketPrice = parseInt(ticketPrice);
    }

    console.log(`🎟️ Načtená cena za jedno sedadlo: ${ticketPrice} Kč`);

    // ✅ Pokud existuje element na zobrazení ceny, aktualizujeme ho
    const seatPriceElement = document.getElementById("seatPrice");
    if (seatPriceElement) {
        seatPriceElement.innerText = `${ticketPrice} Kč`;
    }

    // ✅ Vytvoření sedadel
    container.innerHTML = ""; // Vymažeme staré sedadla (pokud nějaké jsou)

    for (let i = 0; i < 64; i++) {
        const seat = document.createElement("div");
        seat.classList.add("seat");
        seat.dataset.index = i;

        container.appendChild(seat);
    }

    // ✅ Přidání event listeneru pro výběr sedadel
    container.addEventListener("click", (e) => {
        if (e.target.classList.contains("seat")) {
            e.target.classList.toggle("selected");
            updateSelectedCount();
        }
    });

    updateSelectedCount(); // ✅ Aktualizace celkové ceny po načtení stránky
});
