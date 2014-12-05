LeanComponents.define('todo', {
  created: function(params) {
    this.setState({todos: Todos.find({})})
  },

  rendered: function() {
    console.log("Todo Rendered!");
  },

  destroyed: function() {
    console.log("Todo Destroyed!")
  },
  actions: {
    'add-todo': function(todoText){
      Todos.insert({'title': todoText});
    },
    'remove-todo': function(id){
      Todos.remove(id);
    },
    'mark-done': function(id, isDone){
      Todos.update({_id: this._id}, {$set: {isDone: isDone}})
    }
  }
});