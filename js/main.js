const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
  el: '#app',
  data: {
    catalogUrl: '/catalogData.json',
    products: [],
    filtered: [],
    imgCatalog: 'https://via.placeholder.com/200x150',
    isError: false,
  },
  provide: function() {
    return {
      filter: this.filter,
      getJson: this.getJson,
    };
  },
  methods: {
    getJson(url) {
      return fetch(url)
        .then(result => result.json())
        .catch(error => {
          this.$refs.error.showError(error);
        })
    },
    filter(userSearch) {
      let regexp = new RegExp(userSearch, 'i');
      this.filtered = this.products.filter(el => regexp.test(el.product_name));
    },
  },
  created(){
    this.getJson(`${API + this.catalogUrl}`)
        .then(data => {
          for (let el of data) {
            this.products.push(el);
            this.filtered.push(el);
          }
        });
  },
});

