// greeter.sayHello();
// jGreeter.sayHi();


// (function (name) {
//   console.log("Hello " + name);
// })("Coursera!");
var names = ["Moulya", "John", "Jason", "Ben", "Frank", "Jam"];
for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();
  if (firstLetter === 'j') {
    // sayGoodBye.sayWord(names[i]);
    // sayWord(names[i]);
    greeter.sayHello(names[i]);
  } else {
    // sayHello.greet(names[i]);
    // greet(names[i]);
    jGreeter.sayHi(names[i]);
  }}



