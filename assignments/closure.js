// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

lastName = 'Johnson';

function grandfather (lastName) {
  firstName = "John";
  console.log('His name is' + " " + firstName +  " " + lastName);
  son(lastName);



  function son (lastName){
  firstName = "Jason";
  console.log('His name is' + " "  + firstName + " " + lastName);
  grandson(lastName);


    function grandson (lastName){

      firstName = "Jacob";
      console.log('His name is' + " " + firstName + " "  + lastName);

    }
  }
}
grandfather(lastName);



/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====



function counter () {

   let countTotal = 0;

   function counterIncrementer (){

    return countTotal++;
   }
   countTotal++;
   return counterIncrementer;

   // I honestly don't understand how this works

  // Return a function that when invoked increments and returns a counter variable.
};
 const newCounter = counter();
 console.log(newCounter()); // 1
 console.log(newCounter()); // 2
 console.log(newCounter());

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {

  const value = {

    number: 0,
    
    increment: function() {
      number++;
    },
    decrement: function() {
      number--;
    },

  };

  function increment() {
     value++;
  }

  function decrement
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
