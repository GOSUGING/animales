"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sounds = void 0;
var sounds = exports.sounds = {
  Leon: new Howl({
    src: ['./assets/sounds/Rugido.mp3']
  }),
  Lobo: new Howl({
    src: ['./assets/sounds/Aullido.mp3']
  }),
  Oso: new Howl({
    src: ['./assets/sounds/Gruñido.mp3']
  }),
  Serpiente: new Howl({
    src: ['./assets/sounds/Siseo.mp3']
  }),
  Aguila: new Howl({
    src: ['./assets/sounds/Chillido.mp3']
  })
};