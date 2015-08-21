Meteor.startup(function () {
  Getty.settings = _.extend(defaults, Getty.options);
});