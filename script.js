let block1 = document.getElementById("block1")
let block2 = document.getElementById("block2")
let mixed = document.getElementById("mixed")

let blockColors = []

function randomColorValue() {
	return Math.floor(Math.random() * 255)
}

function generateColor(index) {
	let r = randomColorValue()
	let g = randomColorValue()
	let b = randomColorValue()

	blockColors[index] = [r,g,b]

	return "rgb("+r+","+g+","+b+")"
}

function newColors(){
	block1.style.backgroundColor = generateColor(0)
	block2.style.backgroundColor = generateColor(1)
	mixColors()
}

function mixColors(){
	let result = 0;

	let r = blockColors[0][0] + blockColors[1][0]
	let g = blockColors[0][1] + blockColors[1][1]
	let b = blockColors[0][2] + blockColors[1][2]

	r/=2
	g/=2
	b/=2

	blockColors.push([r,g,b])

	mixed.style.backgroundColor = "rgb("+r+","+g+","+b+")"
}

function printColor(index) {
	let color = blockColors[index]

	return "Color "+index+": ("+color[0]+", "+color[1]+", "+color[2]+")"
}

function printMixes() {
	console.log("Color 1: ", printColor(0) 
		+"\nColor 2: ", printColor(1) 
		+"\nMix    : ",printColor(2))
}

function showMixed() {
	if (mixed.style.opacity == 0) {
		mixed.style.opacity = 1
	} else {
		mixed.style.opacity = 0
	}
}
