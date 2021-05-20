Vue.component('error', {
    data() {
        return {
            errorText: '',
        }
    },
    methods: {
        showError(text) {
            this.errorText = text;
        }
    },
    computed: {
        errorVis() {
            return this.errorText!=="";
        }
    },
    template:   `<div class="errorBox" v-show="errorVis">
                    <p class="errorText">{{ errorText }}</p>
                </div>`
});