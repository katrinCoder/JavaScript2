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
