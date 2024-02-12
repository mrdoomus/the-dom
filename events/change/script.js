document
  .getElementById("textInput")
  .addEventListener("change", function (event) {
    const typedText = event.target.value;
    document.getElementById("outputText").textContent =
      "You typed: " + typedText;
  });
