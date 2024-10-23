// Add your code here
function submitData(userName, userEmail) {
    const submitData = {
        name: userName,
        email: userEmail,
    };
    
    const configurationObject = {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",  
            "Accept": "application/json",
        },
        body: JSON.stringify(submitData),
    };
    
    return fetch(`http://localhost:3000/users`, configurationObject)
        .then(response => response.json())  
        .then(data => {
            const newId = data.id;
            const body = document.querySelector('body');
            const p = document.createElement('p');
            p.textContent = `New Id: ${newId}`;
            body.appendChild(p);
        })
        .catch(error => {
            const body = document.querySelector('body');
            const errorMessage = document.createElement('p');
            errorMessage.textContent = `Error: ${error.message}`;
            body.appendChild(errorMessage);
        });
}
