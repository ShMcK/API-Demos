Meteor.methods({
  giphy: function (query) {
    settings = Giphy.settings;
    var isRandom = !(_.isString(query));
    this.unblock();
    var apiPath = ROOT_API + // api
      (isRandom ? 'random' : 'search') + // type
      '?' +
      (query ? 'q=' + getTheme() + query.replace(/ /g, "+") : '') + // query
      (settings.useRating ? 'rating=' + settings.rating : '') + // rating
      '&' +
      ('api_key=' + settings.API_KEY) + // api key
      (isRandom ? '' : '&limit=1'); // limit

    return APICall(apiPath, isRandom);
  }
});

function APICall(apiPath, isRandom) {

  return HTTP.get(apiPath, function (error, result) {
    if (error) {
      console.error('Error fetching result from Giphy');
      return error;
    } else {
      if (!isRandom) {
        // search for GIF with query

        return result.data.data[0].images[settings.size];
      } else {
        // random GIF
        return reformatRandomImage(result.data);
      }
    }
  });
}
