
function connect() {

    var searchTerm =
    document.getElementById("searchBox").value;

    var url =
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;

    fetch(url)
    .then(res => res.json())
    .then(data => display(data));

}

function display(data) {

    var oldContent =
    document.getElementById("displayArea");

    oldContent.textContent = "";

    if (data.meals == null) {
        oldContent.textContent = "No meals found";
        return;
    }

    for (var i = 1; i <= 5 && i <= data.meals.length; i++)
    {

        var newDiv =
        document.createElement("div");

        newDiv.classList.add("innerStyle");

        newDiv.innerHTML =
        `Meal Title: <b>
        ${data.meals[i-1].strMeal}
        </b>
        <br>
        <img src="${data.meals[i-1].strMealThumb}">
        <br>`;

        oldContent.appendChild(newDiv);

    }

}
