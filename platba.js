document.getElementById("confirmPayment").addEventListener("click", async () => {
    const cardNumber = document.getElementById("cardNumber").value.trim();
    const expDate = document.getElementById("expDate").value.trim();
    const cvv = document.getElementById("cvv").value.trim();
    const email = document.getElementById("email").value.trim();
    const total = localStorage.getItem("totalPrice");
    const selectedFilm = localStorage.getItem("selectedFilm");
    const pendingSeats = JSON.parse(localStorage.getItem("pendingSeats"));

    if (!cardNumber || !expDate || !cvv || !email) {
        alert("Vyplňte všechny platební údaje!");
        return;
    }

    if (!selectedFilm || !pendingSeats || pendingSeats.length === 0) {
        alert("Chyba: Žádná sedadla nejsou vybrána!");
        return;
    }

    // Simulace platby
    setTimeout(async () => {
        alert("Platba úspěšná!");

        // Přidáme sedadla do rezervací
        const reservedSeats = JSON.parse(localStorage.getItem(`reservedSeats_${selectedFilm}`)) || [];
        const updatedReservedSeats = [...reservedSeats, ...pendingSeats];

        localStorage.setItem(`reservedSeats_${selectedFilm}`, JSON.stringify(updatedReservedSeats));

        // Odeslání e-mailu na backend
        try {
            const response = await fetch("http://localhost:5000/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email,
                    film: selectedFilm,
                    seats: pendingSeats,
                    price: total
                })
            });

            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error("Chyba při odesílání e-mailu:", error);
        }

  // ✅ Vymazání dočasných dat až po potvrzení platby, NE hned při přechodu na platbu
document.getElementById("confirmPayment").addEventListener("click", function() {
    localStorage.removeItem("pendingSeats");
    localStorage.removeItem("totalPrice");
});

        // Přesměrování zpět na hlavní stránku
        window.location.href = "index.html";
    }, 1500);
});



//validace platby 
document.addEventListener("DOMContentLoaded", function () {
    const cardNumberInput = document.getElementById("cardNumber");
    const expDateInput = document.getElementById("expDate");
    const cvvInput = document.getElementById("cvv");
    const emailInput = document.getElementById("email");

    // ✅ Automatické formátování čísla karty (XXXX XXXX XXXX XXXX)
    cardNumberInput.addEventListener("input", function (e) {
        let value = e.target.value.replace(/\D/g, ""); // Odstraní všechny nečíselné znaky
        value = value.replace(/(.{4})/g, "$1 ").trim(); // Přidává mezery po každých 4 číslech
        e.target.value = value.substring(0, 19); // Omezí na 19 znaků (16 číslic + mezery)
    });

    // ✅ Automatické formátování expirace karty (MM/YY)
    expDateInput.addEventListener("input", function (e) {
        let value = e.target.value.replace(/\D/g, ""); // Odstraní vše kromě čísel
    
        if (value.length > 2) {
            value = value.substring(0, 2) + "/" + value.substring(2, 4); // Přidá lomítko po dvou číslech
        }
        
        e.target.value = value.substring(0, 5); // Maximálně 5 znaků
    });
    
    // ✅ Ověření správného formátu při opuštění pole
    expDateInput.addEventListener("blur", function (e) {
        const expValue = e.target.value;
        const expPattern = /^(\d{2})\/(\d{2})$/; // Očekává MM/YY
        const match = expValue.match(expPattern);
    
        if (!match) {
            alert("❌ Neplatný formát expirace! Použijte MM/YY.");
            e.target.value = "";
            return;
        }
    
        let month = parseInt(match[1], 10);
        let year = parseInt(match[2], 10) + 2000; // Převedeme YY na YYYY
    
        let currentYear = new Date().getFullYear();
        let currentMonth = new Date().getMonth() + 1; // Měsíce jsou v JS od 0 do 11
    
        // ✅ Kontrola, zda je měsíc 01–12
        if (month < 1 || month > 12) {
            alert("❌ Měsíc musí být mezi 01 a 12!");
            e.target.value = "";
            return;
        }
    
        // ✅ Kontrola, zda je rok platný (aktuální nebo vyšší)
        if (year < currentYear || (year === currentYear && month < currentMonth)) {
            alert("❌ Karta již vypršela! Zadejte platné datum.");
            e.target.value = "";
        }
    });
    

    // ✅ Povolení pouze 3 číslic pro CVV
    cvvInput.addEventListener("input", function (e) {
        e.target.value = e.target.value.replace(/\D/g, "").substring(0, 3);
    });

    // ✅ Ověření správného formátu e-mailu při opuštění pole
    emailInput.addEventListener("blur", function (e) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(e.target.value)) {
            alert("❌ Neplatný formát e-mailu! Zadejte správný e-mail.");
        }
    });
});

