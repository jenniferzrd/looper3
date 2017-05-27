var app = (function app() {
  "use strict";
window.onload = function looper7() {
  var i, j, tab1 = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  ['hi', 'salut', 'ola', 'ahoj', 'hallo'],
  [true, false,!true,!false, 1 === 1, '0' === 0],
  [{name :'riri'},{name :'fifi'} ,{name :'loulou'}]
];


for(i=0; i< tab1.length; i++) {
  for(j=0; j< tab1[i].length; j++) {
  console.log(tab1[i][j]);
    }
  }

  };
}());
