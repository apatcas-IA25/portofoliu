// Cache the DOM 
var button = document.getElementById("button")

var nume = document.getElementById("nume")

var prenume = document.getElementById("prenume")

var img = document.querySelector("img")

var educatie = document.getElementById("educatie")

var asteptari = document.getElementById("asteptari")

var body = document.querySelector("body")

var an = document.getElementById("anNastere")

const d = new Date()
var year = d.getFullYear()

// Add eventListener to button 
button.addEventListener("click", altaViata)
an.addEventListener("mouseover", displayAge)

function displayAge() {
	an.innerHTML = year - an.innerHTML
}

function altaViata() {
	nume.innerHTML = "Python Software Engineer"
	prenume.innerHTML = "Google"

	document.querySelectorAll("h1, h2, p").forEach(el => {
  		el.style.backgroundColor = "lightgreen"
		el.style.color = "black"
	})
	
	educatie.innerHTML = "Experiente"
	educatie.style.fontSize = "50px"
	asteptari.innerHTML = "<ul><li>astronomice</li><li>trigonometrice</li></ul>"

	body.style.backgroundImage = "url('images/field.jpg')"
	body.style.backgroundSize = "cover"
	body.style.backgroundRepeat = "no-repeat"
	body.style.backgroundPosition = "center"
	body.style.backgroundAttachment = "fixed"

	body.style.color = "yellow"
	body.style.fontFamily = "Montserrat"
	
	img.src = "images/lion.jpg"
	img.style.opacity = "70%"
	img.style.border = "5px solid black"
	img.style.width = "500px"
	img.style.height = "400px"
}
