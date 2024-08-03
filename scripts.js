let inputNumber = 0;

let generateKey = function () {
  let secretKey = Math.floor(100000 + Math.random() * 900000);
  let x = document.getElementById("secret-key");
  x.innerText = secretKey;
};

function checkDigits(num) {
  let digits = num.toString();
  return digits.length;
}

function addDigit(key) {
  if (checkDigits(inputNumber) < 6) {
    document.getElementById("display-key").innerHTML = inputNumber * 10 + key;
    inputNumber = inputNumber * 10 + key;
  }
}

function cancel() {
  if (inputNumber !== 0) {
    inputNumber = Math.floor(inputNumber / 10);
    if (inputNumber === 0)
      document.getElementById("display-key").innerHTML = "";
    else document.getElementById("display-key").innerHTML = inputNumber;
  } else document.getElementById("display-key").innerHTML = "";
}

function submit() {
  let generatedKey = document.getElementById("secret-key").innerHTML;
  let status = document.getElementById("status");
  if (generatedKey == inputNumber) {
    status.innerHTML = `<span id="green-sign" class="material-symbols-outlined">check</span><span>  Your secret key is matched</span>`;
  } else
    status.innerHTML = `<span id="red-sign" class="material-symbols-outlined">close</span><span>  Your secret key is not matched</span>`;
}

function clr() {
  inputNumber = 0;
  document.getElementById("display-key").innerHTML = "";
  document.getElementById("status").innerHTML = "  ";
}
