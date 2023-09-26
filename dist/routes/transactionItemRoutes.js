"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _ItemTransactionController = require('../controllers/ItemTransactionController'); var _ItemTransactionController2 = _interopRequireDefault(_ItemTransactionController);

const router = new (0, _express.Router)();

router.get('/', _ItemTransactionController2.default.index);
router.post('/:id', _ItemTransactionController2.default.store);

exports. default = router;
