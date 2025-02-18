

// Get the modal
const modal = document.getElementById('addModal');
const closeBtn = document.querySelector('.close');
const addButtons = document.querySelectorAll('.add-button');
const quantityInput = document.getElementById('quantity');
const addCartBtn = document.querySelector('.add-to-cart-btn');

addCartBtn.addEventListener('click', () => {
    alert('Added to cart!');
    window.location.href = 'cart.php'; 
});

// Function to open modal
function openModal(medicineItem) {
    const title = medicineItem.querySelector('.medtitle').textContent;
    const price = medicineItem.querySelector('.medprice').textContent;
    const image = medicineItem.querySelector('.frame-13').src;

    // Update modal content
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalPrice').textContent = price;
    document.getElementById('modalImage').src = image;
    
    // Reset quantity
    quantityInput.value = 1;
    
    // Show modal
    modal.style.display = 'block';
}

// Add click event to all add buttons
addButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const medicineItem = e.target.closest('.medicine-list');
        openModal(medicineItem);
    });
});

// Close modal when clicking the close button
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});


// Quantity controls
function incrementQuantity() {
    quantityInput.value = parseInt(quantityInput.value) + 1;
}

function decrementQuantity() {
    if (parseInt(quantityInput.value) > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
    }
}

// Prevent manual input of negative numbers
quantityInput.addEventListener('change', () => {
    if (parseInt(quantityInput.value) < 1) {
        quantityInput.value = 1;
    }
});

// Add to cart button
document.querySelector('.add-to-cart-btn').addEventListener('click', () => {
    const title = document.getElementById('modalTitle').textContent;
    const quantity = parseInt(quantityInput.value);
    
    // Add your cart logic here
    console.log(`Added ${quantity} ${title} to cart`);
    
    // Close modal
    modal.style.display = 'none';
});


