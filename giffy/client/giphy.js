//console.log(Meteor.call('giphy'));

var ROOT_API = 'http://api.giphy.com/v1/gifs/';

var settings = {
  size: 'original', // {string} [fixed, downsized, original]
  limit: 1,
  rating: 'pg-13', // {string} [y, g, pg, pg-13, r]
  useRating: false,
  API_KEY: 'dc6zaTOxFJmzC'
};


function reformatRandomImage(data) {
  switch (settings.size) {
    case 'original':
      return {
        url: data.image_original_url,
        width: data.image_width,
        height: data.image_height
      };
      break;
    case 'downsized':
      return {
        url: data.fixed_height_small_url,
        width: data.fixed_height_small_width,
        height: data.fixed_height_small_height
      };
      break;
    case 'fixed':
      return {
        url: data.fixed_height_downsampled_url,
        width: data.fixed_height_downsampled_width,
        height: data.fixed_height_downsampled_height
      };
      break;
    default:
      throw 'Not a valid settings size for images';
  }
}

var currentGIF = null;

function giphy(query) {
  console.log(query);
  var isRandom = !(_.isString(query));
  console.log(random);
  //this.unblock();
  var apiCall = ROOT_API + // api
    (isRandom ? 'random' : 'search') + // type
    '?' +
    (query ? 'q=' + query.replace(/ /g, "+") : '') + // query
    (settings.useRating ? 'rating=' + settings.rating : '') + // rating
    '&' +
    ('api_key=' + settings.API_KEY) + // api key
    (isRandom ? '' : '&limit=1'); // limit

  console.log(apiCall);

  return new Promise(function (resolve, reject) {
    return HTTP.get(apiCall, function (error, result) {
      if (error) {
        console.error('Error fetching result from Giphy');
        reject(error);
      } else {
        if (!random) {
          currentGIF = result.data.data[0].images[settings.size];
          resolve();
        } else {
          currentGIF = reformatRandomImage(result.data);
          resolve();
        }
      }
    });
  });
}

console.log(giphy('cat'));
