'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _catalogue_embed = require('./catalogue_embed.png');

var _catalogue_embed2 = _interopRequireDefault(_catalogue_embed);

var _Image = require('../Image');

var _Image2 = _interopRequireDefault(_Image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import styled from 'styled-components';

function CatalogueEmbedImage(_ref) {
  var size = _ref.size;

  var widths = {
    1: 300,
    2: 200,
    3: 150
  };
  return _react2.default.createElement(_Image2.default, { src: _catalogue_embed2.default, width: '100%' });
}

CatalogueEmbedImage.propTypes = {
  size: _propTypes2.default.oneOf(['1', '2', '3'])
};

CatalogueEmbedImage.defaultProps = {
  size: '3'
};

exports.default = CatalogueEmbedImage;