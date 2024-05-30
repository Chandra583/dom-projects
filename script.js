let isStatus = document.querySelector("h5");
let names = document.querySelector("h1");
let change = document.querySelector("#Add");

let check = 0;

change.addEventListener("click", function () {
  if (check == 0) {
    isStatus.innerHTML = `Now ${names.innerText} is yours friend `;
    isStatus.style.color = "green";
    change.innerHTML = "remove";
    check = 1;
  } else {
    isStatus.innerHTML = `Now ${names.innerText} is not your friend`;
    isStatus.style.color = "red";
    change.innerHTML = "Add";
    check = 0;
  }
});
