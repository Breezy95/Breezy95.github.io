
//smooth scrolling
function smoothScroll(event) {
	event.preventDefault();
	const targetID = event.currentTarget.getAttribute("href");
	console.log(targetID);
	window.scrollTo({
		top: document.querySelector(targetID).offsetTop,
		behavior: "smooth"
	});
}