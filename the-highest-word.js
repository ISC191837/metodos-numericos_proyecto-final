"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.theHighestWord = void 0;
exports.theHighestWord = function (sentence) {
    var alphabet = 'abcdefghijklmnñopqrstuvwxyz';
    var wordsArray = [];
    sentence.split(' ').forEach(function (word) {
        var wordScore = 0;
        word.split("").forEach(function (letter) {
            var letterScore = alphabet.split("").indexOf(letter.toLowerCase());
            wordScore += letterScore;
        });
        var actualWord = { content: word, score: wordScore };
        wordsArray = __spreadArrays(wordsArray, [actualWord]);
    });
    return wordsArray.sort(function (first, second) {
        if (first.score < second.score)
            return 1;
        else if (first.score > second.score)
            return -1;
        return 0;
    })[0];
};
