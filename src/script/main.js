function getChartTypes() {
  const uppercase = document.querySelector("#include_uppercase").checked;
  const Lowercase = document.querySelector("#include_lowercase").checked;
  const number = document.querySelector("#include_number").checked;
  const sepcialCharacter = document.querySelector(
    "#include_special_character"
  ).checked;

  const charTypes = [];

  if (uppercase) {
    charTypes.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  }

  if (Lowercase) {
    charTypes.push("abcdefghijklmnopqrstuvwxyz");
  }

  if (number) {
    charTypes.push("1234567890");
  }

  if (sepcialCharacter) {
    charTypes.push("!@#$%&*");
  }
  return charTypes;
}

function getPasswordSize() {
  const size = document.querySelector("#size").value;

  if (isNaN(size) || size < 4 || size > 128) {
    alert("Tamanho inválido, digite um número entre 4 e 128!");
  }

  return size;
}

function randomCharType(charTypes) {
  const randomIndex = Math.floor(Math.random() * charTypes.length);

  return charTypes[randomIndex][
    Math.floor(Math.random() * charTypes[randomIndex].length)
  ];
}

function generatePassword(size, charTpyes) {
  let passwordGenerated = "";

  while (passwordGenerated.length < size) {
    passwordGenerated += randomCharType(charTpyes);
  }

  return passwordGenerated;
}

document.querySelector("#generate").addEventListener("click", function () {
  const size = getPasswordSize();
  const charTpyes = getChartTypes();

  const passwordGenerated = generatePassword(size, charTpyes);

  document.querySelector("#password_container").classList.add("show");
  document.querySelector("#password").textContent = passwordGenerated;
});

document.querySelector("#copy").addEventListener("click", function () {
  navigator.clipboard.writeText(
    document.querySelector("#password").textContent
  );
  message("Senha copiada com sucesso!", "#84cc16");
});
