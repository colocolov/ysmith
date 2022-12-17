const switchInput = document.getElementById("switch-input");
const mainSwitch = document.querySelector(".main-block__switch");
const mainContent = document.querySelector(".main-block__content");

switchInput.addEventListener("click", function (e) {
  if (switchInput.checked) {
    setTimeout(hideSwitch, 1000);
    setTimeout(showContent, 900);
  }
});

function hideSwitch() {
  mainSwitch.classList.add("_hide");
}

function showContent() {
  mainContent.classList.add("_active");
}

const dataCounters = document.querySelectorAll(".advantages__name");

dataCounters.forEach((item) => {
  item.innerHTML = "0";
  const updateCounter = () => {
    const target = +item.getAttribute("data-counter");
    const c = +item.innerText;

    if (c < target) {
      item.innerText = c + 1;
      setTimeout(updateCounter, 1);
    } else {
      item.innerText = target;
    }
  };
  updateCounter();
});
