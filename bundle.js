(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

window.addEventListener('load', function () {
  var d2pos = [[300, 50], [100, 250], [300, 250]];
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  for (var i = 0; i < d2pos.length; i++) {
    var start = d2pos[i];
    var end = d2pos[i + 1] !== undefined ? d2pos[i + 1] : d2pos[0];
    ctx.beginPath();
    ctx.moveTo(start[0], start[1]);
    ctx.lineTo(end[0], end[1]);
    ctx.stroke();
  }
  var base = 200;
  var height = 200;
  ctx.strokeStyle = 'rgb(255, 0, 0)';
  for (var _i = height; _i >= 0; _i--) {
    var hypo = Math.floor(Math.sqrt(Math.pow(base - _i, 2) + Math.pow(height - _i, 2)));
    var length = Math.floor(Math.sqrt(Math.pow(hypo, 2) - Math.pow(height - _i, 2)));
    console.log(hypo, length);
    ctx.beginPath();
    ctx.moveTo(300, 50 + _i);
    ctx.lineTo(length + 100, 50 + _i);
    ctx.stroke();
  }
});

},{}]},{},[1]);
