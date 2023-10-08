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
