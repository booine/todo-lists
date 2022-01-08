"use strict";

var one = Vue.createApp({
  data: function data() {
    return {
      message: ''
    };
  },
  methods: {
    show: function show() {
      alert('Hi!!');
    }
  }
}).mount('#app');