ROOT_API = 'https://api.gettyimages.com/v3/search/images?';

if (!Getty) {
  Getty = {
    options: {},
    config: function (options) {
      var validKeys = _.keys(defaults);
      _.keys(options).forEach(function (key) {
        if (_.indexOf(validKeys, key) >= 0) {
          Getty.options[key] = options[key];
        } else {
          throw key + ' is not a valid Getty key.';
        }
      });
    }
  };
}