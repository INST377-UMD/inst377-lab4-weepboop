function alertMe() {
    const name = document.getElementById('Name').value;

    if (!name) {
        alert("Please enter your name!");
        nameInput.focus();
    } else {
        alert(`Hi ${name}!`)
    }
}

let isPowderBlue=true;

function changeColor() {
    if (isPowderBlue) {
        document.body.style.backgroundColor='pink';
    } else {
        document.body.style.backgroundColor='powderblue';
    }

    isPowderBlue = !isPowderBlue;
}

function validateText() {
    const validationRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    if (validationRegex.test(document.getElementById('textTester').value)) {
        alert("Text must not contain special characters!")
        return false;
    } else {
        alert("Text is valid.")
    }
}

function addText() {
    const heading =document.getElementById("head1");
    heading.textContent += ' - Add Text';
}
