module.exports = {
  plugins: [
    require('postcss-import')({
      path: ['src'],
    }),
    require('postcss-nested')(),
    require('postcss-custom-properties')(),
    require('postcss-flexbugs-fixes')(),
    require('autoprefixer')({
      overrideBrowserslist: ['last 3 versions', 'ie >= 9', 'Edge <= 15'],
    }),
    require('postcss-assets')({
      basePath: './assets',
    }),
    require('postcss-normalize')(),
  ],
  sourceMap: true,
};
