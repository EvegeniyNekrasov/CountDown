const minutesFirst = prompt("Introduce los minutos: ");
let time = minutesFirst * 60;

const countDown = document.getElementById("countDown");

const updateCountDown = () => {
  const min = Math.floor(time / 60);
  let sec = time % 60;

  sec = sec < 10 ? "0" + sec : sec;
  countDown.innerHTML = `${min} : ${sec}`;
  time--;
  if (time < 0) {
    Swal.fire({
      title: "BOOOOM",
      text: "Time is out!",
      imageUrl:
        "https://images.unsplash.com/photo-1507048947301-7afc2aca0edc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
    });
    clearInterval(timer);
  }
};

const timer = setInterval(updateCountDown, 1000);

const jokeText = document.querySelector(".dadJoke");

async function generateJoke() {
  const jokesRes = await fetch("https://icanhazdadjoke.com", {
    headers: {
      Accept: "application/json",
    },
  });

  const jokePut = await jokesRes.json();
  jokeText.innerHTML = jokePut.joke;
}

generateJoke();
setInterval(generateJoke, 5000);
