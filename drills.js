// const loaf = {
// 	flour: 300,
// 	water: 210,
// 	hydration: function() {
// 		return this.water / this.flour * 100;
// 	}
// }

// console.log(loaf.hydration());

// const newObject = {
// 	foo: 'foo',
// 	bar: 'bar',
// 	fum: 'fum',
// 	quux: 'quux',
// 	spam: 'spam'
// }

// for(let key in newObject) {
// 	console.log(`${key}: ${newObject[key]}`);
// }

// const dailyLife = {
// 	meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
// }
//
// console.log(dailyLife.meals[3]);

// const people = [
// 	{
// 		name: 'Dakota',
// 		job_title: 'Developer'
// 	},
// 	{
// 		name: 'Thien',
// 		job_title: 'Developer',
// 		boss: 'Dakota'
// 	},
// 	{
// 		name: 'Taylor',
// 		job_title: 'Traffic Manager',
// 		boss: 'Thien'
// 	},
// 	{
// 		name: 'Byrd',
// 		job_title: 'Animator',
// 		boss: 'Taylor'
// 	}
// ]

// for (let key in people) {
// 	console.log(`${people[key].name}: ${people[key].job_title}`);
// }

// for (let key in people) {
// 	if (people[key].hasOwnProperty('boss')) {
// 		console.log(`${people[key].job_title} ${people[key].name} reports to ${people[key].boss}.`);
// 	}
// 	else {
// 		console.log(`${people[key].job_title} ${people[key].name} doesn't report to anybody.`);
// 	}
	// console.log(`${people[key].name}: ${people[key].job_title}`);
// }
function decode(message) {
	const decodeLetters = {
		a: 2,
		b: 3,
		c: 4,
		d: 5
	}
	let words = message.split(' ');
	let results = '';
	let copy = Object.keys(decodeLetters);
	for(let i=0; i < words.length; i++) {

		let firstChar = words[i].charAt(0);

		if (firstChar === copy[0]) {
			results += words[i].charAt(1)
		}
		else if (firstChar === copy[1]) {
			results += words[i].charAt(2)
		}
		else if (firstChar === copy[2]) {
			results += words[i].charAt(3)
		}
		else if (firstChar === copy[3]) {
			results += words[i].charAt(4)
		}
	}
	return results;
}
const decoder = decode('craft block argon meter bells brown croon droop');
console.log(decoder);
