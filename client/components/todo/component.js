LeanComponents.define('todo', {
  created: function(props) {

  },

  rendered: function() {
    console.log("Todo Rendered!");
  },

  destroyed: function() {
    console.log("Todo Destroyed!")
  }
});