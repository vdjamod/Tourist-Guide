let btn = document.getElementById("submit")
let div = document.getElementById("detail");
let cityNameDiv = document.getElementById("cityName");

let cityArr = [
    {
        title: "Ahmedabad",
        description: {
            place1: {
                name: "Kankariya Lack",
                image: "/Photos/kankariya.jpeg",
                description: "It is amazing place",
            },
            place2: {
                name: "Adalaj",
                image: "/Photos/adalaj.jpg",
                description: "Near Chandkheda"
            },
            place3: {
                name: "Sabarmati Ashram",
                image: "/Photos/sabarmatiAshram.jpeg",
                description: ""
            },
            place4: {
                name: "Atal Bridge",
                image: "/Photos/atal.jpeg",
                description: "Near Riverfront"
            },
            place5: {
                name: "Riverfront",
                image: "/Photos/riverfront.jpeg",
                description: "Near Atal Bridge"
            },
        },
    },

    {
        title: "Ayodhya",
        description: {
            place1: {
                name: "Ram Mandir",
                description: "22 Jan 2024"
            }
        }
    },

    {
        title: "Varanasi",
        description: {
            place1: {
                name: "Mathura",
                description: "mathura"
            }
        }
    },

    {
        title: "Mumbai",
        description: {
            place1: {
                name: "Film city",
                description: "Goregaon east"
            }
        }
    },

    {
        title: "Jaipur",
        description: {
            place1: {
                name: "Jaipur",
                description: "Rajasthan"
            }
        }
    }
];

btn.addEventListener("click", (evt) => {
    let userInput = document.getElementById("myInput");

    checkCity(userInput.value);

    userInput.value = "";
    evt.preventDefault();
});

let resetData = () => {
    div.innerText = "";
    cityNameDiv.innerText = "";
}
let checkCity = (city) => {
    resetData();

    let matchCity = false;
    for(idx of cityArr) {
        if(city == idx.title) {
            matchCity = true;
            break;
        }
    }

    if(matchCity) {
        console.log("Found");
        cityData(city);
    }
    else {
        console.log("NOT Found");
        div.innerText = "City not found!!!";
    }
}

let cityData = (inputData) => {

    for(idx of cityArr) {
        if(inputData == idx.title) { // idx.title -> ahmedabad, mumbai, varanasi, jaipur, ayodhya.
            let cityName = document.createElement("div");
            cityName.innerHTML = `<h3>${idx.title}</h3>`;
            cityName.classList.add("cityName");
            cityNameDiv.appendChild(cityName);

            for(let i in idx.description) {
                // let img = document.createElement("img");
                // img.src = idx.description[i].image;
                // img.alt = "Image of the place";
                // div.appendChild(img);

                let placeName = document.createElement("div");
                placeName.innerHTML = `<h4>${idx.description[i].name}</h4>  ${idx.description[i].description}`;
                placeName.classList.add("cards");
                div.appendChild(placeName);
            }
        }
    }
}