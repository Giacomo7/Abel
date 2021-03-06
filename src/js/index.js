import _ from 'lodash';
import printMe from './print.js';

function component() {
  var element = document.createElement('div');
  var button = document.createElement('button');

  button.innerHTML = 'Click me and check the console 2';
  button.onclick = printMe;
  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  element.appendChild(button);
  return element;
}

document.body.appendChild(component());
