# Object Oriented Programming in JavaScript

### Introducing Classes

Object Oriented Programming (OOP) refers to using self-contained pieces
of code to develop applications. We call these self-contained pieces of 
code objects, better known as Classes in most OOP programming languages 
and Functions in JavaScript.

**Lets create a 'drone' class**

``` javascript
Enter node
```

``` javascript
class Drone {}
```

Create a new instance of the class Drone
``` javascript
let drone = new Drone();
console.log(drone);
console.log(typeof Drone);
```

**What is this we see, a function!!!, ES6 provides syntactic sugar**
``` javascript
var Drone = function() {};
```
### Constructor

A constructor is like a cookie cutter to make more than one object with 
similar features. In other words, the benefit of using a constructor is 
that it makes it easy to create multiple objects with the same properties 
and methods.

``` javascript
class Drone {
  constructor() {
      console.log('in Drone constructor');
  }
}
```
``` javascript
class Drone {
  constructor(id, name) {
      console.log(`id is ${id}`);
  }
}

let drone = new Drone('A123')
```

``` javascript
class Drone {
  constructor(id, name) {
      console.log(`id is ${id} and name is ${name}`);
  }
}

let drone = new Drone('A123', "Twirl")
```

### Instance variables

Normally, we want to create instance variables in constructors
**Remember 'this'**

``` javascript
class Drone {
  constructor(id, name) {
      this.id = id,
      this.name = name
  }
}

let drone = new Drone('A123', "Twirl")

console.log(`id is ${drone.id} and name is ${drone.name}`);
```

lets create another instance of class Drone

``` javascript
class Drone {
  constructor(id, name) {
      this.id = id;
      this.name = name;
  }
}

let drone = new Drone('A123', "Twirl")
let drone2 = new Drone('A321', "Flyer")
console.log(`id is ${drone.id} and name is ${drone.name}`);
```

### Static Properties

Belong **ONLY** to the class **NOT** the instances

``` javascript
class Drone {
  constructor(id, name) {
      this.id = id;
      this.name = name;
  }
}
**Drone.maxHeight = 2000;**
let drone = new Drone('A123', "Twirl")
let drone2 = new Drone('A321', "Flyer")
console.log(`id is ${drone.id} and name is ${drone.name}`);
console.log(`drone 2 id is ${drone2.id} and drone 2 name is ${drone2.name}`);
**console.log(Drone.maxHeight);**
**console.log(drone.maxHeight);**
**console.log(drone2.maxHeight);**
```

### Methods

``` javascript
class Drone {
  constructor(id, name) {
      this.id = id;
      this.name = name;
  }

  fly() {
      console.log(`Drone ${this.id} is flying`)
  }
}

let drone = new Drone('A123', "Twirl")
let drone2 = new Drone('A321', "Flyer")

drone.fly();
drone2.fly();
```

```javascript
class Drone {
  constructor(id, name) {
      this.id = id;
      this.name = name;
  }
  
  static getCompany() {
    console.log('You are in a static method called getCompany')
  }

  fly() {
      console.log(`Drone ${this.id} is flying`)
  }
}

let drone = new Drone('A123', "Twirl")
let drone2 = new Drone('A321', "Flyer")

drone.fly();
drone2.fly()
Drone.getCompany();
drone.getCompany();
```

### Inheritance

```javascript
class Vehicle {}

class Drone extends Vehicle {}
class Car extends Vehicle {}

let c = new Car();
```

```javascript
console.log(`${c instanceof Car}`);
console.log(`${c instanceof Vehicle}`);
```

```javascript
class Vehicle {
  constructor() {
    console.log('constructing Vehicle')
  }
}

class Drone extends Vehicle {}
class Car extends Vehicle {
  constructor() {
    // super();
    console.log('constructing car')
  }
}

let c = new Car();
```

```javascript
class Vehicle {
  constructor(license) {
    this.license = license;
  }
}

class Drone extends Vehicle {}
class Car extends Vehicle {
  constructor(license) {
    super(license);
    console.log('constructing car')
  }
}

let c = new Car('A122345');

console.log(c.license);

```

```javascript
class Vehicle {
  constructor(license) {
    this.license = license;
    this.gpsenabled = true;
  }
}

class Drone extends Vehicle {}
class Car extends Vehicle {
  constructor(license) {
    super(license);
  }
}

let c = new Car('A122345');

console.log(`${c.license} ${c.gpsenabled}`);

```
** Can you think of a way to setting gpsenabled to false?**

```javascript
class Vehicle {
    start() {
        console.log('starting vehicle');
    }
}

class Car extends Vehicle {
        start() {
        super.start();
        console.log('starting Car');
    }    
}

let c = new Car();
c.start();
```

```javascript
class Vehicle {
    start() {
        console.log('starting vehicle');
    }
    static getCompanyName() {
        console.log('staring Car')
    }
}

class Car extends Vehicle {
        start() {
        super.start();
        console.log('starting Car');
    }
    static getComapnyName() {
        super.getCompanyName();
        console.log('My Other Company');
    }    
}

let c = new Car();
c.getCompanyName();
```
### Practice

Can you write a class Animal with a constructor that has
sound. The class Animal also has a method speak which returns 
the sound.
Now create a class Cat that inherits from Animal, with its own constructor
function that takes a sound and name and has its own method sound.
```javascript
//Output
let superCat = new Cat("meowmeowmeow", "Cinder");
superCat.speak()    // Cinder says meowmeowmeow
console.log(superCat instanceof Animal) // True
console.log(superCat instanceof Cat)    // True
```




