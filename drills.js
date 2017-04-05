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

const people = [
	{
		name: 'Dakota',
		job_title: 'Developer'
	},
	{
		name: 'Thien',
		job_title: 'Developer',
		boss: 'Dakota'
	},
	{
		name: 'Taylor',
		job_title: 'Traffic Manager',
		boss: 'Thien'
	},
	{
		name: 'Byrd',
		job_title: 'Animator',
		boss: 'Taylor'
	}
]

// for (let key in people) {
// 	console.log(`${people[key].name}: ${people[key].job_title}`);
// }

for (let key in people) {
	if (people[key].hasOwnProperty('boss')) {
		console.log(`${people[key].job_title} ${people[key].name} reports to ${people[key].boss}.`);	
	}
	else {
		console.log(`${people[key].job_title} ${people[key].name} doesn't report to anybody.`);
	}
	// console.log(`${people[key].name}: ${people[key].job_title}`);
}


























