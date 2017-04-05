// function createMyObject() {
// 	return {
// 		foo: 'bar',
// 		answerToUniverse: 42,
// 		'olly olly': 'oxen free',
// 		sayHello: function() {
// 			return 'hello';
// 		}
// 	};
// }

// function updateObject(obj) {
// 	obj.foo = 'foo';
// 	obj.bar = 'bar';
// 	obj.bizz = 'bizz';
// 	obj.bang = 'bang';
// 	return obj;
// }

// function personMaker() {
//   var person = {
//     firstName: 'Paul',
//     lastName: 'Jones',

//     fullName: function() {
//     	return this.firstName + ' ' + this.lastName;
//     }
//   };
//   return person;
// }

// var personLog = personMaker();
// // when you call method without () it'll show you actual function, if you use () it'll run the function
// console.log(personLog.fullName());

// function keyDeleter(obj) {
//   delete obj.foo;
//   delete obj.bar;
//   return obj;
// }
//
// var sampleObj = {
//   foo: 'foo',
//   bar: 'bar',
//   bizz: 'bizz',
//   bang: 'bang'
// };
let ourObj = [
    {name: 'Jane Doe', grade: 'A'},
    {name: 'John Dough', grade: 'B'},
    {name: 'Jill Do', grade: 'A'}
  ];




function makeStudentsReport(data) {
  let newArray = [];
  for (let i = 0; i < data.length; i++) {
    newArray.push(`${data[i].name}: ${data[i].grade}`);
  }
  return newArray;
}
makeStudentsReport(ourObj);
