"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
var App = function () {
    var _a = react_1.useState("text"), status = _a[0], setStatus = _a[1];
    var _b = react_1.useState(), input = _b[0], setInput = _b[1];
    var _c = react_1.useState(0), counter = _c[0], setCounter = _c[1];
    var onClickText = function () {
        setStatus(1);
    };
    var onChangeHandler = function (event) {
        setInput(event.target.value);
    };
    react_1.useEffect(function () {
        console.log("コンソールに流れてるよ〜");
        document.title = "\u30AB\u30A6\u30F3\u30C8" + counter;
    }, [counter]);
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement("h4", null, status),
        react_1["default"].createElement("br", null),
        react_1["default"].createElement("button", { onClick: onClickText }, "\u30DC\u30BF\u30F3"),
        react_1["default"].createElement("br", null),
        react_1["default"].createElement("input", { type: "text", value: input, onChange: onChangeHandler }),
        react_1["default"].createElement("h4", null, input),
        react_1["default"].createElement("br", null),
        react_1["default"].createElement("h4", null, counter),
        react_1["default"].createElement("button", { onClick: function () { return setCounter(function (preCounter) { return preCounter + 1; }); } }, "\u5897\u3084\u3059")));
};
exports["default"] = App;
