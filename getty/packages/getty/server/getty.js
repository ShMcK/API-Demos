Meteor.methods({
  getty: function (query) {
    var settings = Getty.settings;

    var apiCall = ''; // TODO

    return new Promise(function (resolve, reject) {
      return HTTP.get(apiCall, function (error, result) {
        if (error) {
          console.error('Error fetching result from Getty');
          reject(error);
        } else {
          // search for image

        }
      });
    });
  }
});
