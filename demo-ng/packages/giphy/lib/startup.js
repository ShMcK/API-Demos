Meteor.startup(function () {
  Giphy.settings = _.extend(defaults, Giphy.options);
});