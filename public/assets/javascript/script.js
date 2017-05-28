// Validates the burger name entered by the user
function validateForm() {
	var input = document.forms["burger-form"]["name"].value.trim();
	if (input.length > 50) {
		document.forms["burger-form"]["name"].value = "";
		alert("Burger name cannot contain more than 50 characters. Sorry, menu space is a hot commodity!");
		return false;
	}
}