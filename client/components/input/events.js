Template.input.events({
  "keyup input": function(e) {
    var val = $(e.target).val();
    this.params.text = val;
    if(this.params.onChange) {
      this.params.onChange(val);
    }
  }
});