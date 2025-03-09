 // Seznam filmů jako pole objektů
 const filmy = [
    { 
        nazev: "Plameny Osudu", 
        datum: "12. března 2024 | 19:30",
        dabing: "CZ", 
        delka: 120, 
        vek: "13+", 
        cena: 140, 
        zanr: "fantasy", 
        obrazek: "obr/kralovstvi.webp",
        herci: ["John Carter", "Michael Reynolds", "Emma Thompson"],
        popis: "Ve starobylém království Eldoria se schyluje k poslední bitvě. Po staletí ukrytá magie byla probuzena a obávaná armáda temných draků vtrhla do hlavního města Ardenthal. Mladý bojovník se musí spojit s posledním čarodějem, aby zachránili svět před zničením."
    },
    { 
        nazev: "Velká cirkusová mela", 
        datum: "12. března 2024 | 19:30",
        dabing: "CZ", 
        delka: 95, 
        vek: "3+", 
        cena: 110, 
        zanr: "komedie", 
        obrazek: "obr/klauun.webp",
        herci: ["Jack Williams", "Oliver Clark", "Sophia Taylor"],
        popis: "Šílený cirkus přichází do města! Připravte se na smích, kaskadérské kousky a magické představení, které změní váš pohled na realitu. Když se však během hlavního čísla ztratí hlavní klaun, začíná napínavé pátrání plné nečekaných zvratů."
    },
    { 
        nazev: "Šepoty", 
        datum: "12. března 2024 | 19:30",
        dabing: "CZ", 
        delka: 110, 
        vek: "15+", 
        cena: 160, 
        zanr: "horor", 
        obrazek: "obr/horor.webp",
        herci: ["Ethan Walker", "Lucas Scott", "Emily White"],
        popis: "V opuštěné nemocnici se ozývají podivné šepoty. Každý, kdo se je pokusil ignorovat, zmizel beze stopy. Když se skupina přátel rozhodne prozkoumat tajemství nemocnice, zjišťují, že hlasy nepatří mrtvým, ale něčemu mnohem horšímu."
    },
    { 
        nazev: "První kontakt", 
        datum: "12. března 2024 | 19:30",
        dabing: "CZ", 
        delka: 120, 
        vek: "13+", 
        cena: 150, 
        zanr: "fantasy", 
        obrazek: "obr/astronaut.webp",
        herci: ["James Foster", "Daniel Parker", "Ava Mitchell"],
        popis: "Astronauti na misi k neznámé planetě narazí na mimozemskou civilizaci. Přátelé, nebo nepřátelé? První kontakt rozhodne o osudu lidstva. Když však zjistí, že nejsou prvními návštěvníky této planety, situace se dramaticky mění."
    },
    { 
        nazev: "Mlha Nad Městem", 
        datum: "12. března 2024 | 19:30",
        dabing: "CZ", 
        delka: 120, 
        vek: "13+", 
        cena: 125, 
        zanr: "horor", 
        obrazek: "obr/mlha.webp",
        herci: ["Ryan Harris", "Chris Bennett", "Olivia Anderson"],
        popis: "Tajemná mlha zahalila město a lidé začínají mizet. Nikdo neví, co se děje, ale jediná cesta ven je zjistit pravdu o její podstatě. Každý krok ve tmě může znamenat smrt a pravda, která se skrývá uvnitř mlhy, je děsivější než noční můra."
    },
    { 
        nazev: "Poslední stanice", 
        datum: "12. března 2024 | 19:30",
        dabing: "CZ", 
        delka: 120, 
        vek: "13+", 
        cena: 140, 
        zanr: "horor", 
        obrazek: "obr/metro.webp",
        herci: ["David Robinson", "Tyler Morgan", "Sophia Lewis"],
        popis: "Noční jízda metrem se mění v děsivou noční můru. Když vlak zastaví mezi stanicemi, pasažéři začnou mizet jeden po druhém. Kdo nebo co je v podzemí sleduje? A podaří se někomu dostat zpět na povrch?"
    },
    { 
        nazev: "Ledový Spawner", 
        datum: "12. března 2024 | 19:30",
        dabing: "CZ", 
        delka: 120, 
        vek: "13+", 
        cena: 130, 
        zanr: "fantasy", 
        obrazek: "obr/spawner.webp",
        herci: ["Alexander Carter", "Lucas Bennett", "Isabella Roberts"],
        popis: "V království ledu se objevil tajemný artefakt, který dokáže tvořit nekonečné ledové bytosti. Kdo ho získá, ovládne svět. Ale když se objeví dávné proroctví, že artefakt přinese konec civilizace, začíná závod s časem."
    },
    { 
        nazev: "Zpátky do formy", 
        datum: "12. března 2024 | 19:30",
        dabing: "CZ", 
        delka: 120, 
        vek: "13+", 
        cena: 120, 
        zanr: "komedie", 
        obrazek: "obr/parta.webp",
        herci: ["Kevin Hall", "Jason Reed", "Madison Green"],
        popis: "Skupina přátel se rozhodne znovu začít cvičit, ale jejich pokusy o návrat do formy se promění v jednu velkou komedii. Od bizarních tréninkových plánů po nejhorší dietní katastrofy – cesta zpět k fyzické kondici nebyla nikdy tak zábavná."
    },
    { 
        nazev: "Noční jízda", 
        datum: "12. března 2024 | 19:30",
        dabing: "CZ", 
        delka: 120, 
        vek: "13+", 
        cena: 150, 
        zanr: "horor", 
        obrazek: "obr/park.webp",
        herci: ["Nathan Collins", "Ethan Turner", "Olivia Campbell"],
        popis: "Mladí lidé se rozhodnou projet opuštěnou cestou lesem v noci. Netuší však, že nejsou sami a něco je celou dobu sleduje. Když se auto náhle porouchá a telefony přestanou fungovat, začíná jejich nejhorší noční můra."
    }
];


// Funkce/šablona pro zobrazení filmů
function zobrazFilmy() {
    const filmList = document.getElementById("film-list");
    filmList.innerHTML = ""; // Vyčistíme obsah

    filmy.forEach((film, index) => {
        const filmHTML = `
            <div class="film d-flex align-items-center" data-genre="${film.zanr}">
                <img src="${film.obrazek}" alt="${film.nazev}" class="film-image me-3">
                <div class="film-info">
                    <h2><strong>${film.nazev}</strong></h2>
                    <p class="film-date"><i class="fas fa-calendar-alt"></i> ${film.datum || "Datum neznámé"}</p>
                    <p><strong>Dabing:</strong> ${film.dabing} | <strong>Délka:</strong> ${film.delka} min | <strong>Věk:</strong> ${film.vek}</p>
                    <p><strong>Cena:</strong> ${film.cena} Kč</p>
                    <p><strong>Hrají:</strong> ${film.herci.join(", ")}</p>
                    <div class="film-buttons">
                        <button class="btn btn-info" data-bs-toggle="modal" data-bs-target="#filmModal${index}">Více informací</button>
                        <button class="btn btn-danger rezervace" data-film="${film.nazev}">Rezervovat</button>
                    </div>
                </div>
            </div>

            <!-- Modální okno pro popis filmu -->
            <div class="modal fade" id="filmModal${index}" tabindex="-1" aria-labelledby="filmModalLabel${index}" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="filmModalLabel${index}">${film.nazev}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Zavřít"></button>
                        </div>
                        <div class="modal-body">
                            <p>${film.popis}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        filmList.innerHTML += filmHTML;
    });
}


document.addEventListener("DOMContentLoaded", () => {
    console.log("✅ JavaScript načten čekáme na kliknutí na 'Rezervovat'");

    // Delegace událostí - posloucháme kliknutí na celý `film-list`
    document.getElementById("film-list").addEventListener("click", function (event) {
        if (event.target.classList.contains("rezervace")) {
            console.log("🎬 Kliknuto na tlačítko 'Rezervovat'");

            const filmNazev = event.target.getAttribute("data-film");
            console.log("🎬 Kliknuto na film:", filmNazev);

            const film = filmy.find(f => f.nazev.trim() === filmNazev.trim());

            if (!film) {
                console.error("❌ Chyba: Film nebyl nalezen v poli `filmy`!", filmNazev);
            } else {
                console.log(`✅ Film nalezen: ${film.nazev}, Cena: ${film.cena} Kč`);
            }
            

            if (film) {
                localStorage.setItem("selectedFilm", film.nazev);
                localStorage.setItem("selectedFilmPrice", film.cena.toString());
            
                console.log("📦 Uloženo do LocalStorage:");
                console.log("selectedFilm:", localStorage.getItem("selectedFilm"));
                console.log("selectedFilmPrice:", localStorage.getItem("selectedFilmPrice"));
            } else {
                console.error("❌ Chyba: Cena filmu se neukládá, protože film nebyl nalezen!");
            }
            
        }
    });
});




// Zavolání funkce při načtení stránky
document.addEventListener("DOMContentLoaded", zobrazFilmy);

 
 document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault(); // Zastavíme okamžité přesměrování
            document.body.classList.add('fade-out'); // Spustíme animaci
            setTimeout(() => {
                window.location.href = event.target.href; // Po animaci přesměrujeme
            }, 500); // Čas musí odpovídat délce animace v CSS
        });
    });

  // Existující kód pro kliknutí na odkazy
  document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        document.body.classList.add('fade-out');
        setTimeout(() => {
            window.location.href = event.target.href;
        }, 500);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const toggleNavBtn = document.getElementById("toggleNavBtn"); // Šipka pro PC
    const navbarToggler = document.querySelector(".navbar-toggler"); // Hamburger menu
    const navbarCollapse = document.querySelector(".navbar-collapse"); // Navigace na mobilu
    let navbarDivider = document.querySelector(".navbar-divider"); // Čára



    function updateDivider() {
        if (navbarCollapse.classList.contains("show") || !document.body.classList.contains("nav-hidden")) {
            navbarDivider.style.display = "block"; // Zobrazit čáru, pokud je menu otevřené
        } else {
            navbarDivider.style.display = "none"; // Skrýt čáru, pokud je menu zavřené
        }
    }

    if (toggleNavBtn) {
        toggleNavBtn.addEventListener("click", function () {
            document.body.classList.toggle("nav-hidden");
            setTimeout(updateDivider, 300); // Počkej, než se animace vykreslí
        });
    }

    if (navbarToggler) {
        navbarToggler.addEventListener("click", function () {
            setTimeout(updateDivider, 300);
        });
    }

    window.addEventListener("resize", updateDivider); // Aktualizace při změně velikosti okna

    updateDivider(); // Zavolání funkce při načtení stránky
});


// filtrace filmu
document.addEventListener("DOMContentLoaded", function () {
    const genreFilter = document.getElementById("genreFilter");

    genreFilter.addEventListener("change", function () {
        filterFilms(this.value);
    });

    function filterFilms(genre) {
        let films = document.querySelectorAll('.film');
        let dateContainers = document.querySelectorAll('.film-date-container');

        films.forEach((film, index) => {
            let filmGenre = film.getAttribute('data-genre');
            let dateContainer = dateContainers[index]; // Odpovídající datum filmu

            if (genre === 'všechny' || filmGenre.toLowerCase() === genre.toLowerCase()) {
                film.classList.remove("hidden");
                if (dateContainer) {
                    dateContainer.classList.remove("hidden"); // Zobrazit odpovídající datum
                }
            } else {
                film.classList.add("hidden");
                if (dateContainer) {
                    dateContainer.classList.add("hidden"); // Skryt odpovídající datum
                }
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const rezervaceBtns = document.querySelectorAll(".rezervace");

    rezervaceBtns.forEach(button => {
        button.addEventListener("click", function () {
            const filmName = this.getAttribute("data-film"); // Získáme název filmu
            localStorage.setItem("selectedFilm", filmName); // Uložíme film do localStorage
            window.location.href = "platno.html"; // Přesměrování na stránku plátna
        });
    });
});

