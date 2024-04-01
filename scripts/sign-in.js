/* Basic Form Validation for the Login Page.*/

var message = document.getElementById('message');
var username = document.getElementById('username');
var password = document.getElementById('password');
var submitButton = document.getElementById('submit');

/* This function does the following:
1. Prevent the default action of the submit button which is to submit the form. (e.preventDefault())
, if this is not included, the page instantly reloads the html which makes scripts and the message to
be reloaded as well. So, the printed message is lost.
2. If username is empty, change text inside the message container to "Please enter a valid username".
3. If password is empty, change text inside the message container to "Please enter a password".
4. If password length is less than 8, change text inside the message container to an appropriate message.
*/
submitButton.addEventListener('click',function(e){
    // Prevent default action of submit button which reloads the page.
    e.preventDefault();

    /* if the form invalidates, change the color of the message's text to red and change the text 
    accordingly. */
    if (username.value == "") {
        message.style.color = "red";
        message.innerText = 'Please enter a valid username';
    }
    else if (password.value == "") {
        message.style.color = "red";
        message.innerText = 'Please enter a password';
    }
    else if ( password.value.length < 8) {
        message.style.color = "red";
        message.innerText= 'Your password should be at least 8 characters long';
    }
    // If all the above conditions are false. i.e. the form validation conditions are met.
    else {
        alert('You have been logged in!');
    }
})

