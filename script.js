const pass = document.getElementById("password");
const length = 12;

const uppercase = "ABCDEFGHIKLMNOPQRSTVXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbol = "!@#$%^&*()_+-={}[]|/?><";
const allchars = uppercase + lowercase + number + symbol;

function createpassword(){
    let password = "";
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length > password.length) {
        password += allchars[Math.floor(Math.random() * allchars.length)];
    }
    pass.value = password;
}

function copypassword(){
    pass.select();
    document.execCommand("copy");
}