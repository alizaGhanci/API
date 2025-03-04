
// This is joke api//

let url = "https://v2.jokeapi.dev/joke/Any";
let part1 = document.querySelector(".part1");
let part2 = document.querySelector(".part2");
let btn = document.querySelector(".joke-btn");

async function calling() {
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);

  if (data.type == "single") {
    part1.innerHTML = data.joke;
  } else {
    part2.innerHTML = data.delivery;
    part2.innerHTML = data.setup;
  }
}

// Call function to fetch data and display it in the HTML

btn.addEventListener("click", calling);
