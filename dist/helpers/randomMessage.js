'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function randomMessage() {
  var messages = ['Even superheroes have sidekicks', 'Stand up and stretch', 'Your business\' best friend'];
  return messages[Math.floor(Math.random() * messages.length)];
}

exports.default = randomMessage;