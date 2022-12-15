const switchInput = document.getElementById("switch-input");
const mainSwitch = document.querySelector(".main__switch");
const mainContent = document.querySelector(".main__content");

switchInput.addEventListener("click", function (e) {
  if (switchInput.checked) {
    setTimeout(hideSwitch, 1000);
    setTimeout(showContent, 800);
  }
});

function hideSwitch() {
  mainSwitch.classList.add("_hide");
}

function showContent() {
  mainContent.classList.add("_active");
}
