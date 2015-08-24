Template.giphy_search.events({
  'submit form': function (event) {
    event.preventDefault();
    var query = event.target.query.value;
    if (query && query.length > 2) {
      gifs = Meteor.call('giphy', query);
    }
    setInterval(function() {
      console.log(gifs);
    }, 1000);
  }
});