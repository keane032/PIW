"use strict";
exports.__esModule = true;
var Televisao = /** @class */ (function () {
    function Televisao() {
        this.volume = 0;
        this.chanel = 0;
    }
    Televisao.prototype.aumentarVolume = function () {
        this.volume += 1;
    };
    Televisao.prototype.diminuirVolume = function () {
        this.volume -= 1;
    };
    Televisao.prototype.trocarDeCanal = function () {
        this.chanel += 1;
    };
    Televisao.prototype.trocarParaCanal = function (chanel) {
        this.chanel = chanel;
    };
    Televisao.prototype.getVolume = function () {
        return this.volume;
    };
    Televisao.prototype.getCanal = function () {
        return this.chanel;
    };
    return Televisao;
}());
exports.Televisao = Televisao;
