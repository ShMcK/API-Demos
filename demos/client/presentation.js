//
//var currentImage = null;
//
//Template.presentation.created = function () {
//  this.state = new ReactiveDict();
//  this.state.set('displayImage', false);
//};
//
//Template.presentation.helpers({
//  'image': function () {
//    var template = Template.instance();
//    if (template.state.get('displayImage')) {
//      return currentImage;
//    }
//  }
//});
//
//Template.presentation.events({
//  'click .query-search': function(e, template) {
//    var value = $(e.currentTarget).val();
//    alert(value);
//  }
//});