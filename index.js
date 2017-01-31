// // ### Introducing Classes

// ### Constructor

// // class Drone {}
// class Drone {
//   constructor(id, name, feature) {
//     this.id = id;
//     this.name = name;
//     this.feature = feature;
//   }
//   static getCompany() {
//     console.log('You are in the static method');
//   }
//   fly() {
//     console.log(`Drone ${this.id} is flying`);
//   }
// }

// //Create a new instance of the class Drone
// let drone = new Drone('A123', 'Twirl');
// let drone2 = new Drone('A321', 'Flyer');

// let drone3 = new Drone('A200', 'Saucer', 'NightVision');

// drone.fly(); // "Drone A123 is flying"
// drone2.fly(); // "Drone A321 is flying"

// Drone.getCompany();

// drone.getCompany();
// // TypeError: drone.getCompany is not a function

// //drone2.getCompany();

// ### Inheritance

class Transportation {
  start() {
    console.log('Starting Transportation');
  }
  fly () {
    console.log('Taking off');
  }
}

// class Vehicle {
//   // constructor(license, state, gpsenabled) {
//   //   // console.log('constructing Vehicle');
//   //   this.license = license;
//   //   this.state = state;
//   //   this.gpsenabled = gpsenabled;
//   // }
// }

class Vehicle extends Transportation {}

class Drone extends Vehicle {
  constructor(license, state, gpsenabled) {
    super(license, state, gpsenabled);
    console.log('constructing Drone');
  }
}

class Car extends Vehicle{
  // constructor(license, state, gpsenabled) {
  //   super(license, state, gpsenabled);
  //   // ***The super keyword is used to call functions on an object's parent.
  //   console.log('constructing Car');
    // this.state = state;
    start() {
      super.start();
      console.log('Starting car');
    }
    fly() {
      super.fly();
      console.log('Flying car');
    }
  // }
}

let c = new Car('A12345', 'CA', false);
// "constructing Car"
// console.log(c.license); // "A12345"
// console.log(c.state); // "CA"
// console.log(c.gpsenabled); // "false"
c.start();
// "Starting car"
c.fly();
// "Taking off"
// "Flying car"

let b = new Car('B12345', 'CA', true);
// "constructing Car"
// console.log(b.gpsenabled); // "true"

let d = new Drone('D12345', 'MT', true);
// "constructing Drone"
// console.log(d);
// "{ license: 'D12345', state: 'MT', gpsenabled: true }"


console.log(`${c instanceof Car}`); // true
console.log(`${c instanceof Vehicle}`); // true






























