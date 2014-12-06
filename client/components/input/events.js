Template.input.events({
  "keyup input": function(e) {
    var val = $(e.target).val();
    this.params.text = val;
    this.trigger('onChange', val);
  }
});