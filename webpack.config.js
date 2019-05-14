module.exports = (env) => {
  if (env && env.NODE_ENV === 'production') {
    return require('./webpack/prod.config.js');
  } else {
    return require('./webpack/dev.config.js');
  }
}
