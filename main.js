const one = Vue.createApp({
    data() {
        return {
            message: ''
        };
    },
    methods: {
        show() {
            alert('Hi!!')
        }
    },
}).mount('#app');