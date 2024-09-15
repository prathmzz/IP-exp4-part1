function validateForm() {
    // Tagline validation: Maximum 30 characters
    const tagline = document.getElementById("tagline").value;
    if (tagline.length > 30) {
        alert("Tagline cannot exceed 30 characters.");
        return false;
    }

    // Quantity validation: Must be greater than 0
    const quantity = document.getElementById("quantity").value;
    if (quantity <= 0) {
        alert("Quantity must be greater than 0.");
        return false;
    }

    // Allow form submission if all validations pass
    return true;
}
