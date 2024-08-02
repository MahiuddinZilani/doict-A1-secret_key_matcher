let changeFont = function () {
  //   let font = document.getElementsByTag("h1").value;
  console.log("hello");
};

let generateKey = function () {
  let secretKey = Math.floor(100000 + Math.random() * 900000);
  let x = document.getElementById("secret-key");
  x.innerText = secretKey;
};
