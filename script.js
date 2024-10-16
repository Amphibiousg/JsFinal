function upDate(previewPic) {
    // Log message for event trigger
    console.log("Mouseover event triggered for " + previewPic.alt);

    // Set the background image of the #image div to the source of the hovered image
    document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";

    // Change the text inside the #image div to the alt text of the hovered image
    document.getElementById("image").innerHTML = previewPic.alt;
}

function unDo() {
    // Log message for event trigger
    console.log("Mouseout event triggered.");

    // Reset the text inside the #image div to the original message
    document.getElementById("image").innerHTML = "Hover over or tab through an image below to display here.";

    // Remove the background image from the #image div
    document.getElementById("image").style.backgroundImage = "url('')";
}

// Function to handle focus via the tab key
function handleFocus(event) {
    console.log("Tab focus event triggered for " + event.target.alt);
    upDate(event.target); // Show the image when focused via tab
}

// Function to remove focus
function handleBlur(event) {
    console.log("Tab blur event triggered.");
    unDo(); // Revert back when focus is lost
}

// Loop through each image and add tab focus attributes
var images = document.querySelectorAll('.preview');
for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('focus', handleFocus);
    images[i].addEventListener('blur', handleBlur);

    // Setting tabindex attribute to allow for keyboard navigation
    images[i].setAttribute('tabindex', '0');
}
