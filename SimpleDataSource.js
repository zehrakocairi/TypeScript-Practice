"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleDataSource = void 0;
var Product_1 = require("./Product");
var SimpleDataSource = /** @class */ (function () {
    function SimpleDataSource() {
        this.products = new Array(new Product_1.Product(1, "Samsung S5", "Phone", 200), new Product_1.Product(2, "Samsung S6", "Phone", 300), new Product_1.Product(3, "Samsung S7", "Phone", 400), new Product_1.Product(4, "Samsung S8", "Phone", 500));
    }
    SimpleDataSource.prototype.getProducts = function () {
        return this.products;
    };
    return SimpleDataSource;
}());
exports.SimpleDataSource = SimpleDataSource;
