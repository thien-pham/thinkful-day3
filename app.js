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
//
//     fullName: function() {
//     	return this.firstName + ' ' + this.lastName;
//     }
//   };
//   return person;
// }
//
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
// let ourObj = [
//     {name: 'Jane Doe', grade: 'A'},
//     {name: 'John Dough', grade: 'B'},
//     {name: 'Jill Do', grade: 'A'}
//   ];
//
//
//
//
// function makeStudentsReport(data) {
//   let newArray = [];
//   for (let i = 0; i < data.length; i++) {
//     newArray.push(`${data[i].name}: ${data[i].grade}`);
//   }
//   return newArray;
// }
// makeStudentsReport(ourObj);
// var testData = [
//   {
//     name: 'Burt',
//     status: 'Playing hooky',
//     course: 'Biology'
//   },
//   {
//     name: 'Melanie',
//     status: 'Sick',
//     course: 'Mathematics'
//   },
//   {
//     name: 'Leonard',
//     status: 'AWOL',
//     course: 'Computer science'
//   }
// ];
//
//
// function enrollInSummerSchool(students) {
//   for(let i = 0; i < students.length; i++) {
//     students[i].status = 'In Summer school';
//   }
//   return testData;
// }
// const studentStatus = enrollInSummerSchool(testData);
// console.log(studentStatus);
//
// var scratchData = [
//   {id: 22, foo: 'bar'},
//   {id: 28, foo: 'bizz'},
//   {id: 19, foo: 'bazz'}
// ];
//
// function findById(items, idNum) {
//   for (let i=0; i < items.length; i++) {
//     if (items[i].id === idNum) {
//       return items[i];
//     }
//   }
// }
// const idFinder = findById(scratchData, 22);
// console.log(idFinder);
var objectA = {
  id: 2,
  name: 'Jane Doe',
  age: 34,
  city: 'Chicago'
}
var expectedKeys = [
  'id', 'test', 'age', 'city'
];

function validateKeys(object, expectedKeys) {
  let newArray = Object.keys(object);
  for (i = 0; i < expectedKeys.length; i++){
    if (!(expectedKeys[i] === newArray[i])) {
      return false;
    }
  }
  return true;
}


const validater = validateKeys(objectA, expectedKeys);
console.log(validater);
