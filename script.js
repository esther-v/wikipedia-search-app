const search = document.querySelector('input')
const form = document.querySelector('form')
const searchResults = document.querySelector('.results')
const errorMsg = document.querySelector('.alert')
const line = document.querySelector('hr')

const apiURL = "https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=";

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchValue = search.value;
    if(searchValue === "") {
        errorMessage("Search cannot be empty, please enter a search term");
    } else {
        getResults(searchValue);
    }
})

//error message function
const errorMessage = (msg) => {
    errorMsg.style.display = "block"
    line.style.display = "block"
    errorMsg.textContent = msg;
}

//get results function

async function getResults(searchVal) {
    const response = await fetch(apiURL + searchVal)
    const results = await response.json()

    console.log(results);
    if (results.query.search.length == 0) {
        return errorMessage("Invalid search, please enter another search term")
    } else {
        displayResults(results);
    }
}

//display results
const displayResults = (results) => {
    line.style.display = "block";
    let output = "";
    results.query.search.forEach((result) => {
        let resultURL = `https://en.wikipedia.org/?curid=`;
        output += `
        <div class="result p-2">
            <a href="" target="_blank" rel="noopener" class="h3 fw-bold">Love</a>
            <br>
            <a href="" target="_blank" rel="noopener" class="fs-5 text-success">https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal</a>
            <p class="fs-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae inventore eligendi officia ducimus aut, vero id voluptatibus nulla natus velit.
            </p>
        </div>
        `

    })
}