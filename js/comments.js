class Comment {
  constructor(name, text, date) {
    this.name = name;
    this.text = text;
    this.date = date;
    this.addComment(name, text, date);
  }
  addComment(name, text, date) {
    if (this.strip(text) == " " || text == "") {
      this.showWarning();
      console.log("w");
    } else {
      let warning = document.getElementById("no-name");
      warning.classList.remove("warning");
      warning.innerHTML = "";
      let comments = document.getElementById("last-comments");
      let comment = document.createElement("div");
      let commName = document.createElement("span");
      commName.classList.add("commName");
      if (name == "") name = "Аноним";
      commName.innerHTML = name;
      let commDate = document.createElement("span");
      commDate.innerHTML = date;
      commDate.classList.add("commDate");
      let commText = document.createElement("p");
      commText.innerHTML = text;
      commText.classList.add("commText");
      comment.append(commName);
      comment.append(commText);
      comment.append(commDate);
      comment.classList.add("comment");
      comments.append(comment);
    }
  }
  hasText() {
    let text = document.getElementById("comm").value;
    if (text == "") return false;
    return true;
  }
  showWarning() {
    let warning = document.getElementById("no-name");
    warning.classList.add("warning");
    warning.innerHTML = "Вы не можете отправлять пустые комментарии.";
  }
  strip(text) {
    text = text.replace(/\s{1,1000}/g, " ");
    return text;
  }
}

(function () {
  window.addEventListener("load", init);
  function init() {
    document.getElementById("send").addEventListener("click", sendComment);
    document.addEventListener("keyup", enterUp);
  }
})();

function enterUp(event) {
  if (event.code == "Enter" && !event.shiftKey) sendComment();
}

function sendComment() {
  let name = document.getElementById("name").value;
  let text = document.getElementById("comm").value;
  let d = new Date();
  let date =
    ("0" + d.getDate()).slice(-2) +
    "-" +
    ("0" + (d.getMonth() + 1)).slice(-2) +
    "-" +
    d.getFullYear() +
    " " +
    ("0" + d.getHours()).slice(-2) +
    ":" +
    ("0" + d.getMinutes()).slice(-2);
  let comm = new Comment(name, text, date);
  document.getElementById("comm").value = "";
  if (comm.hasText()) document.getElementById("name").value = "";
}
