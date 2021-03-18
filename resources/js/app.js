require('./bootstrap');

window.Vue = require('vue');

vue.component('front-page',require('./componentes/Front.vue').default);

const app = new Vue({
    el: '#app',
});
