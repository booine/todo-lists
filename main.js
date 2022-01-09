const one = Vue.createApp({
    data() {
        return {
            addMessage: '',
            todos: [{
                id: 1,
                content: '選項1',
                complete: false
            }, {
                id: 2,
                content: '選項2',
                complete: true
            }, {
                id: 3,
                content: '選項3',
                complete: false
            }, ]
        };
    },
    methods: {
        createTodo() {
            // 因使用者輸入而觸發。
            let newTodo = {
                //建立新的 object，將使用者的輸入值寫入todos array中。
                id: this.todos.lenght + 1,
                // id這裡通常會跟後端用 API 做連接。這裡先用其他方法代替。
                content: this.addMessage,
                complete: false
            };
            this.todos.push(newTodo); // 向陣列 todos 後方新增新的 object。

            this.addMessage = ''; //清空輸入格
        }
    }

}).mount('#app');