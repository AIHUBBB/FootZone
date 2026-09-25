document.addEventListener("DOMContentLoaded", function () {

    const searchInputs = document.querySelectorAll(".search");

    searchInputs.forEach(function (input) {

        input.addEventListener("input", function () {

            const query = input.value.toLowerCase().trim();

            const elements = document.querySelectorAll(
                ".card, .match, .transfer, .team, .player"
            );

            elements.forEach(function (element) {

                const text = element.innerText.toLowerCase();

                if (query === "" || text.includes(query)) {
                    element.style.display = "";
                } else {
                    element.style.display = "none";
                }

            });

        });

    });

});
