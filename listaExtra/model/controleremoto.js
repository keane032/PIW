"use strict";
exports.__esModule = true;
var ControleRemoto = /** @class */ (function () {
    function ControleRemoto(theTv) {
        this.tv = theTv;
    }
    ControleRemoto.prototype.aumentarVolume = function () {
        this.tv.aumentarVolume();
    };
    ControleRemoto.prototype.diminuirVolume = function () {
        this.tv.diminuirVolume();
    };
    ControleRemoto.prototype.trocarDeCanal = function () {
        this.tv.trocarDeCanal();
    };
    ControleRemoto.prototype.trocarParaCanal = function (chanel) {
        this.tv.trocarParaCanal(chanel);
    };
    ControleRemoto.prototype.getVolume = function () {
        return this.tv.getVolume();
    };
    ControleRemoto.prototype.getCanal = function () {
        return this.tv.getCanal();
    };
    return ControleRemoto;
}());
exports.ControleRemoto = ControleRemoto;
