"use strict";

const id = document.querySelector("#id");
const pw = document.querySelector("#pw");
const loginBtn = document.querySelector("#button");

loginBtn.addEventListener("click", login);

function login() {
  if (!id.value) return alert("Please enter id");
  if (!pw.value) return alert("Please enter password");

  const req = {
    id: id.value,
    pw: pw.value,
  };
  //   console.log(req);
  //   console.log("value", id.value);

  // console.log(req);
  // console.log(JSON.stringify(req));

  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/";
      } else {
        if (res.err) return alert(res.err);
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error(new Error("An error occurred while trying to log in"));
    });
}
