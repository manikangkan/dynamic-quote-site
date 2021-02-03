const content = document.getElementById("content");
const author = document.getElementById("author");
const next = document.getElementById("next");
const previous = document.getElementById("previous");
const twitter = document.getElementById("twitter");
const facebook = document.getElementById("facebook");
const behance = document.getElementById("behance");
let randomNumber;
const getNewQuotes = (min, max) => {
  randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  content.innerText = convertData[randomNumber].text;
  convertData[randomNumber].author == null
    ? (author.innerText = `~Unknown`)
    : (author.innerText = `~${convertData[randomNumber].author}`);
};

const api = "https://type.fit/api/quotes";
let convertData;
const getQuotes = async () => {
  try {
    let data = await fetch(api);
    convertData = await data.json();
    getNewQuotes(0, convertData.length);
  } catch (error) {
    console.log(error + " Unable to fetch data");
  }
};

// getQuotes();

next.addEventListener("click", getQuotes);
previous.addEventListener("click", () => {
  (content.innerText = `Help me to fix this :)`),
    (author.innerText = `~Author`);
});

twitter.addEventListener("click", () => {
  window.open(
    ` https://twitter.com/intent/tweet?text=${convertData[randomNumber].text}`
  );
});
facebook.addEventListener("click", () => {
  (content.innerText = `Yet to be listen | Facebook:)`),
    (author.innerText = `~Author`);
});
behance.addEventListener("click", () => {
  (content.innerText = `Yet to be listen | Behance:)`),
    (author.innerText = `~Author`);
});
