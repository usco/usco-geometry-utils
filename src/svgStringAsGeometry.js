import svgMesh3d from 'svg-mesh-3d'
var parsePath = require('extract-svg-path').parse

export default function svgStringAsGeometry (svgString, options) {
  const defaults = {
    delaunay: true,
    scale: 1,
    clean: true
  }
  options = Object.assign({}, defaults, options)
  const svgPath = parsePath(svgString)
  const logoMesh = svgMesh3d(svgPath, options)
  return logoMesh
}
