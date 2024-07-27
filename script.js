document.addEventListener("DOMContentLoaded", (event) => {
  let form = document.querySelector(".recommend-form");
  let list = document.querySelector(".recommend-container");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.querySelector("#name").value;

    let message = document.querySelector("#recommendation").value;

    if (message === "") {
      alert("Please add a recommendation.");
      return;
    }

    let isConfirmed = confirm(
      `Submit the following recommendation?\n\n"${
        name ? name : "Anonymous"
      } recommends: ${message}"`
    );

    if (isConfirmed) {
      let newBox = document.createElement("div");
      newBox.className = "recommend-box";

      newBox.innerHTML = `<p><em>"${
        name ? name : "Anonymous"
      } recommends: ${message}"</em></p>`;

      list.appendChild(newBox);
    }

    form.reset();
  });
});
