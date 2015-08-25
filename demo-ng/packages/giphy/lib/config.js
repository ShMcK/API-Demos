ROOT_API = 'http://api.giphy.com/v1/gifs/';

if (!Giphy) {
  Giphy = {
    options: {},
    config: function (options) {
      var validKeys = _.keys(defaults);
      _.keys(options).forEach(function (key) {
        if (_.indexOf(validKeys, key) >= 0) {
          Giphy.options[key] = options[key];
        } else {
          throw key + ' is not a valid Giphy key.';
        }
      });
    }
  };
}