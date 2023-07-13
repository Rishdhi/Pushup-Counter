let personcounter = 0;
let countEl = document.getElementById("count-el");
let totalEl = document.getElementById("total-el");
let saveEl = document.getElementById("save-el");

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
  saveEl.textContent += numberOfEntries;
  totalEl.textContent = Number(totalEl.textContent) + personcounter;

  countEl.textContent = 0;
  personcounter = 0;
  
}




