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
            }, ],
            editModeId: null,
            beforeContent: ''
        };
    },
    methods: {
        createTodo() {
            // 因使用者輸入而觸發。
            let newTodo = {
                //建立新的 object，將使用者的輸入值寫入todos array中。
                id: this.todos.length + 1,
                // id這裡通常會跟後端用 API 做連接。這裡先用其他方法代替。
                content: this.addMessage,
                complete: false
            };
            this.todos.push(newTodo); // 向陣列 todos 後方新增新的 object。

            this.addMessage = ''; //清空輸入格
        },

        deleteTodo(todo, index) {
            // 製作確認是否刪除的對話視窗： confirm(message);
            // confirm(message);會跳出帶有「取消」與「確認」鍵的對話視窗，執行完會回傳布林值，按取消就回傳(false)、按確認就回傳(true)
            // let result = confirm('Delete todo : ' + todo.content + ' ?'); //舊寫法
            let result = confirm(`Delete todo : ${todo.content} ?`); //新寫法，利用 ${變數或參數或引數}帶入變數、參數或引數內容。
            if (result) {
                this.todos.splice(index, 1);
            }
        },

        enterEditMode(todo) { // 雙點擊後進入【編輯模式】：
            this.editModeId = todo.id; // 要作為 v-show 的判斷依據。
            this.beforeContent = todo.content;
            // 將原本的輸入先暫存在 beforeContent 中，以便取消編輯後重新寫回。
        },

        updateTodo() { // (完成編輯)當按下 enter 後執行：
            this.leaveEditMode();
        },

        cancelUpdateTodo(todo) { // (取消編輯)當按下 esc 後執行並回復到原先的內容：
            this.leaveEditMode();
            todo.content = this.beforeContent;
            // 將原先的內容重新寫回(所以才要傳入todo參數)。
        },

        leaveEditMode() { // 離開【編輯模式】：
            this.editModeId = null;
        }
    }

}).mount('#app');