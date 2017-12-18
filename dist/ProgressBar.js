"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
/**
 * Progress bar component.
 */
var ProgressBar = /** @class */ (function (_super) {
    __extends(ProgressBar, _super);
    function ProgressBar(props) {
        var _this = _super.call(this, props) || this;
        _this.props = props;
        return _this;
    }
    ProgressBar.prototype.render = function () {
        var _this = this;
        var spinner = this.props.isBuffering ? (React.createElement("div", { className: "spinner" },
            React.createElement("div", { className: "double-bounce1" }),
            React.createElement("div", { className: "double-bounce2" }))) : "";
        var timeLine = this.props.hideTimeLine ? "" : (React.createElement("div", { className: "time-line" },
            React.createElement("span", { className: "time-line-progress-bar", style: { width: this.props.percentage + "%" } }, spinner),
            React.createElement("input", { ref: function (progressBar) { _this.progressBar = progressBar; }, type: "range", step: "0.01", value: this.props.percentage, onInput: this.props.onElapsedTimeUpdate, onChange: this.props.onElapsedTimeUpdate })));
        return (React.createElement("div", { className: "progress" },
            React.createElement("div", null, timeLine),
            React.createElement("div", { className: "counters" },
                React.createElement("span", null, (this.props.currentTime === 0) ? "" : this.props.currentTime),
                React.createElement("span", null, (this.props.duration === 0) ? "" : this.props.duration))));
    };
    return ProgressBar;
}(React.Component));
exports.default = ProgressBar;
