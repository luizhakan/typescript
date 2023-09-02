"use strict";
exports.__esModule = true;
exports.View = void 0;
var View = /** @class */ (function () {
    function View(seletor, escapar) {
        this.escapar = false;
        var elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw new Error("Seletor " + seletor + " na\u0303o existe no DOM");
        }
        if (escapar) {
            this.escapar = escapar;
        }
    }
    View.prototype.update = function (model) {
        this.elemento.innerHTML = this.template(model);
        var template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, "");
        }
    };
    return View;
}());
exports.View = View;
