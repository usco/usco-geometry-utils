'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = svgStringAsGeometry;

var _svgMesh3d = require('svg-mesh-3d');

var _svgMesh3d2 = _interopRequireDefault(_svgMesh3d);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var parsePath = require('extract-svg-path').parse;

function svgStringAsGeometry(svgString, options) {
  var defaults = {
    delaunay: true,
    scale: 1,
    clean: true
  };
  options = Object.assign({}, defaults, options);
  var svgPath = parsePath(svgString);
  var logoMesh = (0, _svgMesh3d2.default)(svgPath, options);
  return logoMesh;
}