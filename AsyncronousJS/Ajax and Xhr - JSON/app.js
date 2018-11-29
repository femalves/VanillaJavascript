// Event listener

document.getElementById('button1').addEventListener('click', loadCustomer);
document.getElementById('button2').addEventListener('click', loadCustomers);

function loadCustomer(e) {
    // Create an XHR Object
    const xhr = new XMLHttpRequest();

    // Open
    xhr.open('GET', 'customer.json', true);
    

    xhr.onload = function(){
        // console.log('READYSTATE', xhr.readyState);

       
        if (this.status === 200) {
            const customer = JSON.parse(this.responseText);

            
            const output = `
            <ul>
                <li>ID: ${customer.id}</li>
                <li>Name: ${customer.name}</li>
                <li>Company: ${customer.company}</li>
                <li>Phone: ${customer.phone}</li>
            </ul>`;

            document.getElementById('customer').innerHTML = output;
        }  
    }

    xhr.onerror = function() {
        console.log('Request error...');
    } 

    xhr.send();

    // readyState values
    // 0: request not initialized
    // 1: server connection established
    // 2: request received
    // 3: processing request
    // 4: request finished and response is ready

    // HTTP Statuses
    // 200: "OK"
    // 403: "Forbideen"
    // 404: "Not found"
}

// Load Customers
function loadCustomers(e) {
    // Create an XHR Object
    const xhr = new XMLHttpRequest();

    // Open
    xhr.open('GET', 'customers.json', true);
    

    xhr.onload = function(){
        // console.log('READYSTATE', xhr.readyState);

       
        if (this.status === 200) {
            const customers = JSON.parse(this.responseText);

            let output = '';

            customers.forEach(function(customer) {
                output += `
                    <ul>
                        <li>ID: ${customer.id}</li>
                        <li>Name: ${customer.name}</li>
                        <li>Company: ${customer.company}</li>
                        <li>Phone: ${customer.phone}</li>
                    </ul>`;
            });

            document.getElementById('customers').innerHTML = output;
        }  
    }

    xhr.onerror = function() {
        console.log('Request error...');
    } 

    xhr.send();


}