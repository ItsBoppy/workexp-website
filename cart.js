if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)

} else {
    ready()
}

function ready() {
    console.log("hello world");
    var removeCartButtons = document.getElementsByClassName('death');

    for (var i = 0; i < removeCartButtons.length; i++) { // Use .length
        var button = removeCartButtons[i];
        button.addEventListener('click', removeCartItem);
    }
}

function removeCartItem(){
    console.log('click');
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove(); // Ensure parentElement exists
}

