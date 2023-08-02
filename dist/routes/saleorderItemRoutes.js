"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _SaleorderItemController = require('../controllers/SaleorderItemController'); var _SaleorderItemController2 = _interopRequireDefault(_SaleorderItemController);

var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

router.get('/', _SaleorderItemController2.default.index);
router.post('/', _SaleorderItemController2.default.store);
router.put('/:id', _SaleorderItemController2.default.update);
router.get('/:id', _SaleorderItemController2.default.show);
router.delete('/:id', _loginRequired2.default, _SaleorderItemController2.default.delete);

exports. default = router;
