let btn = document.getElementById("submit")
let cities = ["Ahmedabad", "Ayodhya", "Varanasi", "Mumbai", "Jaipur"];
let ul = document.getElementById("descriptionList");

let cityObj = {
    Ahmedabad : {
        "Kankariya Lack" : "Ahmedabad Kankariya lack",
        "Adalaj ni vaav" : "Near chandkheda",
        "Trimandir" : "After adalaj ni vaav",
        "Atal Bridge" : "Riverfront",
    },
    Ayodhya : {
        "RamMandir": "Ram mandir"
    },
    Varanasi : {
        "Mathura": "Mathura"
    }, 
    Mumbai : {
        "film": "Film city"
    },
    Jaipur : {
        "Rajasthan": "Rajasthan, India"
    }
};

btn.addEventListener("click", (evt) => {
    let userInput = document.getElementById("myInput");

    checkCity(userInput.value);

    userInput.value = "";
    evt.preventDefault();
});


let checkCity = (city) => {
    let matchCity = false;

    for(idx of cities) {
        if(idx == city) {
            matchCity = true;
            break;
        }
    }

    if(matchCity) {
        // console.log("Found");
        cityDiscription(city);
    }
    else {
        console.log("NOT Found");
        ul.innerText = "City not found!!!";
    }
}

let cityDiscription = (inputData) => {
    if(cityObj.hasOwnProperty(inputData)) {
        // console.log(cityObj[inputData]);
        // ul.innerText = cityObj[inputData];

        for(const objKey in cityObj) {
            // console.log(objKey);
            if(inputData == objKey) { // objKey --> city name..
                ul.innerHTML = `<h4>${objKey}</h4>`;
                
                for(const innerKey in cityObj[objKey]) {
                    if(cityObj[objKey].hasOwnProperty(innerKey)) {
                        let appendChildItem = document.createElement("li");
                        appendChildItem.innerHTML = `<h5>${innerKey}</h5> ${cityObj[objKey][innerKey]}`;
                        ul.appendChild(appendChildItem); 
                    }
                }
            }

        }
    }
}