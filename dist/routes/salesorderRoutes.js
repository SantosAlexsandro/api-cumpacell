"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _SalesorderController = require('../controllers/SalesorderController'); var _SalesorderController2 = _interopRequireDefault(_SalesorderController);

var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

router.get('/', _SalesorderController2.default.index);
router.post('/', _SalesorderController2.default.store);
router.put('/:id', _SalesorderController2.default.update);
router.get('/:id', _SalesorderController2.default.show);
router.delete('/:id', _loginRequired2.default, _SalesorderController2.default.delete);

exports. default = router;
