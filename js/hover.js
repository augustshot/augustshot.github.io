(function () {
  window.addEventListener("load", init);
  function init() {
    document
      .getElementById("to-classification")
      .addEventListener("mouseover", changeImg);
    document
      .getElementById("to-collection")
      .addEventListener("mouseover", changeImg);
    document.getElementById("to-info").addEventListener("mouseover", changeImg);
    document
      .getElementById("to-classification")
      .addEventListener("mouseout", returnImg);
    document
      .getElementById("to-collection")
      .addEventListener("mouseout", returnImg);
    document.getElementById("to-info").addEventListener("mouseout", returnImg);
  }
})();
function changeImg() {
  if (this.id == "to-classification") {
    document.getElementById("well").src = "/img/well-hover.jpg";
  }
  if (this.id == "to-collection") {
    document.getElementById("basket").src = "/img/basket-hover.jpg";
  }
  if (this.id == "to-info") {
    document.getElementById("sin").src = "/img/sin-hover.jpg";
  }
}
function returnImg() {
  if (this.id == "to-classification") {
    document.getElementById("well").src = "/img/well.jpg";
  }
  if (this.id == "to-collection") {
    document.getElementById("basket").src = "/img/basket.jpg";
  }
  if (this.id == "to-info") {
    document.getElementById("sin").src = "/img/sin.jpg";
  }
}
