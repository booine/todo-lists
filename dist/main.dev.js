"use strict";

var one = Vue.createApp({
  data: function data() {
    return {
      addMessage: '',
      todos: [{
        id: 1,
        content: '選項1',
        complete: true
      }, {
        id: 2,
        content: '選項2',
        complete: true
      }, {
        id: 3,
        content: '選項3',
        complete: false
      }]
    };
  }
}).mount('#app');