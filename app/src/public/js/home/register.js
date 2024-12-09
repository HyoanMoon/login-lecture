"use strict";

const id = document.querySelector("#id");
const name = document.querySelector("#name");
const pw = document.querySelector("#pw");
const confirmPw = document.querySelector("#confirm-pw");
const registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register() {
  if (!id.value) return alert("Please enter id");
  if (pw.value !== confirmPw.value) return alert("Password does not match");

  const req = {
    id: id.value,
    name: name.value,
    pw: pw.value,
  };
  // console.log(req);
  //   console.log("value", id.value);

  // console.log(req);
  // console.log(JSON.stringify(req));

  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/login";
      } else {
        if (res.err) return alert(res.err);
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error(new Error("An error occurred while trying to register"));
    });
}
