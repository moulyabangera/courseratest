(function (window) {
  var greeter = {};
  greeter.names = ["Moulya", "John", "Jason", "Ben", "Frank", "Jam"];
  var greeting = "Goodbye ";
  greeter.sayHello = function () {
    console.log(greeting + greeter.names[i]);
  }

  window.greeter = greeter;

})(window);
