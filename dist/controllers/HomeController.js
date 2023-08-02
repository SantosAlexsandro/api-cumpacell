"use strict";Object.defineProperty(exports, "__esModule", {value: true});class HomeController {
  async index(req, res) {
    res.status(200).json('index');
  }
}

exports. default = new HomeController();
