(function (TCanvas) {

    function TCanvas(width, height) {
        this.canvas = document.createElement("canvas");
        this.context = this.canvas.getContext("2d");
        this.canvas.width = width;
        this.canvas.height = height;
    }

    TCanvas.prototype = {
        drawPoint: function (x, y) {
            this.context.beginPath();
            this.context.arc(x, y, 1, 0, Math.PI * 2, true);
            this.context.closePath();
            this.context.stroke();
            return this;
        },
        drawLine: function (x1, y1, x2, y2) {
            this.context.beginPath();
            this.context.moveTo(x1, y1);
            this.context.lineTo(x2, y2);
            this.context.closePath();
            this.context.stroke();
            return this;
        },
        strokeStyle: function (strokeStyle) {
            this.context.strokeStyle = strokeStyle;
            return this;
        },
        fillStyle: function (fillStyle) {
            this.context.fillStyle = fillStyle;
            return this;
        },
        clear: function (x, y, width, height) {
            this.context.clearRect(x, y, width, height);
            return this;
        },
        drawTo: function (context, sx, sy, sw, sh, dx, sy, dw, dh) {
            context.drawImage(this.canvas, sx, sy, sw, sh, dx, sy, dw, dh);
            return this;
        },
        get: function () {
            return this.canvas;
        }
    }

    window.TCanvas = TCanvas;
})(window.TCanvas || {});