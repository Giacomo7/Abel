import _ from 'lodash';
import '../scss/style.css';
import printMe from './print.js'

function component() {
  var element = document.createElement('div');
  //var button = createElement('button');

  //button.innerHTML = 'Click me and check the console';
  //button.onclick = printMe;
  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());
