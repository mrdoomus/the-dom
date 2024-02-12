document
  .getElementById("textInput")
  .addEventListener("change", function (event) {
    var typedText = event.target.value;
    document.getElementById("outputText").textContent =
      "You typed: " + typedText;
  });
