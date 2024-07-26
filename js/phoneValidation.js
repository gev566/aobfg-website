const startInputValidation = (element) => {
  element.addEventListener("input", function () {
    const input = element.value.replace(/\D/g, "");
    let formattedInput = "+7 (";

    if (input.length > 1) formattedInput += input.substring(1, 4);

    if (input.length >= 5) formattedInput += ") " + input.substring(4, 7);

    if (input.length >= 8) formattedInput += "-" + input.substring(7, 9);

    if (input.length >= 10) formattedInput += "-" + input.substring(9, 11);

    element.value = formattedInput;
  });

  element.addEventListener("keydown", function (e) {
    if (
      e.key === "Backspace" &&
      element.value.replace(/\D/g, "").length === 1
    ) {
      e.preventDefault();
      element.value = "+7 (";
    }
  });
  element.addEventListener("focus", function () {
    if (element.value === "") element.value = "+7 (";
  });
  element.addEventListener("blur", function () {
    if (element.value === "+7 (") element.value = "";
  });
};
