document.addEventListener("DOMContentLoaded", function () {

    const searchInputs = document.querySelectorAll(".search");

    searchInputs.forEach(function (input) {

        input.addEventListener("input", function () {

            const query = input.value.toLowerCase().trim();

            const pageContent = document.querySelectorAll(
                ".card, .match, .transfer, .team, .player, .news"
            );

            pageContent.forEach(function (item) {

                const text = item.innerText.toLowerCase();

                if (query === "" || text.includes(query)) {
                    item.style.display = "";
                } else {
                    item.style.display = "none";
                }

            });

        });

    });

});
