async function getCountriesData(){
    const response = await fetch("https://restcountries.com/v2/all");
    const countriesData = await response.json();
    return countriesData;
}

async function displayCountriesTable(){
    const countries = await getCountriesData();
    console.log(countries);

    const countriesTableBody = document.getElementById("countries-table-body");

    for(let country of countries){
        const row = document.createElement("tr");
        const nameCell = document.createElement("td");
        nameCell.textContent = country.name;
        row.appendChild(nameCell);

        const flagCell = document.createElement("td");
        const flagImg = document.createElement("img");
        flagImg.src = country.flag;
        flagCell.appendChild(flagImg);
        row.appendChild(flagCell);

        const populationCell = document.createElement("td");
        populationCell.textContent = (country.population / 1000000).toFixed(2);
        row.appendChild(populationCell);

        const areaCell = document.createElement("td");
        areaCell.textContent = country.area;
        row.appendChild(areaCell);

        const callingCodeCell = document.createElement("td");
        callingCodeCell.textContent = '+' + country.callingCodes[0];
        row.appendChild(callingCodeCell);

        const capitalCell = document.createElement("td");
        capitalCell.textContent = country.capital;
        row.appendChild(capitalCell);

        const languagesCell = document.createElement("td");
        const languagesList = country.languages.map(language => language.name).join(",");
        languagesCell.textContent = languagesList;
        row.appendChild(languagesCell);

        countriesTableBody.appendChild(row);
    }
}
displayCountriesTable();