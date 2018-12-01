// Fetch API 

document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getExternal);


// Get local text file data
function getText() {
    fetch('test.txt')
    .then(response => response.text())
    .then(data => {
        
        document.getElementById('output').innerHTML = data;
    })
    .catch(err => console.log(err));
}

// Get json data 
function getJson() {
    fetch('post.json')
    .then(response => response.json()) 
    .then(data => {
        let output = '';
        data.forEach(function(post) {
            output += `<li>${post.title}</li>`;
        });
        document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
    
}

// Get from external API
function getExternal() {
    fetch('https://api.github.com/users')
    .then(response => response.json())
    .then(data => {
        let output = '';
        data.forEach(function(user) {
            output += `<li>${user.login}</li>`;
        });
        document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
   
}