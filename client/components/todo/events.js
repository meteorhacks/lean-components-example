Template.todo.events({
  "click button": function() {
    console.log("text is:", this.component('message').text);
  }
});

Template.todo.helpers({
  print: function() {
    return function(val, params) {
      console.log("value: " + val + " of " + params.ref)
    };
  }
});
