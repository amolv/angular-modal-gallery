import sass from 'rollup-plugin-sass';
import postcss from 'rollup-plugin-postcss';

export default {
  entry     : 'dist/index.js',
  dest      : 'dist/bundles/angular-modal-gallery.umd.js',
  format    : 'umd',
  sourceMap: false,
  globals   : {
    '@angular/core': 'ng.core',
    '@angular/common': 'ng.common'
  },
  moduleName: 'ng.angular.modal.gallery',
  plugins: [
    postcss({
      extensions: [ '.css' ],
    })
  ]
}