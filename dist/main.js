/**Approach one -Without using ES6 */

/*
const TypeWriter = function(txtElement, words, wait = 3000) {
  this.txtElement = txtElement;
  this.words = words;
  this.txt = '';
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);

  //type Method
  this.type();

  //deleting state
  this.isDeleting = false;
};

//Type Method
//Adding method to constructor function
//using prototype
TypeWriter.prototype.type = function() {
  //Current index of word
  const current = this.wordIndex % this.words.length;

  //Get full text of current word
  const fullTxt = this.words[current];

  //Check if deleting

  if (this.isDeleting) {
    //Remove char
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    //Add Char

    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  //Insert txt into element
  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

  //Initial Type  Speed
  let typeSpeed = 300;

  if (this.isDeleting) {
    typeSpeed /= 2;
  }

  //if word is complete
  if (!this.isDeleting && this.txt === fullTxt) {
    //Make a pause at the end
    typeSpeed = this.wait;

    //set delete
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;

    //Move to next word
    this.wordIndex++;

    //Pause before start typing
    typeSpeed = 500;
  }
  //type method is running every half a second
  setTimeout(() => this.type(), typeSpeed);
};

//Init on Dom Load
document.addEventListener('DOMContentLoaded', init);

//Init App
function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');

  //Initialize typeWriter

  new TypeWriter(txtElement, words, wait);
}
*/

/**Approach Two -Using ES6 */
//ES6 Class
//You create a method within the class rather than a prototype method
//when you are using ES6

class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    //type Method
    this.type();

    //deleting state
    this.isDeleting = false;
  }

  type() {
    //Current index of word
    const current = this.wordIndex % this.words.length;

    //Get full text of current word
    const fullTxt = this.words[current];

    //Check if deleting

    if (this.isDeleting) {
      //Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      //Add Char

      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    //Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    //Initial Type  Speed
    let typeSpeed = 300;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    //if word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      //Make a pause at the end
      typeSpeed = this.wait;

      //set delete
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;

      //Move to next word
      this.wordIndex++;

      //Pause before start typing
      typeSpeed = 500;
    }
    //type method is running every half a second
    setTimeout(() => this.type(), typeSpeed);
  }
}

//Init on Dom Load
document.addEventListener('DOMContentLoaded', init);

//Init App
function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');

  //Initialize typeWriter

  new TypeWriter(txtElement, words, wait);
}
