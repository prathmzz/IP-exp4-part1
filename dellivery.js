function validateDeliveryForm() {
    // Name validation
    const name = document.getElementById("name").value;
    if (!name.match(/^[A-Za-z\s]{2,50}$/)) {
        alert("Please enter a valid name (2-50 characters, letters only).");
        return false;
    }

    // Phone number validation
    const phone = document.getElementById("phone").value;
    if (!phone.match(/^\d{10}$/)) {
        alert("Please enter a valid 10-digit phone number.");
        return false;
    }

    // Terms and Conditions validation
    const terms = document.getElementById("terms").checked;
    if (!terms) {
        alert("Please accept the terms and conditions.");
        return false;
    }

    generateReceipt();  // Generate receipt after validation
    return false; // Prevent default form submission to show the receipt
}

function generateReceipt() {
    const date = new Date();
    const receipt = `
        <h2>Order Receipt</h2>
        <p>Thank you for your order!</p>
        <p>Name: ${document.getElementById("name").value}</p>
        <p>Phone: ${document.getElementById("phone").value}</p>
        <p>Address: ${document.getElementById("address").value}</p>
        <p>Order Date: ${date.toLocaleDateString()}</p>
        <p>Order Time: ${date.toLocaleTimeString()}</p>
        <hr>
        <p>Your order has been confirmed and will be processed shortly.</p>
    `;

    document.getElementById("receipt").innerHTML = receipt;
}
