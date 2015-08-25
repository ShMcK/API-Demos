Meteor.subscribe('gifOptions');

Template.giphy_image.helpers({
  'image': function() {
    return gifOptions.fetch();
  }
});

Template.giphy_image.events({});