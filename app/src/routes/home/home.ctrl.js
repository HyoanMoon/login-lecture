"use strict";

const logger = require("../../config/logger");
const User = require("../../models/User");

const output = {
  home: (req, res) => {
    logger.info(`GET / 200 "move to home page"`);
    res.render("home/index");
  },

  login: (req, res) => {
    logger.info(`GET /login 200 "move to login page"`);
    res.render("home/login");
  },

  register: (req, res) => {
    logger.info(`GET /register 200 "move to register page"`);
    res.render("home/register");
  },
};

const process = {
  login: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();
    if (response.err)
      logger.error(
        `POST /login 200 Response: "success:${response.success}, ${response.err}"`
      );
    else
      logger.info(
        `POST /login 200 Response: "success:${response.success}, msg:${response.msg}"`
      );
    // console.log(response);
    return res.json(response);
  },

  register: async (req, res) => {
    const user = new User(req.body);
    const response = await user.register();
    if (response.err)
      logger.error(
        `POST /login 200 Response: "success:${response.success}, ${response.err}"`
      );
    else
      logger.info(
        `POST /register 200 Response: "success:${response.success}, msg:${response.msg}"`
      );
    return res.json(response);
  },
};

module.exports = {
  output,
  process,
};
