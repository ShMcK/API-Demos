var ROOT_API = 'http://api.giphy.com/v1/gifs/';

var settings = {
  API_KEY: 'dc6zaTOxFJmzC',
  size: 'original', // {string} [fixed, downsized, original]
  useRating: false,
  rating: 'pg-13', // {string} [y, g, pg, pg-13, r]
  useTheme: true,
  theme: ''
};

/* SIZES */
// downsized, _large, _still
// fixed_height, _downsampled, _small, _small_still, _still
// fixed_width, _downsampled, _small, _small_still, _still
// original, _still

function getApiCall(query, limit) {
  var apiPath = ROOT_API + // api
    'search' + // type
    '?' +
    (query ? 'q=' + getTheme() + query.replace(/ /g, "+") : '') + // query
    (settings.useRating ? 'rating=' + settings.rating : '') + // rating
    '&' +
    ('api_key=' + settings.API_KEY) + // api key
    '&limit=' + limit; // limit

  return apiPath;
}

function getTheme() {
  return settings.useTheme
    ? settings.theme + ' '
    : '';
}

function giphyFilter(gifs, size) {
  console.log(gifs);
  var array = [];
  for (var i = 0; i < gifs.length; i++) {
    array.push(gifs[i].images[size]);
  }
  return array;
}

function Giphy($q, $http) {
  this.getImage = function (query, limit, size) {
    var limit = limit || 1;
    var size = size || 'original';
    var apiPath = getApiCall(query, limit);
    var deferred = $q.defer();
    $http.get(apiPath)
      .success(function (result) {
        console.log('success result');
        var gifs = giphyFilter(result.data, size);
        deferred.resolve(gifs);
      })
      .error(function (error) {
        deferred.reject(error);
      });
    return deferred.promise;
  }
}

angular.module('app').service('Giphy', ['$q', '$http', Giphy]);