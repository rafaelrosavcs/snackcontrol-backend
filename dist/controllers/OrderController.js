"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var OrderRepository_1 = __importDefault(require("../repositories/OrderRepository"));
var CreateOrderService_1 = __importDefault(require("../services/CreateOrderService"));
var UpdateOrderService_1 = __importDefault(require("../services/UpdateOrderService"));
var OrderController = /** @class */ (function () {
    function OrderController() {
    }
    OrderController.prototype.index = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var orderRepository, orders;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        orderRepository = new OrderRepository_1.default();
                        return [4 /*yield*/, orderRepository.findAll()];
                    case 1:
                        orders = _a.sent();
                        return [2 /*return*/, response.json(orders)];
                }
            });
        });
    };
    OrderController.prototype.indexById = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, orderRepository, order;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("indexById");
                        id = request.params.id;
                        console.log("indexById: " + id);
                        orderRepository = new OrderRepository_1.default();
                        return [4 /*yield*/, orderRepository.findAById(id)];
                    case 1:
                        order = _a.sent();
                        return [2 /*return*/, response.json(order)];
                }
            });
        });
    };
    OrderController.prototype.search = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var title, orderRepository, orders;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        title = request.query.title;
                        orderRepository = new OrderRepository_1.default();
                        return [4 /*yield*/, orderRepository.findAllByName((title === null || title === void 0 ? void 0 : title.toString()) || "")];
                    case 1:
                        orders = _a.sent();
                        return [2 /*return*/, response.json(orders)];
                }
            });
        });
    };
    OrderController.prototype.create = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, title, qtd, unid_medida, lote, escola, id_stock, orderRepository, createOrder, order;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log("OrderController create()");
                        _a = request.body, title = _a.title, qtd = _a.qtd, unid_medida = _a.unid_medida, lote = _a.lote, escola = _a.escola, id_stock = _a.id_stock;
                        orderRepository = new OrderRepository_1.default();
                        createOrder = new CreateOrderService_1.default(orderRepository);
                        return [4 /*yield*/, createOrder.execute({
                                title: title,
                                qtd: qtd,
                                unid_medida: unid_medida,
                                lote: lote,
                                escola: escola,
                                id_stock: id_stock
                            })];
                    case 1:
                        order = _b.sent();
                        return [2 /*return*/, response.status(201).json(order)];
                }
            });
        });
    };
    OrderController.prototype.update = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, _a, title, qtd, unid_medida, lote, escola, id_stock, orderRepository, updateOrder, order;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log("orderController update()");
                        id = request.params.id;
                        _a = request.body, title = _a.title, qtd = _a.qtd, unid_medida = _a.unid_medida, lote = _a.lote, escola = _a.escola, id_stock = _a.id_stock;
                        orderRepository = new OrderRepository_1.default();
                        updateOrder = new UpdateOrderService_1.default(orderRepository);
                        return [4 /*yield*/, updateOrder.execute({
                                id: id,
                                title: title,
                                qtd: qtd,
                                unid_medida: unid_medida,
                                lote: lote,
                                escola: escola,
                                id_stock: id_stock
                            })];
                    case 1:
                        order = _b.sent();
                        console.log("update order...");
                        return [2 /*return*/, response.json(order)];
                }
            });
        });
    };
    return OrderController;
}());
exports.default = OrderController;
