Meteor.publish('gifOptions', function () {
  return GifOptions.find();
});