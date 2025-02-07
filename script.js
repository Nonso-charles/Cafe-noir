    // Toggle hamburger menu and search bar visibility
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');
    const searchBar = document.querySelector('.search-bar');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        searchBar.classList.toggle('active'); // Toggle the search bar visibility
    });
    
    
    // Shop and Cart Javascript logic
        document.addEventListener("DOMContentLoaded", function () {
    const filterLinks = document.querySelectorAll(".filter-link");
    const shopItems = document.querySelectorAll(".shop-item");
    const cartItemsContainer = document.querySelector(".cart-items");
    const cartTotal = document.getElementById("cart-total");
    const checkoutBtn = document.getElementById("checkout-btn");
    let cart = [];

    // Filter Functionality
    filterLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            
            // Remove active class from all links
            filterLinks.forEach(item => item.classList.remove("active"));

            // Add active class to clicked link
            this.classList.add("active");

            // Get filter category
            const filter = this.dataset.filter;

            // Show/hide items based on filter
            shopItems.forEach(item => {
                if (filter === "all" || item.classList.contains(filter)) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });

    // Handle "Order Now" button clicks
    const orderButtons = document.querySelectorAll(".shop-cta");
    orderButtons.forEach(button => {
        button.addEventListener("click", function () {
            const itemName = this.parentElement.dataset.name;
            const itemPrice = parseFloat(this.parentElement.dataset.price);
            
            // Check if item is already in cart
            const existingItem = cart.find(item => item.name === itemName);
            
            if (existingItem) {
                // Update quantity
                existingItem.quantity++;
            } else {
                // Add new item to cart
                cart.push({ name: itemName, price: itemPrice, quantity: 1 });
            }

            updateCart();
        });
    });

    // Update Cart Display
    function updateCart() {
        cartItemsContainer.innerHTML = ""; // Clear cart
        let total = 0;

        cart.forEach(item => {
            // Create item display in cart
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("cart-item");
            itemDiv.innerHTML = `${item.name} - ₦${item.price} x ${item.quantity}`;
            cartItemsContainer.appendChild(itemDiv);

            total += item.price * item.quantity;
        });

        cartTotal.textContent = `₦${total.toFixed(2)}`;
    }

    // Checkout Button functionality
    checkoutBtn.addEventListener("click", function () {
        if (cart.length === 0) {
            alert("Your cart is empty!");
        } else {
            alert(`Checkout Successful! Total: ₦${cartTotal.textContent}`);
            cart = []; // Clear the cart after checkout
            updateCart();
        }
    });
});

// Slider logic
document.addEventListener("DOMContentLoaded", function () {
    const testimonials = document.querySelectorAll(".testimonial");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    let currentIndex = 0;
    let autoSlide;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.classList.remove("active");
            if(i === index) {
                testimonial.classList.add("active");
            }
        });
    }

    function nextTestimonial() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    }

    function prevTestimonial () {
     currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
     showTestimonial(currentIndex);
    }

    nextBtn.addEventListener("click", () => {
        nextTestimonial();
        resetAutoSlide();
    });

    prevBtn.addEventListener('click', () => {
        prevTestimonial();
        resetAutoSlide();
    });

    function autoSlideTestimonials() {
        autoSlide = setInterval(nextTestimonial, 3000);
    }

    function resetAutoSlide() {
        clearInterval(autoSlide);
        if (window.innerWidth <= 768) {
            autoSlideTestimonials();
        }
    }

    showTestimonial(currentIndex);

    if(window.innerWidth <= 768) {
        autoSlideTestimonials();
    }

    window.addEventListener("resize", function () {
        if (window.innerWidth <= 768) {
        resetAutoSlide();
        }
    });
});


// Back to top button functionality
const backToTopButton = document.getElementById('backToTop');

//Show or hide the button based on scroll position
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

// Scroll smoothly back to top when the button is clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
