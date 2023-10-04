"use strict";

//Get the Required Elements
const gatewayElement = document.querySelector(".gateway");
const gatewayOpenerElement = document.querySelector(".gateway_opener");

//Setup the Event Listeners
gatewayElement.addEventListener("click", openGateway);

/**
 * Opens the Gateway into the Main Page
 * @param {PointerEvent} clickEvent
 */
function openGateway(clickEvent) {
	//
	//Add the Open Class to the Gateway Opener to run the Open Animation
	gatewayOpenerElement.classList.add("open");

	//Get the Closer Background Element
	const closerBackgroundElement = gatewayOpenerElement.querySelector(".closer_background");

	//Get the Closer Background's Styles
	const closerBackgroundStyles = getComputedStyle(closerBackgroundElement);

	//Get the animation Duration for the Closer Background
	const closerAnimationDuration = Number(closerBackgroundStyles.animationDuration.replace("s", ""));

	//Get the animation Delay for the Closer Background
	const closerAnimationDelay = Number(closerBackgroundStyles.animationDelay.replace("s", ""));

	//Get the Full Animation Length for the Gateway (In Milliseconds)
	const gatewayAnimationLength = (closerAnimationDuration + closerAnimationDelay) * 1000;

	//Continue to the Main Page after the Animation has Finished
	setTimeout(() => location.assign("./pages/home.html"), gatewayAnimationLength);
}
