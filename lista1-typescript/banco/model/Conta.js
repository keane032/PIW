"use strict";
exports.__esModule = true;
var Conta = /** @class */ (function () {
    function Conta(TheSaldo, TheConta) {
        this.saldo = TheSaldo;
        this.conta = TheConta;
    }
    Conta.prototype.depositar = function (TheValue) {
        this.saldo += TheValue;
    };
    Conta.prototype.sacar = function (TheValue) {
        this.saldo -= TheValue;
    };
    Conta.prototype.valorizar = function () {
        var saldAntigo = this.saldo;
        this.rendimento = (((this.valorizacao / 100) + 1));
        this.saldo *= this.rendimento;
        this.rendimento = this.saldo - saldAntigo;
    };
    return Conta;
}());
exports.Conta = Conta;
