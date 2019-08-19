
// Add the correct string as the first argument to addEventListener()
// Write a function named flightHandlerFunction that will remove the disabled class on the corresponding <section id="flight"> (section, not button) and replace it with a class of enabled.
// Have your developer tools open. When you click the button, the following element...
// <section id="flight" class="power disabled">
// Should then look like this.

// <section id="flight" class="power enabled"></section>



const activateFlightButton = document.querySelector("#activate-flight")

activateFlightButton.addEventListener("click", function(){
    const flightElement = document.querySelector("#flight")
    flightElement.classList.add("enabled")
})

document.querySelector("#activate-flight").addEventListener("click", function(){
    document.querySelector("#flight").classList.add("enabled")
})






const activateMindReadingButton = document.querySelector("#activate-mindreading")

activateMindReadingButton.addEventListener("click", function(){
    const mindReadingElement = document.querySelector("#mindreading")
    mindReadingElement.classList.add("enabled")
})

document.querySelector("#activate-mindreading").addEventListener("click", function(){
    document.querySelector("#mindreading").classList.add("enabled")
})





const activateXrayButton = document.querySelector("#activate-xray")

activateXrayButton.addEventListener("click", function(){

    const xrayElement = document.querySelector("#xray")
    xrayElement.classList.add("enabled")
})


document.querySelector("#activate-xray").addEventListener("click", function(){
    document.querySelector("#xray").classList.add("enabled")
})







const activateAllButton = document.querySelector("#activate-all")


activateAllButton.addEventListener("click", function(){
    const activateAll = document.querySelectorAll(".disabled")
    for(var i = 0; i < activateAll.length; i++){
        activateAll[i].classList.add("enabled")
    }
})



const deactivateAllButton = document.querySelector("#deactivate-all")

deactivateAllButton.addEventListener("click", function(){
    const deactivateAll = document.querySelectorAll(".enabled")
    for(var i = 0; i < deactivateAll.length; i++){
        deactivateAll[i].classList.remove("enabled")
    }
})



