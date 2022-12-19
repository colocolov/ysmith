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

// scroll
const isInViewport = function (elem) {
  const distance = elem.getBoundingClientRect();
  return (
    distance.top >= 0 &&
    distance.left >= 0 &&
    distance.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    distance.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
};

const findMe = document.getElementById("advantages__container");
let eventStatus = false;

window.addEventListener(
  "scroll",
  function (e) {
    if (isInViewport(findMe)) {
      if (!eventStatus) {
        // animate count scriprt
        const dataCounters = document.querySelectorAll(".advantages__name");
        let interval = 1500;

        dataCounters.forEach((item) => {
          let startValue = 0;
          let endValue = parseInt(item.getAttribute("data-counter"));
          let duration = Math.floor(interval / endValue);
          let counter = setInterval(function () {
            startValue += 1;
            item.textContent = startValue;
            if (startValue == endValue) {
              clearInterval(counter);
            }
          }, duration);
        });
        eventStatus = true;
      }
    }
  },
  false
);
