"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _EntityController = require('../controllers/EntityController'); var _EntityController2 = _interopRequireDefault(_EntityController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

router.get('/', _EntityController2.default.index); // Lista de usuários - Não deveria existir
// router.get('/:id', entityController.show); // Lista usuário - Não deveria existir
router.post('/', _EntityController2.default.store);
router.put('/', _loginRequired2.default, _EntityController2.default.update);
router.delete('/', _loginRequired2.default, _EntityController2.default.delete);

exports. default = router;
