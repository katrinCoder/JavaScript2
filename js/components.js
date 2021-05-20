Vue.component('search-comp', {
    
    data() {
        return {
            userSearch: this.userSearch,
            //filter: this.$emit('filter()'),
        }
    },
    template:   `<form action="#" class="search-form">
                    <input type="text" class="search-field" v-model="userSearch">
                    <button class="btn-search" type="submit">
                        <i class="fas fa-search"></i>
                    </button>
                </form>`,
    // template:   `<form action="#" class="search-form" @submit.prevent="filter">
    //                 <input type="text" class="search-field" v-model="userSearch">
    //                 <button class="btn-search" type="submit">
    //                     <i class="fas fa-search"></i>
    //                 </button>
    //             </form>`,
    mounted() {
        console.log(this.userSearch);
    },
});