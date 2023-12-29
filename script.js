//your JS code here. If required.
document.getElementById("fname").addEventListener("blur", function() {
    // Get the input field value
    var inputValue = this.value;

    // Convert the input value to uppercase
    var uppercaseValue = inputValue.toUpperCase();

    // Set the uppercase value back to the input field
    this.value = uppercaseValue;
});
