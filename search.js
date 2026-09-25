const FOOTZONE_DATA = [

    // PLAYERS

    {
        name: "Lionel Messi",
        type: "👤 لاعب",
        description: "🇦🇷 الأرجنتين — Inter Miami — الرقم 10",
        page: "players.html"
    },

    {
        name: "Kylian Mbappé",
        type: "👤 لاعب",
        description: "🇫🇷 فرنسا — Real Madrid — الرقم 9",
        page: "players.html"
    },

    {
        name: "Lamine Yamal",
        type: "👤 لاعب",
        description: "🇪🇸 إسبانيا — Barcelona — الرقم 10",
        page: "players.html"
    },

    {
        name: "Erling Haaland",
        type: "👤 لاعب",
        description: "🇳🇴 النرويج — Manchester City — الرقم 9",
        page: "players.html"
    },

    {
        name: "Mohamed Salah",
        type: "👤 لاعب",
        description: "🇪🇬 مصر — Liverpool — الرقم 11",
        page: "players.html"
    },

    {
        name: "Kevin De Bruyne",
        type: "👤 لاعب",
        description: "🇧🇪 بلجيكا — Napoli",
        page: "players.html"
    },

    {
        name: "Vinícius Júnior",
        type: "👤 لاعب",
        description: "🇧🇷 البرازيل — Real Madrid — الرقم 7",
        page: "players.html"
    },

    {
        name: "Thibaut Courtois",
        type: "👤 لاعب",
        description: "🇧🇪 بلجيكا — Real Madrid — الرقم 1",
        page: "players.html"
    },

    // TEAMS

    {
        name: "Barcelona",
        type: "🏆 فريق",
        description: "🇪🇸 إسبانيا",
        page: "teams.html"
    },

    {
        name: "Real Madrid",
        type: "🏆 فريق",
        description: "🇪🇸 إسبانيا",
        page: "teams.html"
    },

    {
        name: "Manchester City",
        type: "🏆 فريق",
        description: "🏴 إنجلترا",
        page: "teams.html"
    },

    {
        name: "Manchester United",
        type: "🏆 فريق",
        description: "🏴 إنجلترا",
        page: "teams.html"
    },

    {
        name: "Liverpool",
        type: "🏆 فريق",
        description: "🏴 إنجلترا",
        page: "teams.html"
    },

    {
        name: "Chelsea",
        type: "🏆 فريق",
        description: "🏴 إنجلترا",
        page: "teams.html"
    },

    {
        name: "Arsenal",
        type: "🏆 فريق",
        description: "🏴 إنجلترا",
        page: "teams.html"
    },

    {
        name: "PSG",
        type: "🏆 فريق",
        description: "🇫🇷 فرنسا",
        page: "teams.html"
    },

    {
        name: "Marseille",
        type: "🏆 فريق",
        description: "🇫🇷 فرنسا",
        page: "teams.html"
    },

    {
        name: "Inter",
        type: "🏆 فريق",
        description: "🇮🇹 إيطاليا",
        page: "teams.html"
    },

    {
        name: "AC Milan",
        type: "🏆 فريق",
        description: "🇮🇹 إيطاليا",
        page: "teams.html"
    },

    {
        name: "Juventus",
        type: "🏆 فريق",
        description: "🇮🇹 إيطاليا",
        page: "teams.html"
    },

    {
        name: "Bayern Munich",
        type: "🏆 فريق",
        description: "🇩🇪 ألمانيا",
        page: "teams.html"
    },

    {
        name: "Dortmund",
        type: "🏆 فريق",
        description: "🇩🇪 ألمانيا",
        page: "teams.html"
    },

    {
        name: "Espérance de Tunis",
        type: "🏆 فريق",
        description: "🇹🇳 تونس",
        page: "teams.html"
    },

    {
        name: "Club Africain",
        type: "🏆 فريق",
        description: "🇹🇳 تونس",
        page: "teams.html"
    },

    {
        name: "Étoile du Sahel",
        type: "🏆 فريق",
        description: "🇹🇳 تونس",
        page: "teams.html"
    },

    {
        name: "CS Sfaxien",
        type: "🏆 فريق",
        description: "🇹🇳 تونس",
        page: "teams.html"
    },

    // MATCHES

    {
        name: "Barcelona Real Madrid",
        type: "⚽ مباراة",
        description: "Barcelona 🆚 Real Madrid — 20:00",
        page: "matches.html"
    },

    {
        name: "PSG Marseille",
        type: "⚽ مباراة",
        description: "PSG 🆚 Marseille — 21:00",
        page: "matches.html"
    },

    {
        name: "Manchester City Arsenal",
        type: "⚽ مباراة",
        description: "Manchester City 🆚 Arsenal — 18:30",
        page: "matches.html"
    },

    {
        name: "Inter AC Milan",
        type: "⚽ مباراة",
        description: "Inter 🆚 AC Milan — 19:45",
        page: "matches.html"
    },

    // NEWS

    {
        name: "أخبار كرة القدم",
        type: "📰 خبر",
        description: "أحدث أخبار كرة القدم العالمية",
        page: "news.html"
    },

    {
        name: "سوق الانتقالات",
        type: "📰 خبر",
        description: "آخر أخبار انتقالات اللاعبين",
        page: "news.html"
    },

    {
        name: "دوري أبطال أوروبا",
        type: "📰 خبر",
        description: "آخر أخبار دوري أبطال أوروبا",
        page: "news.html"
    }

];


function goToSearch(query) {

    query = query.trim();

    if (query === "") {
        return;
    }

    window.location.href =
        "search.html?q=" + encodeURIComponent(query);

}


function setupSearchInputs() {

    const inputs =
        document.querySelectorAll(".search");

    inputs.forEach(function(input) {

        input.addEventListener("keydown", function(event) {

            if (event.key === "Enter") {

                goToSearch(input.value);

            }

        });

    });

}


function displayResults() {

    const resultsContainer =
        document.getElementById("results");

    const queryText =
        document.getElementById("queryText");

    const searchInput =
        document.getElementById("globalSearch");

    if (!resultsContainer) {
        return;
    }

    const params =
        new URLSearchParams(window.location.search);

    const query =
        (params.get("q") || "").trim();

    if (queryText) {
        queryText.textContent =
            query || "الكل";
    }

    if (searchInput) {
        searchInput.value = query;
    }

    if (!query) {

        resultsContainer.innerHTML = `
            <div class="empty">
                <h2>🔎 اكتب كلمة للبحث</h2>
                <p>مثلاً: Messi أو Barcelona أو Real Madrid</p>
            </div>
        `;

        return;
    }

    const normalizedQuery =
        query.toLowerCase();

    const results =
        FOOTZONE_DATA.filter(function(item) {

            const text =
                (
                    item.name +
                    " " +
                    item.type +
                    " " +
                    item.description
                ).toLowerCase();

            return text.includes(normalizedQuery);

        });


    if (results.length === 0) {

        resultsContainer.innerHTML = `
            <div class="empty">
                <h2>❌ ما لقيناش نتائج</h2>
                <p>جرّب كلمة أخرى مثل Messi أو Barcelona.</p>
            </div>
        `;

        return;
    }


    resultsContainer.innerHTML =
        results.map(function(item) {

            return `
                <div class="result">

                    <div class="type">
                        ${item.type}
                    </div>

                    <h2>
                        ${item.name}
                    </h2>

                    <p>
                        ${item.description}
                    </p>

                    <a href="${item.page}">
                        مشاهدة الصفحة ←
                    </a>

                </div>
            `;

        }).join("");

}


document.addEventListener(
    "DOMContentLoaded",
    function() {

        setupSearchInputs();

        displayResults();

    }
);
