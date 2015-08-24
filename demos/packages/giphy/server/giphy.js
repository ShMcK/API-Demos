Meteor.methods({
  giphy: function (query) {
    settings = Giphy.settings;
    var isRandom = !(_.isString(query));
    this.unblock();
    var apiCall = ROOT_API + // api
      (isRandom ? 'random' : 'search') + // type
      '?' +
      (query ? 'q=' + getTheme() + query.replace(/ /g, "+") : '') + // query
      (settings.useRating ? 'rating=' + settings.rating : '') + // rating
      '&' +
      ('api_key=' + settings.API_KEY) + // api key
      (isRandom ? '' : '&limit=1'); // limitƒ

    return new Promise(function (resolve, reject) {
      return HTTP.get(apiCall, function (error, result) {
        if (error) {
          console.error('Error fetching result from Giphy');
          reject(error);
        } else {
          if (!isRandom) {
            // search for GIF with query
            resolve(result.data.data[0].images[settings.size]);
          } else {
            // random GIF
            resolve(reformatRandomImage(result.data));
          }
        }
      });
    });
  }
});
