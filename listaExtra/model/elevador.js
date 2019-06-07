"use strict";
exports.__esModule = true;
var Elevador = /** @class */ (function () {
    function Elevador(theTotal, theCapacidade) {
        this.andarAtual = 0;
        this.pessoas = 0;
        this.capacidade = theCapacidade;
        this.totalAndar = theTotal;
    }
    Elevador.prototype.getAndarAtual = function () {
        return this.andarAtual;
    };
    Elevador.prototype.setAndarAtual = function (andarAtual) {
        this.andarAtual = andarAtual;
    };
    Elevador.prototype.getTotalAndar = function () {
        return this.totalAndar;
    };
    Elevador.prototype.setTotalAndar = function (totalAndar) {
        this.totalAndar = totalAndar;
    };
    Elevador.prototype.getCapacidade = function () {
        return this.capacidade;
    };
    Elevador.prototype.setCapacidade = function (capacidade) {
        this.capacidade = capacidade;
    };
    Elevador.prototype.getPessoas = function () {
        return this.pessoas;
    };
    Elevador.prototype.setPessoas = function (pessoas) {
        this.pessoas = pessoas;
    };
    Elevador.prototype.subir = function () {
        if (this.totalAndar > (this.andarAtual + 1)) {
            this.andarAtual += 1;
            console.log("subiu um andar");
        }
        else {
            console.log("Ultimo andar");
        }
    };
    Elevador.prototype.descer = function () {
        if (this.andarAtual > 0) {
            this.andarAtual -= 1;
            console.log("deceu um andar");
        }
        else {
            console.log("Nao da mais para decer");
        }
    };
    Elevador.prototype.entrar = function () {
        if (this.capacidade > (this.pessoas + 1)) {
            this.pessoas += 1;
            console.log("entrou");
        }
        else {
            console.log("elevador cheio");
        }
    };
    Elevador.prototype.sair = function () {
        if (this.pessoas > 0) {
            this.pessoas -= 1;
            console.log("saiu");
        }
        else {
            console.log("elevador vazio");
        }
    };
    return Elevador;
}());
exports.Elevador = Elevador;
