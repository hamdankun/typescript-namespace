/// <reference path='my-app.ts' />

// the name should be Mypp
namespace MyApp {
  const person1: MyAppOne = {
    sayHello: () => "Hello",
    sayWorld: () => "World",
  };

  const person2: MyAppTwo = {
    sayHai: () => "Hai",
    sayHoo: () => "Hoo",
  };

  console.log(person1, person2);
}
