"use strict";
exports.__esModule = true;
exports.escapar = void 0;
function escapar(target, propertyKey, descriptor) {
    var metodoOriginal = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var retorno = metodoOriginal.apply(this, args);
        if (typeof retorno === "string") {
            console.log("@escape em a\u00E7\u00E3o na classe " + this.constructor.name + " para o m\u00E9todo " + propertyKey);
            retorno = retorno.replace(/<script>[\s\S]*?<\/script>/, "");
        }
        return retorno;
    };
    return descriptor;
}
exports.escapar = escapar;
