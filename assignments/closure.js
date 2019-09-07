// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

<<<<<<< HEAD
const lastName = 'Johnson';

function grandfather (lastName) {
  const firstName = "John";
=======
lastName = 'Johnson';

function grandfather (lastName) {
  firstName = "John";
>>>>>>> 1d5fabdfc926613b7a9c906b52bc7e20a136e1d6
  console.log('His name is' + " " + firstName +  " " + lastName);
  son(lastName);



  function son (lastName){
<<<<<<< HEAD
  const firstName = "Jason";
=======
  firstName = "Jason";
>>>>>>> 1d5fabdfc926613b7a9c906b52bc7e20a136e1d6
  console.log('His name is' + " "  + firstName + " " + lastName);
  grandson(lastName);


    function grandson (lastName){

<<<<<<< HEAD
      const firstName = "Jacob";
=======
      firstName = "Jacob";
>>>>>>> 1d5fabdfc926613b7a9c906b52bc7e20a136e1d6
      console.log('His name is' + " " + firstName + " "  + lastName);

    }
  }
}
grandfather(lastName);

<<<<<<< HEAD
=======


>>>>>>> 1d5fabdfc926613b7a9c906b52bc7e20a136e1d6
/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====


<<<<<<< HEAD
=======

>>>>>>> 1d5fabdfc926613b7a9c906b52bc7e20a136e1d6
function counter () {

   let countTotal = 0;

   function counterIncrementer (){

<<<<<<< HEAD
    return ++countTotal;
   }
=======
    return countTotal++;
   }
   countTotal++;
>>>>>>> 1d5fabdfc926613b7a9c906b52bc7e20a136e1d6
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

<<<<<<< HEAD
  let number = 0;

  let value = {
    
    increment: function() {
      number++;
      return number;
    },

    decrement: function() {
      number--;
      return number;
    }

  };
  testFunction = value;
  testFunction.increment();
  testFunction.decrement();
}

  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
=======
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
>>>>>>> 1d5fabdfc926613b7a9c906b52bc7e20a136e1d6
