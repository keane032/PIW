"use strict";
exports.__esModule = true;
var Pessoa = /** @class */ (function () {
    function Pessoa(theName, theAltura, theNac) {
        this.nome = theName;
        this.altura = theAltura;
        this.dataNascimento = theNac;
    }
    Pessoa.prototype.calcularIdade = function () {
        var today = new Date();
        var myBirth = new Date(this.dataNascimento);
        var one_day = 1000 * 60 * 60 * 24;
        var date1_ms = myBirth.getTime();
        var date2_ms = today.getTime();
        var difference_ms = date2_ms - date1_ms;
        return (Math.round(difference_ms / one_day)) / 365;
    };
    Pessoa.prototype.mostrarDado = function () {
        console.log("Nome:" + this.nome);
        console.log("Altura:" + this.altura);
        console.log("Naci:" + this.dataNascimento);
        console.log("idade:" + this.calcularIdade());
    };
    Pessoa.prototype.getNome = function () {
        return this.nome;
    };
    Pessoa.prototype.getNac = function () {
        return this.dataNascimento;
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
