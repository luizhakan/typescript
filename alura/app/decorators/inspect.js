"use strict";
exports.__esModule = true;
exports.inspect = void 0;
function inspect(target, propertyKey, descriptor) {
    var metodoOriginal = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("--- M\u00E9todo " + propertyKey);
        console.log("------ par\u00E2metros: " + JSON.stringify(args));
        var retorno = metodoOriginal.apply(this, args);
        console.log("------ retorno: " + JSON.stringify(retorno));
        return retorno;
    };
    return descriptor;
}
exports.inspect = inspect;
