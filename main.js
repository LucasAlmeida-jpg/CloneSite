const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');


function selectItem(e) {

	removeBorder();
	removeShow();

	this.classList.add('tab-border');

	const tabContentItem = document.querySelector(`#${this.id}-content`);

	tabContentItem.classList.add('show');
}

//We implemented this part, so that, we can remove the red border part.
function removeBorder() {
	tabItems.forEach(item => {
		item.classList.remove('tab-border');
	});
}



//Click and Select
tabItems.forEach(item => {
	item.addEventListener('click', selectItem);
});


function removeShow() {
	tabContentItems.forEach(item => {
		item.classList.remove('show');
	});
}

