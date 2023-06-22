let personcounter = 0;
let countEl = document.getElementById("count-el");

function increment() {
  personcounter += 1;

  countEl.innerText = personcounter;
}

function decrement() {
    personcounter -= 1;
  
    countEl.innerText = personcounter;
  }

const clearButton = document.getElementById("clearButton");

clearButton.addEventListener("click", function () {
  location.reload();
});

function save() {
  let numberOfEntries = personcounter + " - ";

  let saveEl = document.getElementById("save-el");

  saveEl.textContent += numberOfEntries;

  countEl.textContent = 0;
  personcounter = 0;
}




