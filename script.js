// const minutesFirst = prompt("Introduce los minutos: ");

const minutesFirst = Swal.fire({
    title: "Hola",
    input: "number",
})
let time = minutesFirst * 60

const countDown = document.getElementById("countDown");

const updateCountDown = () => {
    const min = Math.floor(time / 60);
    let sec = time % 60;

    sec = sec < 10 ? '0' + sec : sec;
    countDown.innerHTML = `${min} : ${sec}`;
    time--;
    if(time < 0) {
        Swal.fire({
            title: "Se acabo"
        });
        clearInterval(timer);
    }
}

const timer = setInterval(updateCountDown, 1000);

// CHANGE BACKGROUND 
let clientId = "wztBaWIMpJxQd0Eql30sjRYmQ9x1915oaFOwI683Cts";
let requestUrl = `https://api.unsplash.com/photos/random/?client_id=${clientId}`;
let imageElement = document.querySelector("#unsplashImage")
let imageLink = document.querySelector("#imageLink");
let creator = document.querySelector("#creator");

fetch(requestUrl)
    .then(function(res) {
        return res.json();
    })
    .then(function (jsonData) {
        imageElement.src = jsonData.urls.regular;
        imageLink.setAttribute("href", jsonData.links.html);

        creator.innerText = jsonData.user.name;
        creator.setAttribute("href", jsonData.user.portfolio_url)
    }) 