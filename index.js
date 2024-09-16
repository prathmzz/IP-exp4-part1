function validateForm() {
    // Tagline validation: Maximum 30 characters
    const tagline = document.getElementById("tagline").value.trim();
    if (tagline.length === 0) {
        alert("Tagline cannot be empty.");
        return false;
    } else if (tagline.length > 30) {
        alert("Tagline cannot exceed 30 characters.");
        return false;
    }

    // Quantity validation: Must be a number greater than 0
    const quantity = parseFloat(document.getElementById("quantity").value.trim());
    if (isNaN(quantity) || quantity <= 0) {
        alert("Quantity must be a number greater than 0.");
        return false;
    }

    return true;
}
