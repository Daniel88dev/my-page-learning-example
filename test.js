document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector(".recommend-form");
  var recommendationList = document.querySelector("#recommend-container");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var name = document.querySelector("#name").value;
    var message = document.querySelector("#recommendation").value;

    if (message === "") {
      alert("Please add a recommendation.");
      return;
    }

    var isConfirmed = confirm(
      `Submit the following recommendation?\n\n"${
        name ? name : "Anonymous"
      } recommends: ${message}"`
    );

    if (isConfirmed) {
      var recommendBox = document.createElement("div");
      recommendBox.classList.add("recommend-box");

      var paragraph = document.createElement("p");
      var emphasis = document.createElement("em");
      emphasis.textContent = `${
        name ? name : "Anonymous"
      } recommends: ${message}`;

      paragraph.append(emphasis);
      recommendBox.append(paragraph);

      recommendationList.append(recommendBox);
    }

    form.reset();
  });
});
