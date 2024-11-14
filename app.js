const data = [
    {
       "image": {
            "thumbnail": "./assets/images/image-waffle-thumbnail.jpg",
            "mobile": "./assets/images/image-waffle-mobile.jpg",
            "tablet": "./assets/images/image-waffle-tablet.jpg",
            "desktop": "./assets/images/image-waffle-desktop.jpg"
       },
       "name": "Waffle with Berries",
       "category": "Waffle",
       "price": 6.50
    },
    {
        "image": {
            "thumbnail": "./assets/images/image-creme-brulee-thumbnail.jpg",
            "mobile": "./assets/images/image-creme-brulee-mobile.jpg",
            "tablet": "./assets/images/image-creme-brulee-tablet.jpg",
            "desktop": "./assets/images/image-creme-brulee-desktop.jpg"
        },
        "name": "Vanilla Bean Crème Brûlée",
        "category": "Crème Brûlée",
        "price": 7.00
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-macaron-thumbnail.jpg",
            "mobile": "./assets/images/image-macaron-mobile.jpg",
            "tablet": "./assets/images/image-macaron-tablet.jpg",
            "desktop": "./assets/images/image-macaron-desktop.jpg"
        },
        "name": "Macaron Mix of Five",
        "category": "Macaron",
        "price": 8.00
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-tiramisu-thumbnail.jpg",
            "mobile": "./assets/images/image-tiramisu-mobile.jpg",
            "tablet": "./assets/images/image-tiramisu-tablet.jpg",
            "desktop": "./assets/images/image-tiramisu-desktop.jpg"
        },
        "name": "Classic Tiramisu",
        "category": "Tiramisu",
        "price": 5.50
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-baklava-thumbnail.jpg",
            "mobile": "./assets/images/image-baklava-mobile.jpg",
            "tablet": "./assets/images/image-baklava-tablet.jpg",
            "desktop": "./assets/images/image-baklava-desktop.jpg"
        },
        "name": "Pistachio Baklava",
        "category": "Baklava",
        "price": 4.00
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-meringue-thumbnail.jpg",
            "mobile": "./assets/images/image-meringue-mobile.jpg",
            "tablet": "./assets/images/image-meringue-tablet.jpg",
            "desktop": "./assets/images/image-meringue-desktop.jpg"
        },
        "name": "Lemon Meringue Pie",
        "category": "Pie",
        "price": 5.00
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-cake-thumbnail.jpg",
            "mobile": "./assets/images/image-cake-mobile.jpg",
            "tablet": "./assets/images/image-cake-tablet.jpg",
            "desktop": "./assets/images/image-cake-desktop.jpg"
        },
        "name": "Red Velvet Cake",
        "category": "Cake",
        "price": 4.50
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-brownie-thumbnail.jpg",
            "mobile": "./assets/images/image-brownie-mobile.jpg",
            "tablet": "./assets/images/image-brownie-tablet.jpg",
            "desktop": "./assets/images/image-brownie-desktop.jpg"
        },
        "name": "Salted Caramel Brownie",
        "category": "Brownie",
        "price": 4.50,
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-panna-cotta-thumbnail.jpg",
            "mobile": "./assets/images/image-panna-cotta-mobile.jpg",
            "tablet": "./assets/images/image-panna-cotta-tablet.jpg",
            "desktop": "./assets/images/image-panna-cotta-desktop.jpg"
        },
        "name": "Vanilla Panna Cotta",
        "category": "Panna Cotta",
        "price": 6.50,
        
     }
];

const shoppingCart = [];

const desertsCards = document.getElementById('deserts-cards');
const cartItems = document.getElementById('cart-items');
const itemCount = document.getElementById('item-count');
data.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('cards');

    card.innerHTML = `
        <div class="img">
            <img src="${item.image.desktop}" alt="${item.name}">
            <button onclick="handleAddToCart(${JSON.stringify(item).replace(/"/g, '&quot;')})" class="add-to-cart">Add to cart</button>
        </div>
        <div class="content">
            <h6>${item.category}</h6>
            <h4>${item.name}</h4>
            <p>$${item.price}</p>
        </div>
    `;
    
    desertsCards.appendChild(card);
});

// Function to render items in the shopping cart
const renderCartItems = () => {
    cartItems.innerHTML = ''; // Clear existing items

    if (shoppingCart.length === 0) {
        cartItems.innerHTML = '<p>No items in cart</p>';
        return;
    }

    shoppingCart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div>
                <h4>${item.name}</h4>
                <p>x<span>${item.quantity}</span> -- <span>$${(item.price * item.quantity).toFixed(2)}</span></p>
            </div>
            <div>
                <button onclick="handleRemove(${index})" class="close">x</button>
            </div>
        `;
        cartItems.appendChild(li);
    });
};

// Function to handle removing items from the cart
const handleRemove = (index) => {
    shoppingCart.splice(index, 1); // Remove item from cart
    renderCartItems(); // Re-render cart items
};

// Function to add an item to the cart
const handleAddToCart = (item) => {
    // Check if item already exists in the cart
    const cartItem = shoppingCart.find(cartItem => cartItem.name === item.name);

    if (cartItem) {
        // If item exists, increase its quantity
        cartItem.quantity += 1;
    } else {
        // If item does not exist, add it with quantity of 1
        shoppingCart.push({ ...item, quantity: 1 });
    }

    itemCount.textContent = shoppingCart.length; // Update item count in the header

    renderCartItems(); // Re-render cart items
};

// Initial render of the cart
renderCartItems();
