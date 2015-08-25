

Template.giphy_search.events({
  'submit form': function (event) {
    event.preventDefault();
    var query = event.target.query.value;
    if (query && query.length > 2) {

      Meteor.call('giphy', query, function(err, result) {
        console.log(error);
        console.log(result);
      });

    }
  }
});