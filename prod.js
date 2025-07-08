// Function to filter products based on selected category
function filterProducts(category) {
  const allProducts = document.querySelectorAll('.product-card');

  allProducts.forEach(product => {
    const productCategories = product.getAttribute('data-category').split(', ');

    // If the selected category matches any of the product's categories, show the product
    if (productCategories.includes(category) || category === 'Show All') {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
}

// Function to reset filter and show all products
function resetFilter() {
  const allProducts = document.querySelectorAll('.product-card');
  allProducts.forEach(product => {
    product.style.display = 'block'; // Show all products when 'Show All' is clicked
  });
}

// Function to handle page load, reset filter or use stored category
function handlePageLoad() {
  // Check if there is a saved category in localStorage
  const savedCategory = localStorage.getItem('category') || localStorage.getItem('main');
  
  if (savedCategory) {
    // Filter the products based on the saved category
    filterProducts(savedCategory);
  } else {
    // If no category is saved, reset the filter and show all products
    resetFilter();
  }
}

// Function to clear a specific item from localStorage when the page is about to be unloaded
window.onbeforeunload = function() {
  // Clear only the specific key ('category') when the user reloads or navigates away
  localStorage.removeItem('category');
  localStorage.removeItem('main'); // You can add other specific keys if needed
};

// Call handlePageLoad function on page load
window.onload = handlePageLoad;

// Function to store product details in localStorage
function addtolocal(prodname, prodesc, prodimg1, prodimg2, prodimg3, prodimg4, prodimg5, prodprice, prodcategory, prodcolor, prodmat, prodsize, prodcatt) {
  if (prodimg3 == '' || prodimg4 == '' || prodimg5 == '') {
    prodimg3 = prodimg1;
    prodimg4 = prodimg2;
    prodimg5 = prodimg1;
  }

  var details = {
    prodname,
    prodesc,
    prodimg1,
    prodimg2,
    prodimg3,
    prodimg4,
    prodimg5,
    prodprice,
    prodcategory,
    prodcolor,
    prodmat,
    prodsize,
    prodcatt,
  };

  localStorage.setItem('Mykey', JSON.stringify(details));
  window.location.href = "details.html";
}

// Example: Setting a category in localStorage
// localStorage.setItem('category', 'some-category-name'); // Set this when a category is selected
// localStorage.setItem('main', 'Show All'); // Set this if you want to reset or show all products
