Template.todo.events({
  "click button": function() {
    console.log("text is:", this.component('message').text);
  }
});

Template.todo.rendered = function() {
  this.data.component('message').onChange = console.log.bind(console);
};