"use strict";
exports.__esModule = true;
exports.CleanUp = void 0;
var react_1 = require("react");
exports.CleanUp = function () {
    var _a = react_1.useState(0), currentNum = _a[0], setCurrentNum = _a[1];
    var incrementNum = function () {
        console.log("Mouse event");
        setCurrentNum(function (preNumber) {
            return preNumber + 1;
        });
    };
    react_1.useEffect(function () {
        console.log("userEffect in CleacUp test");
        window.addEventListener("mousedown", incrementNum);
        return function () {
            console.log("CleacUp invoked");
            window.removeEventListener("mousedown", incrementNum);
        };
    }, []);
    return (react_1["default"].createElement("div", { style: style },
        react_1["default"].createElement("h2", null, "CleanUp\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8"),
        currentNum));
};
var style = {
    backgroundColor: "red"
};
