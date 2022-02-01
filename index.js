const { reporters } = require("mocha");

// Add your code here
function submitData(uName, uEmail) {
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            name: uName,
            email: uEmail,
        }),
    })
    .then(res => res.json())
    .then(data => addContact(data.id))
    .catch(() => errorMessage("Unauthorized Access"));
}   

function addContact(id){
    document.getElementsByTagName("body")[0].innerHTML = id;
}

function errorMessage(error){
    document.getElementsByTagName("body")[0].innerHTML = error

}