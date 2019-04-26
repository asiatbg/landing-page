const newsletter = document.getElementById('newsletter');
const email = document.getElementById('email');

newsletter.addEventListener('submit', function(event) {
    event.preventDefault();

    if (!email.value) {
        email.focus();
        alert("Email can't be blank!");
        return false;

    } else if (!emailValidation(email.value)) {
        email.focus();
        alert("This is not a validated email!");
        return false;

    } else {
        saveEmail(email.value);
        alert("Success");
    }
});

const emailValidation = (email) => {
    const regex = new RegExp("[a-zA-Z0-9_\\.\\+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-\\.]+");
    return regex.test((email));
};

const emailSubmited = firebase.database().ref('email');

const saveEmail = (email) => {
    const newEmailSubmit = emailSubmited.push();
    newEmailSubmit.set({email: email});
};