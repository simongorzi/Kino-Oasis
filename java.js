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
        popis: `
  <h3>🐉 Epické fantasy dobrodružství: Eldoria</h3>
  <p>📜 Ve starobylém království <strong>Eldoria</strong> se schyluje k poslední bitvě, která rozhodne o osudu celého světa.</p>
  <p>✨ Po staletí ukrytá magie byla probuzena a obávaná armáda <strong>temných draků</strong> 🐲 zaútočila na hlavní město <strong>Ardenthal</strong> 🏰.</p>
  <p>🧙‍♂️ Mladý bojovník se musí spojit s <strong>posledním čarodějem</strong>, aby společně čelili nadcházející zkáze a zachránili to, co ještě zbývá ze světa lidí.</p>
  <p>🎞️ Připravte se na dechberoucí efekty, napětí a dojemné momenty, které vám zůstanou v paměti. <strong>Eldoria</strong> je film, který vás přenese do světa magie, hrdinství a naděje.</p>
  <p class="text-center"><strong>🌟 Tento film si nesmíte nechat ujít! 🌟</strong></p>`

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
        popis: `
        <h3>🎪 Šílený cirkus přichází do města!</h3>
        <p>🤹‍♂️ Připravte se na smích, dechberoucí kaskadérské kousky a magické představení, které vám doslova zamotá hlavu.</p>
        <p>🎭 Tento cirkus není jako žádný jiný – přináší představení, která narušují realitu a posouvají hranice fantazie.</p>
        <p>😱 Když se však během hlavního čísla záhadně <strong>ztratí hlavní klaun</strong>, začíná napínavé pátrání plné nečekaných zvratů a tajemství pod šapitó.</p>
        <p>🔍 Čeká vás jedinečný mix komedie, napětí a vizuální magie – show, kterou si budete pamatovat ještě dlouho po potlesku.</p>
        <p class="text-center"><strong>🎟️ Přijďte zažít to nejšílenější představení sezóny! 🎟️</strong></p> `
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
        popis: `
        <h3>🏥 Tajemství opuštěné nemocnice</h3>
        <p>😨 V opuštěné nemocnici se noc co noc ozývají podivné šepoty. Každý, kdo je ignoroval, <strong>zmizel beze stopy</strong>...</p>
        <p>🧑‍🤝‍🧑 Když se skupina přátel rozhodne toto tajemné místo prozkoumat, čeká je mnohem víc než jen strašidelná atmosféra.</p>
        <p>👁️ Hlasy, které slýchají, <strong>nepatří mrtvým</strong> – ale něčemu, co nikdy nemělo být probuzeno.</p>
        <p>💀 Temné chodby, psychologický teror a nepředvídatelná hrůza... Tento film vás donutí držet se sedačky a nedívat se zpět.</p>
        <p class="text-center"><strong>🩸 Máte odvahu zjistit, co šeptá ve tmě? 🩸</strong></p>
      `
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
        popis: `
        <h3>🪐 První kontakt</h3>
        <p>🚀 Astronauti na misi k <strong>neznámé planetě</strong> narazí na <strong>mimozemskou civilizaci</strong>. Přátelé, nebo nepřátelé? První kontakt rozhodne o osudu lidstva.</p>
        <p>👽 Komunikace je napjatá, atmosféra hustá – jakákoli chyba může znamenat katastrofu pro obě strany.</p>
        <p>💡 Když ale zjistí, že <strong>nejsou prvními návštěvníky této planety</strong>, vše se náhle mění. Pravda, kterou odhalí, může otřást samotnými základy lidstva.</p>
        <p>🎥 Vizionářský sci-fi thriller plný napětí, technologií a etických dilemat, který vás přenese do neprobádaných hlubin vesmíru.</p>
        <p class="text-center"><strong>🌌 Budete u toho, když se rozhodne o budoucnosti Země. 🌌</strong></p>
      `
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
        popis: `
  <h3>🌫 Mlhou zahalené tajemství</h3>
  <p>🌁 Tajemná mlha zahalila celé město... a lidé začínají <strong>mizet beze stopy</strong>.</p>
  <p>❓ Nikdo netuší, co mlhu vyvolalo, ani co se v ní skrývá. Jediné, co je jisté – <strong>každý krok ve tmě může být poslední</strong>.</p>
  <p>🔍 Skupina odvážných se vydává zjistit pravdu o její podstatě, ale s každým odhalením přichází <strong>děsivější skutečnosti</strong>, než si dokázali představit.</p>
  <p>💀 Pravda ukrytá v mlze je temnější než noční můra... a únik není možný pro každého.</p>
  <p class="text-center"><strong>⚠️ Přežijete mlhu, nebo v ní navždy zmizíte? ⚠️</strong></p>
`
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
        popis: `
  <h3>🚇 Noční jízda do neznáma</h3>
  <p>🌃 Co měla být obyčejná noční jízda metrem, se mění v <strong>děsivou noční můru</strong>.</p>
  <p>🚉 Když vlak náhle zastaví mezi stanicemi a světla začnou blikat, <strong>pasažéři začínají mizet</strong> – jeden po druhém.</p>
  <p>👀 Kdo – nebo co – se v temnotách podzemí skrývá? A proč si vybírá právě je?</p>
  <p>⏱️ Čas běží a napětí roste. Ve hře je nejen přežití, ale i odhalení temného tajemství, které se skrývá v opuštěných tunelech metra.</p>
  <p class="text-center"><strong>🕯️ Podaří se někomu najít cestu zpět na povrch? 🕯️</strong></p>
`
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
        popis: `
        <h3>❄️ Ledové království v ohrožení</h3>
        <p>🧊 V samotném srdci <strong>království ledu</strong> byl nalezen tajemný artefakt, který dokáže vytvářet <strong>nekonečné ledové bytosti</strong>.</p>
        <p>👑 Ten, kdo ho získá, může ovládnout celý svět – nebo ho zničit. Moc, která byla po staletí zapečetěna, je nyní volná.</p>
        <p>📜 Když se však objeví dávné proroctví, varující před <strong>koncem civilizace</strong>, začíná nelítostný závod s časem.</p>
        <p>🗺️ Cesta za pravdou je plná ledu, zrady a hrdinství. Budoucnost světa visí na vlásku – a mrazivý vítr už vane...</p>
        <p class="text-center"><strong>🧭 Ovládneš sílu, nebo jí podlehneš? 🧭</strong></p>
      `
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
        popis: `
        <h3>🏋️‍♂️ Cvičit, nebo necvičit?</h3>
        <p>😅 Skupina přátel se rozhodne, že je čas <strong>znovu začít cvičit</strong> – ale to, co začíná jako nevinné předsevzetí, se rychle změní v <strong>chaotickou komedii</strong>.</p>
        <p>💪 Od bizarních tréninkových plánů přes naprosto nefunkční aplikace až po <strong>dietní katastrofy</strong> všeho druhu – tahle cesta za zdravím je všechno, jen ne jednoduchá.</p>
        <p>🥦🍔 Příběh plný smíchu, trapasů i lidských momentů ukazuje, že návrat do formy nemusí být jen dřina – ale hlavně pořádná zábava.</p>
        <p>🎬 Ideální film pro všechny, kdo někdy začali… a taky brzy skončili.</p>
        <p class="text-center"><strong>😂 Zasmějte se a možná se i inspirovat, i když jen trochu! 😂</strong></p>
      `
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
        popis: `
        <h3>🌲 Temnota v lese</h3>
        <p>🚗 Mladí lidé se rozhodnou projet <strong>opuštěnou cestou lesem</strong> – v noci. Dobrodružství? Spíš <strong>chyba, která je bude stát víc, než čekali</strong>.</p>
        <p>👀 Netuší, že <strong>nejsou sami</strong>… a něco – nebo někdo – je sleduje zpoza stromů.</p>
        <p>📵 Když se auto náhle porouchá a <strong>telefony přestanou fungovat</strong>, ocitají se v pasti, odkud není úniku.</p>
        <p>💀 Začíná závod s časem – a boj o přežití ve tmě, kde i šepot listí může být znamením, že už je pozdě.</p>
        <p class="text-center"><strong>🌘 Ve tmě tě nikdo neuslyší křičet… 🌘</strong></p>
      `
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
    console.log(" JavaScript načten čekáme na kliknutí na 'Rezervovat'");

    // Delegace událostí - posloucháme kliknutí na celý `film-list`
    document.getElementById("film-list").addEventListener("click", function (event) {
        if (event.target.classList.contains("rezervace")) {
            console.log("🎬 Kliknuto na tlačítko 'Rezervovat'");

            const filmNazev = event.target.getAttribute("data-film");
            console.log("🎬 Kliknuto na film:", filmNazev);

            const film = filmy.find(f => f.nazev.trim() === filmNazev.trim());

            if (!film) {
                console.error(" Chyba: Film nebyl nalezen v poli `filmy`!", filmNazev);
            } else {
                console.log(` Film nalezen: ${film.nazev}, Cena: ${film.cena} Kč`);
            }
            

            if (film) {
                localStorage.setItem("selectedFilm", film.nazev);
                localStorage.setItem("selectedFilmPrice", film.cena.toString());
            
                console.log("📦 Uloženo do LocalStorage:");
                console.log("selectedFilm:", localStorage.getItem("selectedFilm"));
                console.log("selectedFilmPrice:", localStorage.getItem("selectedFilmPrice"));
            } else {
                console.error(" Chyba: Cena filmu se neukládá, protože film nebyl nalezen!");
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

