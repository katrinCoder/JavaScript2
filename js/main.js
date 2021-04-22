
class ProductList {
  constructor(container = '.products') {
    this.container = container;
    this._goods = []; // data
    this._allProducts = []; // массив экземпляров товаров на основе this._goods

    this._fetchGoods();
    this._render();
  }

  _fetchGoods() {
    this._goods = [
      {id: 1, title: 'Notebook', price: 20000},
      {id: 2, title: 'Mouse', price: 1500},
      {id: 3, title: 'Keyboard', price: 5000},
      {id: 4, title: 'Gamepad', price: 4500},
    ];
  }

  _render() {
    const block = document.querySelector(this.container);

    for (const product of this._goods) {
      // console.log(new ProductItem(product).render());
      const productObject = new ProductItem(product);

      this._allProducts.push(productObject);
      block.insertAdjacentHTML('beforeend', productObject.render());
    }
  }
}

class ProductItem {
  constructor(product, img='https://via.placeholder.com/200x150') {
    this.title = product.title;
    this.price = product.price;
    this.id = product.id;
    this.img = img;
  }

  render() {
    return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} \u20bd</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`;
  }
}

const catalog = new ProductList();

class CartList {
  constructor (cartList = []) {
    this.items = cartList;
  }

  totalSum() {
    let sum = 0;
    for(const item of this.items)
    {
      sum += item.price * item.count;
    }
    return sum;
  }
}

// class CartItem extends ProductItem {
//   constructor (product, count) {
//     super(product);
//     this.count = count;
//     this._render();
//   }

//   _render() {
//     this.title = this.querySelector("h3").innerText;
//     this.price = parseInt(this.querySelector("p").innerText);
//     this.id = this.dataset.id;
//   }
// }

class CartItem {
  constructor (product, count = 1) {
    this.count = count;
    this._render(product);
  }

  _render(product) {
    this.title = product.querySelector("h3").innerText;
    this.price = parseInt(product.querySelector("p").innerText);
    this.id = product.dataset.id;
  }
}

let buyButtons = document.querySelectorAll('.buy-btn');
buyButtons.forEach(function(button) {
  button.addEventListener('click', buttonClickHandler);
});
   
let cartList = new CartList();
function buttonClickHandler(event) {
  let cartItem = new CartItem(event.target.parentNode.parentNode);
  cartList.items.push(cartItem);
  document.querySelector('.sum-cart').textContent = `Сумма вашего заказа: ${cartList.totalSum()} руб`;
}
