// Hello!
//
// These are some exercises designed to get you quickly familiar with
// Typescript.
//
// They are practical exercises. Careful thought and research will be necessary
// to complete them. In return, and provided you avoid writing code you don't
// understand, these exercises will guide you to spend time on the areas you
// should develop in order to effectively handle the next level of complexity.
//
// We will work through these areas:
//
// - What is Typescript
// - Type annotations
// - Data Structures
// - Classes & Interfaces
// - API calls
//
// The exercises are structured as a single test file. Typically test and
// implementation files are in separate files — in these exercises they will be
// together, for your convenience.
//
// Let's get started!

describe("What is typescript?", () => {

  it("trivially passes", () => {
    expect(1).toBe(1);
  });

  /*
    Typescript is based on ordinary Javascript. A lot of the time you can write
    plain old Javascript and Typescript will run it just fine.

    Uncomment the test below and make it pass.
  */

  it("is based on ordinary Javascript", () => {
    function greetKay() {
      return "Hello, Kay!"
    }
  
    expect(greetKay()).toEqual("Hello, Kay!");
  });

  /*
    Typescript builds on JS.

    The goal of Typescript is to reduce programmer errors. It does this by
    figuring out the type of every variable in the program and making sure that
    what you're doing with it is valid in that context. For example, it tries to
    prevent mistakes like this:

    ```
    function getName(person) {
      return person.firstName + " " + person.lastName;
    }
    getName({ firstName: "Kay", lastName: "Lack" }) // => "Kay Lack" :)
    getName({ firstName: "Kay", surname: "Lack" }) // => "Kay undefined" :(
    ```

    Typescript has a few ways to do this. Most obviously: *type annotations*.

    Type annotations are you telling the program what type (e.g. number or
    string) a variable is supposed to be. For example:

    ```
    function addOne(n: number) {
      //            ^^^^^^^^^  A type annotation!
      //                       `name: type` instead of just `name`
      return n + 1;
    }
    addOne(5)      // => 6
    addOne("five") // => error!
    ```

    Uncomment the tests below and make them pass.
  */

  // it("adds type annotations 1", () => {
  //   function greet(name) {
  //     // ...
  //   }
  //
  //   expect(greet("Kay")).toEqual("Hello, Kay!");
  // });

  // it("adds type annotations 2", () => {
  //   function power(num, exp) {
  //     return num ** exp;
  //   }
  //
  //   expect(power(2, 8)).toEqual(256);
  // });

  // it("adds type annotations 3", () => {
  //   function and(a, b) {
  //     return a && b;
  //   }
  //
  //   expect(and(true, true)).toEqual(true);
  //   expect(and(true, false)).toEqual(false);
  // });

  /*
    We can also use type annotations to describe more complex types, like arrays
    or objects. For example:

    ```
    Data: [1, 2, 3]
    Type: number[]

    Data: ["abc", "def"]
    Type: string[]

    Data: [[1], [2, 3]]
    Type: number[][] // A list of lists of numbers

    Data: { name: "Fred", age: 5 }
    Type: { name: string, age: number }
    ```

    You'll recall that objects (key value pairs) are quite an important kind of
    object for Javascript, so they're specified in extra detail.

    Uncomment the following tests and make them pass.
  */

  // it("adds type annotations 4", () => {
  //   function sum(list) {
  //     return list.reduce((a, b) => a + b);
  //   }
  //
  //   expect(sum([1, 2, 3])).toEqual(6);
  // });

  // it("adds type annotations 5", () => {
  //   function greetFancy(person) {
  //     return `Greetings, ${person.name} of ${person.origin}.`
  //   }
  //
  //   expect(greetFancy({ name: "Frodo", origin: "The Shire"}))
  //     .toEqual("Greetings, Frodo of The Shire");
  // });

  /*
    Here's an interesting question — in the above examples, how does Typescript
    know what type a function returns?

    It uses a strategy called 'type inference'. If typescript knows what a
    function takes as arguments, and the function's return value is based
    totally on those arguments, then it can also know what the function returns.

    This is pretty convenient! But... it can also lead to bugs. It's a good
    practice in typescript to annotate the return value of your functions too.

    Uncomment the following test and make it pass.
  */

  // it("adds type annotations 6", () => {
  //   function greet(name: string): number {
  //     return `Hello ${name}`;
  //   }
  //
  //   expect(greet("Kay")).toEqual("Hello Kay");
  // })

  /*
    What if you want to write a function where you don't know the type? For
    example, a function that returns the first element of any array:

    ```
    function head(list) {
      return list[0];
    }

    head([1, 2, 3]) // => 1
    head(["a", "b", "c"]) // => "a"
    ```

    What type is `list`? It might be `number[]`, or `string[]`, or something
    else! Equally, what's the return type of the function?

    For this we can use generics. Here's an example:

    ```
    function head<T>(list: T[]): T {
      return list[0];
    }
    ```

    In this, the `<T>` specifies that we're writing a function that works for
    any type `T`. We then set the value of `list` to be `T[]` — a list of `T`s.
    And the return value has to be a single value of that same type `T`.

    Crucially, all of the `T`s have to be the same — if you give it a `string[]`
    you're going to get a `string` back, not a `number`.

    Uncomment this test and make it pass.
  */

  // it("adds type annotations 7", () => {
  //   function flatten(lists: number[][]): number[] {
  //     return lists.reduce((a, b) => [...a, ...b]);
  //   }
  //
  //   expect(flatten([[1, 2], [3, 4], [5, 6]])).toEqual([1, 2, 3, 4, 5, 6]);
  //   expect(flatten([['a', 'b'], ['c', 'd'], ['e', 'f']])).toEqual(['a', 'b', 'c', 'd', 'e', 'f']);
  // });

  /*
    Finally, we can also describe the types of classes and functions in
    Typescript.

    This we can do using interfaces. For example:

    ```
    interface Greeter {
      greet(name: string): string;
    }

    class FriendlyGreeter implements Greeter {
      greet(name: string): string {
        return `Hello, ${name}!`;
      }
    }
    ```

    Programmers use these to define types of class. This is particularly useful
    when refactoring. If you had fifty greeter classes and you needed to make
    sure that they all had a particular method, updating the `Greeter` interface
    would be a good way to go about it.

    Uncomment the following tests and make them pass.
  */

  // it("has interfaces 1", () => {
  //   interface PersonModel {
  //     setName(name: string): void;
  //     getName(): string;
  //   }
  //
  //   class Person implements PersonModel {
  //
  //   }
  //
  //   let person = new Person();
  //   person.setName("Kay");
  //   expect(person.getName()).toEqual("Kay");
  // });

  // it("has interfaces 2", () => {
  //   // This is a little trickier.
  //
  //   interface Equatable {
  //     equals(other: Equatable): boolean;
  //   }
  //
  //   class Cat implements Equatable {
  //     // Note that instance variables need to be defined in the class in order
  //     // to let you access them using `this.variable`. Like this:
  //     name: string;
  //
  //     constructor(name: string) {
  //       this.name = name;
  //     }
  //   }
  //
  //   class Dog implements Equatable {
  //     // ...
  //   }

  //   let moggy = new Cat("Moggy");
  //   let moggy2 = new Cat("Moggy");
  //   let felix = new Cat("Felix");
  //   let felixTheDog = new Dog("Felix");
  //
  //   // Equatable objects should be equal to other objects if:
  //   //   - They are the same class (you can test this using `instanceof`)
  //   //     AND
  //   //   - They have the same name
  //   // Otherwise they are not equal.
  //
  //   // Cats are equal to other cats with the same name
  //   expect(moggy.equals(moggy2)).toBeTruthy();
  //   expect(moggy2.equals(moggy)).toBeTruthy();
  //
  //   // Cats aren't equal to other cats with different names
  //   expect(moggy.equals(felix)).toBeFalsy();
  //   expect(felix.equals(moggy)).toBeFalsy();
  //
  //   // Cats aren't equal to dogs with the same name
  //   expect(felix.equals(felixTheDog)).toBeFalsy();
  //   expect(felixTheDog.equals(felix)).toBeFalsy();
  // });

  /*
    Congrats! Move onto the next part of the project.
  */
});
