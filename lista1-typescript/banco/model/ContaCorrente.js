"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Conta_1 = require("../model/Conta");
var ContaCorrente = /** @class */ (function (_super) {
    __extends(ContaCorrente, _super);
    function ContaCorrente(TheSaldo, TheConta) {
        var _this = _super.call(this, TheSaldo, TheConta) || this;
        _this.valorizacao = 0;
        return _this;
    }
    ContaCorrente.prototype.sacar = function (TheValue) {
        if ((this.saldo - 2) > TheValue) {
            _super.prototype.sacar.call(this, TheValue);
            _super.prototype.sacar.call(this, 2);
        }
        else {
            console.log("saldo insufuciente");
        }
    };
    ContaCorrente.prototype.valorizar = function () {
        _super.prototype.valorizar.call(this);
    };
    return ContaCorrente;
}(Conta_1.Conta));
exports.ContaCorrente = ContaCorrente;
