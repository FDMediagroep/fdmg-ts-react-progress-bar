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
        /**
         *  Convert seconds (number) to a human readable time format: 2u 3m 34s
         */
        _this.convertToReadableTime = function (seconds) {
            var h = Math.floor(seconds / 3600);
            var m = Math.floor(seconds % 3600 / 60);
            var s = Math.floor(seconds % 3600 % 60);
            var hDisplay = h > 0 ? h + "u " : "";
            var mDisplay = m > 0 ? m + "m " : "";
            var sDisplay = s > 0 ? s + "s" : "";
            return hDisplay + mDisplay + sDisplay;
        };
        _this.props = props;
        return _this;
    }
    ProgressBar.prototype.render = function () {
        var _this = this;
        var spinner = this.props.isBuffering ? (React.createElement("div", { className: "loader" },
            React.createElement("div", { className: "double-bounce1" }),
            React.createElement("div", { className: "double-bounce2" }))) : "";
        var timeLine = this.props.hideTimeLine ? "" : (React.createElement("div", { className: "time-line" },
            React.createElement("span", { className: "time-line-progress-bar", style: { width: this.props.percentage + "%" } }, spinner),
            React.createElement("input", { ref: function (progressBar) { _this.progressBar = progressBar; }, type: "range", step: "0.01", value: this.props.percentage, onInput: this.props.onElapsedTimeUpdate, onChange: this.props.onElapsedTimeUpdate })));
        var currentTime = this.props.hideProgressBarCurrentTime ? "" : (React.createElement("span", null, (this.props.currentTime === 0) ? "" : this.convertToReadableTime(this.props.currentTime)));
        var duration = this.props.hideProgressBarDuration ? "" : (React.createElement("span", null, (this.props.duration === 0) ? "" : this.convertToReadableTime(this.props.duration)));
        var counters = this.props.hideProgressBarCurrentTime && this.props.hideProgressBarDuration ? "" : (React.createElement("div", { className: "counters" },
            currentTime,
            duration));
        return (React.createElement("div", { className: "progress" },
            React.createElement("div", null, timeLine),
            counters));
    };
    return ProgressBar;
}(React.Component));
exports.default = ProgressBar;
