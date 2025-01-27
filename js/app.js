console.log('Linked.')

// Dramatis Personae
const hobbits = [
	`Frodo Baggins`,
	`Samwise "Sam" Gamgee`,
	`Meriadoc "Merry" Brandybuck`,
	`Peregrin "Pippin" Took`,
]

const buddies = ['Gandalf the Grey', 'Legolas', 'Gimli', 'Strider', 'Boromir']

const baddies = ['Sauron', 'Saruman', 'The Uruk-hai', 'Orcs']

const lands = ['The-Shire', 'Rivendell', 'Mordor']

// ============
// Chapter 1
// ============

function makeMiddleEarth() {
	console.log('1: makeMiddleEarth')

	// 1. create a section tag with an id of middle-earth
	const middleEarth = document.createElement('section')
	middleEarth.setAttribute('id', 'middle-earth')

	// 2. use a for loop to iterate over the lands array that does the following:
	for(i = 0; i < lands.length; i++) {

	//   2a. creates an article tag (there should be one for each land when the loop is done)
		const land = document.createElement('article')

	//   2b. gives each land article an `id` tag of the corresponding land name
		land.setAttribute('id', lands[i])

	//   2c. includes an h1 with the name of the land inside each land article
		const landName = document.createElement('h1')
		landName.innerText = lands[i]
		land.appendChild(landName)

	//   2d. appends each land to the middle-earth section
		middleEarth.appendChild(land)
	}
	// 3. append the section to the body of the DOM.
		document.body.appendChild(middleEarth)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// The screen keeps crashing for me, but I've committed the work!

// ============
// Chapter 2
// ============

function makeHobbits() {
	console.log('2: makeHobbits')

	// display an `unordered list` of hobbits in the shire
	const hobbitFam = document.createElement('ul')
	hobbitFam.setAttribute('class', 'shireFolk')
	
	
	// give each hobbit a class of `hobbit`
	for(i = 0; i < hobbits.length; i++) {
		const halfFolk = document.createElement('li')
		halfFolk.setAttribute('class', 'hobbit')
		halfFolk.innerText = hobbits[i]
		hobbitFam.appendChild(halfFolk)
		document.getElementById('The-Shire').appendChild(hobbitFam)
		}

	// hint: create a 'ul' outside the loop into which to append the 'li's

	// hint: get 'The-Shire' by using its id
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============

function keepItSecretKeepItSafe() {
	console.log('3: keepItSecretKeepItSafe')

	// create a div with an id of `'the-ring'`
	const oneRing = document.createElement('div')
	oneRing.setAttribute("id", "the-ring")

	// give the div a class of `'magic-imbued-jewelry'`
	oneRing.setAttribute("class", "magic-imbued-jewelry")

	// add the ring as a child of `Frodo`
	// const hobbitSearch = document.querySelector('ul')
	const frodoB = document.querySelector('li')

	frodoB.appendChild(oneRing)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============

function makeBaddies() {
	console.log('4: makeBaddies')

	// display an unordered list of baddies in Mordor
	const bigBads = document.createElement('ul')
	for(i = 0; i < baddies.length; i++) {
		const badGuys = document.createElement('li')
		badGuys.innerText = baddies[i]
		bigBads.appendChild(badGuys)
		document.getElementById('Mordor').appendChild(bigBads)
		}

	// give each of the baddies a class of "baddy"


	// remember to append them to Mordor

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============

function makeBuddies() {
	console.log('5: makeBuddies')

	// create an `aside` tag
	const buddyTeam = document.createElement('aside')
	const teamBud = document.createElement('ul')
	buddyTeam.appendChild(teamBud)
	
	for(i = 0; i < buddies.length; i++) {
		const budLi = document.createElement('li')
		budLi.innerText = buddies[i]
		budLi.setAttribute('class', 'bestBuds')
		teamBud.appendChild(budLi)
		document.getElementById('Rivendell').appendChild(teamBud)
		}

	// put an `unordered list` of the `'buddies'` in the aside

	// insert your aside as a child element of `rivendell`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

function leaveTheShire() {
	console.log('6: leaveTheShire')

	// assemble the `hobbits` and move them to `rivendell`
	const hobbAdv = document.getElementsByClassName('shireFolk')
	const helloElves = document.getElementById('Rivendell')
	helloElves.appendChild(hobbAdv[0])

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

function beautifulStranger() {
	console.log('7: beautifulStranger')

	// change the `'Strider'` text to `'Aragorn'`
	let king = document.querySelectorAll('li.bestBuds')[3]
	king.innerText='Aragorn'
	
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============

function forgeTheFellowShip() {
	console.log('8: forgeTheFellowShip')
	// create a new div called `'the-fellowship'` within `rivendell`
	const fellowshipForms = document.createElement('div')
	fellowshipForms.setAttribute('name', 'the-fellowship')
	document.getElementById('Rivendell').appendChild(fellowshipForms)
	const fellowsLi = document.createElement('ul')
	fellowshipForms.appendChild(fellowsLi)

	// add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
	const hobbitsJoin = document.getElementsByClassName('hobbit')
	const buddiesJoin = document.getElementsByClassName('bestBuds')
	fellowsLi.appendChild(buddiesJoin[0])
	fellowsLi.appendChild(buddiesJoin[1])
	fellowsLi.appendChild(buddiesJoin[2])
	fellowsLi.appendChild(buddiesJoin[3])
	fellowsLi.appendChild(buddiesJoin[4])
	fellowsLi.appendChild(hobbitsJoin[0])
	fellowsLi.appendChild(hobbitsJoin[1])
	fellowsLi.appendChild(hobbitsJoin[2])
	fellowsLi.appendChild(hobbitsJoin[3])
	// alert("Frodo has joined The Fellowship")
	// alert("Gandalf, the Gray, has joined The Fellowship")
	// alert("Aragorn has joined The Fellowship")
	// alert("Legolas has joined The Fellowship")
	// alert("Gimli has joined The Fellowship")
	// alert("Boromir has joined The Fellowship")
	// alert("Sam has joined The Fellowship")
	// alert("Merry has joined The Fellowship")
	// alert("Pippin has joined The Fellowship")
	// after each character is added make an alert that they // have joined your party
	
	// for (i = 0; i > 0; i++)

// console.log('the team', fellowshipForms)

	// NOTE: This won't change what you see in the browser.  Use your Elements tab of your Inspector tools to make sure that it worked.

	//the appearance of my elements did change! How can I make certain list items not overlap?? Future-me with figure this out.
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============

function theBalrog() {
	console.log('9: theBalrog')
	// change the `'Gandalf'` text to `'Gandalf the White'`
	let whiteWiz = document.querySelectorAll('li.bestBuds')[0]
	whiteWiz.innerText='Gandalf the White'
	// apply the following style to the element, make the 
	// background 'white', add a grey border
	whiteWiz.style.background = ('#FFFFFF')
	whiteWiz.style.display = ('inline-flex')
	whiteWiz.style.border = ('#808080', '2px')
	whiteWiz.style.padding = ('3px')
	// whiteWiz.style.border-radius = ('25px')


}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============

function hornOfGondor() {
	console.log('10: hornOfGondor')
	// pop up an alert that the horn of gondor has been blown
	// Boromir's been killed by the Uruk-hai!
	// Remove `Boromir` from the Fellowship
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============

function itsDangerousToGoAlone() {
	console.log('11: itsDangerousToGoAlone')
	// take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
	// add a div with an id of `'mount-doom'` to `Mordor`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============

function weWantsIt() {
	console.log('12: weWantsIt')
	// Create a div with an id of `'gollum'` and add it to Mordor
	// Remove `the ring` from `Frodo` and give it to `Gollum`
	// Move Gollum into Mount Doom
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============

function thereAndBackAgain() {
	console.log('13: thereAndBackAgain')
	// remove `Gollum` and `the Ring` from the document
	// Move all the `hobbits` back to `the shire`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".

// =====================================
// Don't change anything below this line
// =====================================

// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

document.getElementById('chapter-1').addEventListener('click', makeMiddleEarth)
document.getElementById('chapter-2').addEventListener('click', makeHobbits)
document
	.getElementById('chapter-3')
	.addEventListener('click', keepItSecretKeepItSafe)
document.getElementById('chapter-4').addEventListener('click', makeBaddies)
document.getElementById('chapter-5').addEventListener('click', makeBuddies)
document.getElementById('chapter-6').addEventListener('click', leaveTheShire)
document
	.getElementById('chapter-7')
	.addEventListener('click', beautifulStranger)
document
	.getElementById('chapter-8')
	.addEventListener('click', forgeTheFellowShip)
document.getElementById('chapter-9').addEventListener('click', theBalrog)
document.getElementById('chapter-10').addEventListener('click', hornOfGondor)
document
	.getElementById('chapter-11')
	.addEventListener('click', itsDangerousToGoAlone)
document.getElementById('chapter-12').addEventListener('click', weWantsIt)
document
	.getElementById('chapter-13')
	.addEventListener('click', thereAndBackAgain)
document.getElementById('all-chapters').addEventListener('click', () => {
	makeMiddleEarth()
	makeHobbits()
	keepItSecretKeepItSafe()
	makeBaddies()
	makeBuddies()
	leaveTheShire()
	beautifulStranger()
	forgeTheFellowShip()
	theBalrog()
	hornOfGondor()
	itsDangerousToGoAlone()
	weWantsIt()
	thereAndBackAgain()
})
