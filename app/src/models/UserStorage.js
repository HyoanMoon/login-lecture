"use strict";

class UserStorage {
  static #users = {
    id: ["abcdalhyo", "문효안", "효안취업"],
    pw: ["123", "1234", "1212"],
    name: ["Hyoan", "Hyoni", "RichHyoan"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
}

module.exports = UserStorage;
