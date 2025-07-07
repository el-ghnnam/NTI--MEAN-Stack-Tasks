function isValidName(name) {
    return /^[a-zA-Z\s]+$/.test(name);
}

function isValidPhone(phone) {
    return /^01[0-9]{9}$/.test(phone);
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

let name;
while (true) {
    name = prompt("Enter your name (letters and spaces only):");
    if (isValidName(name)) break;
    alert("Invalid name. Please use only letters and spaces.");
}

let phone;
while (true) {
    phone = prompt("Enter your phone number (at least 10 digits):");
    if (isValidPhone(phone)) break;
    alert("Invalid phone number. Please enter at least 10 digits or should start with 01.");
}

let email;
while (true) {
    email = prompt("Enter your email address:");
    if (isValidEmail(email)) break;
    alert("Invalid email address.");
}

alert(`Welcome, ${name}!\nPhone: ${phone}\nEmail: ${email}`);
