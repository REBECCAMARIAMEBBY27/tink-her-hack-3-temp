// Data structure for products
const products = [
    {
      id: 'cosmetics',
      title: 'Coconut Cosmetics',
      description: 'Natural skincare and haircare products.',
      image: 'images/cosmetics.jpg',
      link: '#cosmetics'
    },
    {
      id: 'supplements',
      title: 'Coconut Supplements',
      description: 'Boost your health with coconut supplements.',
      image: 'images/supplements.jpg',
      link: '#supplements'
    },
    {
      id: 'oil',
      title: 'Coconut Oil Supplies',
      description: 'Pure and organic coconut oil for daily use.',
      image: 'images/oil.jpg',
      link: '#oil'
    },
    {
      id: 'crafts',
      title: 'Coconut Shell Arts',
      description: 'Beautiful handmade crafts from coconut shells.',
      image: 'images/crafts.jpg',
      link: '#crafts'
    }
  ];
  
  // Function to dynamically insert product cards
  function loadProducts() {
    const productList = document.getElementById('product-list');
    
    products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('card');
      
      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p>${product.description}</p>
        <button class="btn"><a href="${product.link}" class="btn-link">Explore</a></button>
      `;
      
      productList.appendChild(productCard);
    });
  }
  
  // Smooth scrolling for navigation
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Form validation
  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (!name || !email || !message) {
      alert("Please fill out all fields before submitting.");
      return;
    }
  
    // Simulate form submission success
    alert("Thank you for your message! We'll get back to you soon.");
    this.reset(); // Reset form fields after submission
  });
  
  // Load products when the page is ready
  window.onload = loadProducts;
  