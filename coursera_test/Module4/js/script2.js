(function (window) {
  var jGreeter = {};
  jGreeter.names = ["Moulya", "John", "Jason", "Ben", "Frank", "Jam"];
  var greeting = "Hello ";
  jGreeter.sayHi = function () {
    console.log(greeting + jGreeter.names[i]);
  }

  window.jGreeter = jGreeter;

})(window);