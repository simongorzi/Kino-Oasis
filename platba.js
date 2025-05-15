//  Zobrazíme uloženou částku při načtení
document.addEventListener("DOMContentLoaded", function () {
    const totalElement = document.getElementById("totalPrice");
    const totalFromStorage = localStorage.getItem("totalPrice");
    if (totalElement && totalFromStorage) {
        totalElement.innerText = `${totalFromStorage} `;
    }
});

//  Přidáme validaci a simulaci platby
document.getElementById("confirmPayment").addEventListener("click", async () => {
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const cardNumber = document.getElementById("cardNumber").value.trim();
    const expDate = document.getElementById("expDate").value.trim();
    const cvv = document.getElementById("cvv").value.trim();
    const email = document.getElementById("email").value.trim();
    const total = localStorage.getItem("totalPrice");
    const selectedFilm = localStorage.getItem("selectedFilm");
    const pendingSeats = JSON.parse(localStorage.getItem("pendingSeats"));

    //  Validace
    if (!firstName || !lastName || !cardNumber || !expDate || !cvv || !email) {
        alert(" Vyplňte všechna pole!");
        return;
    }

    if (!selectedFilm || !pendingSeats || pendingSeats.length === 0) {
        alert(" Chyba: žádný film nebo sedadla!");
        return;
    }

    //  Simulace platby
    setTimeout(async () => {
        alert(" Platba úspěšná!");

        const reservedSeats = JSON.parse(localStorage.getItem(`reservedSeats_${selectedFilm}`)) || [];
        const updatedReservedSeats = [...reservedSeats, ...pendingSeats];
        localStorage.setItem(`reservedSeats_${selectedFilm}`, JSON.stringify(updatedReservedSeats));

        // Odeslání e-mailu – volitelné
       const response = await fetch("send-email.php", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    email,
    jmeno: firstName,
    prijmeni: lastName,
    film: selectedFilm,
    seats: pendingSeats,
    price: total
  })
});
const result = await response.json();
console.log("Výsledek z PHP:", result);

if (!result.success) {
  alert(" Nepodařilo se odeslat e-mail.");
}

        // Vymazání dat
        localStorage.removeItem("pendingSeats");
        localStorage.removeItem("totalPrice");

        // Přesměrování
        window.location.href = "index.html";
    }, 1000);
});


//  Formátování a validace vstupů
document.addEventListener("DOMContentLoaded", function () {
    const cardNumberInput = document.getElementById("cardNumber");
    const expDateInput = document.getElementById("expDate");
    const cvvInput = document.getElementById("cvv");
    const emailInput = document.getElementById("email");

    cardNumberInput.addEventListener("input", function (e) {
        let value = e.target.value.replace(/\D/g, "");
        value = value.replace(/(.{4})/g, "$1 ").trim();
        e.target.value = value.substring(0, 19);
    });

    expDateInput.addEventListener("input", function (e) {
        let value = e.target.value.replace(/\D/g, "");
        if (value.length > 2) {
            value = value.substring(0, 2) + "/" + value.substring(2, 4);
        }
        e.target.value = value.substring(0, 5);
    });

    expDateInput.addEventListener("blur", function (e) {
        const expValue = e.target.value;
        const expPattern = /^(\d{2})\/(\d{2})$/;
        const match = expValue.match(expPattern);

        if (!match) {
            alert(" Neplatný formát expirace! Použijte MM/YY.");
            e.target.value = "";
            return;
        }

        let month = parseInt(match[1], 10);
        let year = parseInt(match[2], 10) + 2000;

        let currentYear = new Date().getFullYear();
        let currentMonth = new Date().getMonth() + 1;

        if (month < 1 || month > 12) {
            alert(" Měsíc musí být mezi 01 a 12!");
            e.target.value = "";
            return;
        }

        if (year < currentYear || (year === currentYear && month < currentMonth)) {
            alert(" Karta již vypršela!");
            e.target.value = "";
        }
    });

    cvvInput.addEventListener("input", function (e) {
        e.target.value = e.target.value.replace(/\D/g, "").substring(0, 3);
    });

    emailInput.addEventListener("blur", function (e) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(e.target.value)) {
            alert(" Neplatný formát e-mailu!");
        }
    });
});
