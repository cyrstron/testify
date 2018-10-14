module.exports = function(config) {
  console.log(config)
  config.devServer = config.devServer || {};

  config.devServer.headers = config.devServer.headers || {};
  config.devServer.headers['Access-Control-Allow-Origin'] = '*';

}