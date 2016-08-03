import 'babel-polyfill';
import $ from 'jquery';

// function sum(){} // Function
// function Sum(){} // Constructor Function
// function* sum(){} // Generator Function

// ******************************

// function* loop() {
//   let x = 10;
//   let y =50;
//   while (x < 25){
//     yield x++; //pause here until asked for 'next' response
//     yield y++;
//   }
//
//   let x + 10+
//
//   yield x + 10;
//   yield x + 20;
//   yield x + 30;
//   yield 'cookies';
//  }
//
// let gen = loop();
// let result = false();
// while(!result) {
//     let next = gen.next();
//     console.log(next);
//     result = next.done;
// }

// ******************************

function* getUserData(user1, user2, user3){
  yield $.getJSON('https://api.github.com/users/' + user1);
  yield $.getJSON('https://api.github.com/users/' + user2);
  yield $.getJSON('https://api.github.com/users/' + user3);
}

window.gen =getUserData('twhitacre', 'kingcons', 'r1v3r5');

// ******************************

function* counter1(x){
  yield x + 1;
  yield x + 2;
  yield x + 3;
}

function* counter2(y){
  yield y;
  yield* counter1(y);
  yield y + 10;
}

window.gen = counter2(10);

// ******************************
