const productListEl = document.getElementById('product-list');

function createElement(product, prodId, deleteProductFn) {
  const newListEl = document.createElement('li');
  const prodTitleEl = document.createElement('h2');
  const prodPriceEl = document.createElement('p');
  const prodDeleteButtonEl = document.createElement('button');

  prodTitleEl.innerHTML = product.title;
  prodPriceEl.innerHTML = product.price;
  prodDeleteButtonEl.innerHTML = 'DELETE';

  newListEl.id = prodId;

  prodDeleteButtonEl.addEventListener(
    'click',
    deleteProductFn.bind(null, prodId)
  );

  newListEl.appendChild(prodTitleEl);
  newListEl.appendChild(prodPriceEl);
  newListEl.appendChild(prodDeleteButtonEl);

  return newListEl;
}

export function renderProducts(products, deleteProductFn) {
  productListEl.innerHTML = '';
  products.forEach(product => {
    const newListEl = createElement(product, product.id, deleteProductFn);
    productListEl.appendChild(newListEl);
  });
}

export function updateProducts(product, prodId, deleteProductFn, isAdding) {
  if (isAdding) {
    const newProductEl = createElement(product, prodId, deleteProductFn);
    productListEl.insertAdjacentElement('afterbegin', newProductEl);
  } else {
    const productEl = document.getElementById(prodId);
    productEl.remove();
    // productEl.parentElement.removeChild(productEl);
  }
}
