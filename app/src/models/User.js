"use strict";

const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }

  login() {
    const body = this.body;
    const { id, pw } = UserStorage.getUserInfo(body.id);
    console.log("id", id, " pw", pw);

    if (id) {
      if (id === body.id && pw === body.pw) {
        return { success: true };
      }
      return { success: false, msg: "Password does not match" };
    }
    return { success: false, msg: "Id does not exist" };
  }
}

module.exports = User;
