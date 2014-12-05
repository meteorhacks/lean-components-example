Meteor.startup(function() {
  LeanComponents.renderLayout("layout.main", {"main": "todo", "footer": "footer"});
});