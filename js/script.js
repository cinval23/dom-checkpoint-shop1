document.addEventListener('DOMContentLoaded', function () {
    // Select all trash icons
    const trashIcons = document.querySelectorAll('.fas.fa-trash-alt');
    
    // Add event listeners for trash icons
    trashIcons.forEach(icon => {
      icon.addEventListener('click', function () {
        // Remove the entire card when the trash icon is clicked
        const cardBody = icon.closest('.card-body');
        if (cardBody) {
          cardBody.parentElement.remove();
          
          // After removing, update the total price
          updateTotalPrice();
        }
      });
    });
  
    // Select all heart icons
    const heartIcons = document.querySelectorAll('.fas.fa-heart');
  
    // Add event listeners for heart icons
    heartIcons.forEach(icon => {
      icon.addEventListener('click', function () {
        // Toggle the heart icon's color (for "like" action)
        icon.classList.toggle('text-danger');
      });
    });
  
    // Select all the plus and minus buttons
    const plusButtons = document.querySelectorAll('.fas.fa-plus-circle');
    const minusButtons = document.querySelectorAll('.fas.fa-minus-circle');
    const quantities = document.querySelectorAll('.quantity');
    const unitPrices = document.querySelectorAll('.unit-price');
  
    // Add event listeners for the plus buttons
    plusButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        // Increase the quantity
        let quantity = parseInt(quantities[index].textContent);
        quantity++;
        quantities[index].textContent = quantity;
  
        // Calculate and update the total price
        updateTotalPrice();
      });
    });
  
    // Add event listeners for the minus buttons
    minusButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        // Decrease the quantity if greater than 0
        let quantity = parseInt(quantities[index].textContent);
        if (quantity > 0) {
          quantity--;
          quantities[index].textContent = quantity;
  
          // Calculate and update the total price
          updateTotalPrice();
        }
      });
    });
  
    // Function to update the total price
    function updateTotalPrice() {
      let totalPrice = 0;
      unitPrices.forEach((price, index) => {
        const unitPrice = parseFloat(price.textContent.replace('$', '').trim());
        const quantity = parseInt(quantities[index].textContent);
        totalPrice += unitPrice * quantity;
      });
  
      // Update the total price display
      const totalElement = document.getElementById('total');
      totalElement.textContent = `$ ${totalPrice.toFixed(2)}`;
    }
  });