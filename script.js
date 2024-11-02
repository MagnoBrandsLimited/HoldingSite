function notifyMe() {
    const email = document.getElementById("email").value;
    if (email) {
        alert('Thanks for signing up! You will be notified when the app launches.');
    } else {
        alert('Please enter a valid email address.');
    }
}
