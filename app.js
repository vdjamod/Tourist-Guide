let btn = document.getElementById("submit");

let div = document.getElementById("detail");
let cityNameDiv = document.getElementById("cityName");

let cityArr = [
    {
        title: "Ahmedabad",
        description: {
            place1: {
                name: "Kankariya Lack",
                image: "/Photos/kankariya.jpeg",
                description: "It is amazing place Random text",
                additionalDescription: "Extra information added!!!"
            },
            place2: {
                name: "Adalaj",
                image: "/Photos/adalaj.jpg",
                description: "Near Chandkheda",
                additionalDescription: "Extra information added!!!"
            },
            place3: {
                name: "Sabarmati Ashram",
                image: "/Photos/sabarmatiAshram.jpeg",
                description: "In ahmedabad",
                additionalDescription: "Extra information added!!!"
            },
            place4: {
                name: "Atal Bridge",
                image: "/Photos/atal.jpeg",
                description: "Near Riverfront",
                additionalDescription: "Extra information added!!!"
            },
            place5: {
                name: "Riverfront",
                image: "/Photos/riverfront.jpeg",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. natus recusandae perferendis aliquid dignissimos possimus enim, iure ratione rerum animi dolorem quia officia accusantium Voluptas exercitationem quas officiis laudantium molestiae quis ducimus reiciendis quod aliquid voluptatum, veritatis veniam provident aut dolorum consequatur? Illo molestiae officiis ipsum quasi quia quidem aliquam in quos ullam et Amet iure enim omnis nesciunt soluta est eligendi, corporis laudantium, corrupti ea repellat deserunt ex odit nobis voluptatibus reprehenderit nulla veritatis porro vel necessitatibus quos perspiciatis inventore tempora numquam Sunt! Fuga minima culpa eum inventore debitis obcaecati odit velit, quae quia laudantium nihil quidem porro assumenda Iste, inventore reprehenderit ab possimus quae ipsa aliquid, optio laudantium soluta reiciendis accusantium nostrum Expedita fugiat voluptatum velit repudiandae, iste qui atque? Esse, explicabo placeat temporibus incidunt accusantium voluptate? Debitis, vel sequi fugiat adipisci porro necessitatibus, dolore obcaecati animi culpa alias nostrum unde facere",
                additionalDescription: "Extra information added!!!"
            },
        },
    },

    {
        title: "Ayodhya",
        description: {
            place1: {
                name: "Ram Mandir",
                description: "22 Jan 2024",
                additionalDescription: "Extra information added!!!"
            }
        }
    },

    {
        title: "Varanasi",
        description: {
            place1: {
                name: "Mathura",
                description: "mathura",
                additionalDescription: "Extra information added!!!"
            }
        }
    },

    {
        title: "Mumbai",
        description: {
            place1: {
                name: "Film city",
                description: "Goregaon east",
                additionalDescription: "Extra information added!!!"
            }
        }
    },

    {
        title: "Jaipur",
        description: {
            place1: {
                name: "Jaipur",
                description: "Rajasthan",
                additionalDescription: "Extra information added!!!"
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
                let placeDetail = document.createElement("div");
                placeDetail.classList.add("cards");

                let img = document.createElement("img");
                img.classList.add("img");
                img.src = idx.description[i].image;
                img.alt = "Image of the place";
                placeDetail.appendChild(img);
                
                placeDetail.innerHTML += `<h4>${idx.description[i].name}</h4>`;
                placeDetail.innerHTML += `<p class="description">${idx.description[i].description}</p>`;
                placeDetail.innerHTML += `<button class="show-more-btn">Show more</button>`;
                div.appendChild(placeDetail);
                

                let showMoreBtn = placeDetail.querySelector(".show-more-btn");
                showMoreBtn.addEventListener("click", () => {
                    let description = placeDetail.querySelector(".description");
                    let showMoreBtnText = showMoreBtn.textContent.trim();

                    if(showMoreBtnText === "Show more") {
                        description.classList.add("expanded");
                        placeDetail.style.height = "auto";
                        
                        let additionalDescription = document.createElement("div");
                        additionalDescription.innerHTML += `${idx.description[i].additionalDescription}`; // Error occur in this line....
                        placeDetail.appendChild(additionalDescription);
                    }
                    else {
                        description.classList.remove("expanded");
                        placeDetail.style.height = "fit-content";
                        showMoreBtn.textContent = "Show more";
                    }
                    showMoreBtn.remove();
                });
            }
        }
    }
}