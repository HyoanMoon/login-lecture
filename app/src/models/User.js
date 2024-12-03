"use strict";

const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }

  async login() {
    const body = this.body;

    const { id, pw } = await UserStorage.getUserInfo(body.id);

    if (id) {
      if (id === body.id && pw === body.pw) {
        return { success: true };
      }
      return { success: false, msg: "Password does not match" };
    }
    return { success: false, msg: "Id does not exist" };
  }

  async register() {
    const body = this.body;
    try {
      const response = await UserStorage.save(body);
      return response;
    } catch (err) {
      return { success: false, msg: err };
    }
  }
}

module.exports = User;
