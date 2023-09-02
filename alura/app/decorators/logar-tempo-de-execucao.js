"use strict";
exports.__esModule = true;
exports.logarTempoDeExecucao = void 0;
function logarTempoDeExecucao() {
    return function (target, propertKey, descriptor) {
        var metodoOriginal = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var t1 = performance.now();
            var retorno = metodoOriginal.apply(this, args);
            var t2 = performance.now();
            console.log(propertKey + ", tempo de execu\u00E7\u00E3o: " + (t2 - t1) / 100);
            retorno;
        };
        return descriptor;
    };
}
exports.logarTempoDeExecucao = logarTempoDeExecucao;
