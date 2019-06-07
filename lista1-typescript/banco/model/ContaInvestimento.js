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
var ContaInvestimeto = /** @class */ (function (_super) {
    __extends(ContaInvestimeto, _super);
    function ContaInvestimeto(TheSaldo, TheConta) {
        var _this = _super.call(this, TheSaldo, TheConta) || this;
        _this.selic = 2;
        _this.valorizacao = _this.selic;
        return _this;
    }
    ContaInvestimeto.prototype.sacar = function (TheValue) {
        var taxa = (TheValue * (5 / 100));
        taxa += 10;
        if ((this.saldo - TheValue) > taxa) {
            _super.prototype.sacar.call(this, TheValue);
            _super.prototype.sacar.call(this, taxa);
        }
        else {
            console.log("saldo insufuciente");
        }
    };
    ContaInvestimeto.prototype.valorizar = function () {
        _super.prototype.valorizar.call(this);
    };
    ContaInvestimeto.prototype.extrato = function () {
        console.log("EXTRATO");
        console.log("tipo..Conta Investimento");
        console.log("Saldo.." + this.saldo);
        console.log("Conta.." + this.conta);
        console.log("Valorizacao.." + this.valorizacao);
    };
    return ContaInvestimeto;
}(Conta_1.Conta));
exports.ContaInvestimeto = ContaInvestimeto;
