// BUSINESS LOGIC
  function Todo(task) {
    this.myItem = task;
  }

Todo.prototype.taskDetails= function(){
  return this.myItem;
}



// USER INTERFACE LOGIC
$(document).ready(function() {
  $("form#to-do").submit(function(event) {
    event.preventDefault();
var inputtedItem = $("input#items").val();

var newTodo = new Todo(inputtedItem);
$("ul#listItems").append("<li><span>" + newTodo.taskDetails() + "</span></li>");


$("input#items").val("");

  });
});
