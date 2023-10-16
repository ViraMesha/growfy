document.addEventListener("click", documentClick);

function documentClick(event) {
  const targetItem = event.target;

  if (targetItem.closest(".icon-menu")) {
    document.documentElement.classList.toggle("menu-open");
  }
}

/*
  |==============================
  | Clients slider
  |==============================
*/

const items = document.querySelector(".clients__items");
const slide = document.querySelector(".clients__slide");

// Clone the items element twice and append both copies to the slide
const copy1 = items.cloneNode(true);
const copy2 = items.cloneNode(true);

slide.appendChild(copy1);
slide.appendChild(copy2);

/*
  |==============================
  | Number Counting
  |==============================
*/

const counters = document.querySelectorAll(".advantages__value");

counters.forEach((valueDisplay) => {
  let startValue = 0;
  const endValue = parseInt(valueDisplay.getAttribute("data-count"));
  const counting = setInterval(updateCounting, 1);

  function updateCounting() {
    if (startValue < 1000) {
      startValue += 1;
      if (endValue === 10) {
        valueDisplay.innerText = startValue + "+";
      } else if (endValue === 98) {
        valueDisplay.innerText = startValue + "%";
      } else {
        valueDisplay.innerText = startValue;
      }
    }

    if (startValue >= 1000) {
      startValue += 100;
      if (endValue === 12000) {
        valueDisplay.innerText = startValue / 10000 + "M+";
      } else if (endValue === 34000) {
        valueDisplay.innerText = startValue / 10000 + "B";
      }
    }

    if (startValue >= endValue) {
      clearInterval(counting);
    }
  }
});
