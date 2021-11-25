const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
  el: '#app',
  data: {
    catalogUrl: '/catalogData.json',
    basketUrl: '/getBasket.json',
    products: [],
    cart: [],
    filtered: [], // отфильтрованные товары
    imgCatalog: 'https://placehold.it/200x150',
    imgCart: 'https://via.placeholder.com/50x100',
    searchLine: '',
    showCart: false,
    quantity: 0,
  },
  methods: {
    getJson(url){
      return fetch(url)
        .then(result => result.json())
        .catch(error => {
          console.log(error);
        })
    },
    getBusket() {
      this.getJson(`${API + this.basketUrl}`)
      .then(data => {
        for(let el of data){
          this.cart.push(el);
        }
      });
    },
    addProduct(product){
      this.getJson(`${API}/addToBasket.json`)
        .then(data => {
          if(data.result === 1){
            let productId = +product.id_product;
            let find = this.cart.find(product => product.id_product === productId);
            if(find){
              product.quantity++;
              this.cart.push();
            } else {
              product.quantity = 1;
              this.cart.push(product);
            }
          } else {
            alert('Error');
          }
        })
    },
    removeProduct(product){
      this.getJson(`${API}/deleteFromBasket.json`)
        .then(data => {
          if(data.result === 1){
            let productId = +product.id_product;
            let find = this.cart.find(product => product.id_product === productId);
            if(product.quantity > 1){
              product.quantity--;
              this.cart.push();
            } else {
              this.cart.splice(this.cart.indexOf(product), 1);
            }
          } else {
            alert('Error');
          }
        })
    },
    filterGoods(searchLine) {
      console.log(searchLine);
      const regexp = new RegExp(searchLine, 'i');
      this.filtered = this.products.filter(product => regexp.test(product.product_name));
    },
  },
  beforeCreate() {},
  created() {
    this.getJson(`${API + this.catalogUrl}`)
      .then(data => {
        for(let el of data){
          this.products.push(el);
        }
      });
  },
  beforeMount() {
    this.filtered = this.products;
    this.cart = [];
  },
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
});

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
