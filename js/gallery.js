(function () {
  window.addEventListener("load", init);
  function init() {
    let gallery = document.querySelector(".gallery");
    let items = gallery.querySelectorAll(".item");
    let dotsContainer = document.querySelector(".dots");
    items.forEach((item, index) => {
      let dot = document.createElement("span");
      dot.classList.add("dot");
      if (index === 0) dot.classList.add("active");
      dot.dataset.index = index;
      dotsContainer.appendChild(dot);
    });

    let dots = document.querySelectorAll(".dot");

    document
      .getElementById("prev")
      .addEventListener("click", () => prev(items, dots));
    document
      .getElementById("next")
      .addEventListener("click", () => next(items, dots));
    document.addEventListener("keydown", keydown);
    function keydown(event) {
      if (event.code == "ArrowRight") next(items, dots);
      if (event.code == "ArrowLeft") prev(items, dots);
    }
    dots.forEach((dot) => {
      dot.addEventListener("click", () => dotClick(dot, items, dots));
    });
  }
})();

function dotClick(dot, items, dots) {
  let index = parseInt(dot.dataset.index);
  showItem(index, items, dots);
}
function prev(items, dots) {
  items.forEach((item, idx) => {
    if (item.classList.contains("active")) index = idx;
  });
  showItem((index - 1 + items.length) % items.length, items, dots);
}

function next(items, dots) {
  items.forEach((item, idx) => {
    if (item.classList.contains("active")) index = idx;
  });
  showItem((index + 1) % items.length, items, dots);
}

function showItem(index, items, dots) {
  items.forEach((item, idx) => {
    item.classList.remove("active");
    dots[idx].classList.remove("active");
    if (idx === index) {
      item.classList.add("active");
      dots[idx].classList.add("active");
    }
  });
}
