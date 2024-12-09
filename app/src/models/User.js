"use strict";

const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }

  async login() {
    const body = this.body;
    try {
      const user = await UserStorage.getUserInfo(body.id);

      if (user) {
        if (user.id === body.id && user.pw === body.pw) {
          return { success: true };
        }
        return { success: false, msg: "Password does not match" };
      }
      return { success: false, msg: "Username does not exist" };
    } catch (err) {
      return { success: false, err };
    }
  }

  async register() {
    const body = this.body;
    try {
      const response = await UserStorage.save(body);
      return response;
    } catch (err) {
      return { success: false, err };
    }
  }
}

module.exports = User;
