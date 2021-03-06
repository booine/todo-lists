"use strict";

var one = Vue.createApp({
  data: function data() {
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
      }],
      editModeId: null,
      beforeContent: ''
    };
  },
  methods: {
    createTodo: function createTodo() {
      // 因使用者輸入而觸發。
      var newTodo = {
        //建立新的 object，將使用者的輸入值寫入todos array中。
        id: this.todos.length + 1,
        // id這裡通常會跟後端用 API 做連接。這裡先用其他方法代替。
        content: this.addMessage,
        complete: false
      };
      this.todos.push(newTodo); // 向陣列 todos 後方新增新的 object。

      this.addMessage = ''; //清空輸入格
    },
    deleteTodo: function deleteTodo(todo, index) {
      // 製作確認是否刪除的對話視窗： confirm(message);
      // confirm(message);會跳出帶有「取消」與「確認」鍵的對話視窗，執行完會回傳布林值，按取消就回傳(false)、按確認就回傳(true)
      //舊寫法:let result = confirm('Delete todo : ' + todo.content + ' ?');
      var result = confirm("Delete todo : ".concat(todo.content, " ?")); //新寫法，利用 ${變數或參數或引數}帶入變數、參數或引數內容。

      if (result) {
        this.todos.splice(index, 1);
        console.log(index); // delete this.todos[index + 1];
      }
    },
    // 雙點擊後進入【編輯模式】& Auto focus：
    enterEditMode: function enterEditMode(todo, e) {
      var input = e.target.nextElementSibling; //找到需要 Auto focus 的 DOM 節點，在此例因為 div 和 input 是 sibling 關係，所以使用 js原生屬性「nextElementSibling」去把 <input> 找出並存放於變數中。

      this.editModeId = todo.id; // 要作為 v-show 的判斷依據。

      this.beforeContent = todo.content; // 將原本的輸入先暫存在 beforeContent 中，以便取消編輯後重新寫回。

      this.$nextTick(function () {
        input.focus();
      }); // $nextTick(函式);用以確保前面動作已re-render後，下一輪 re-render 再執行nextTick內的動作。(和vue的lifecycle有關。)
    },
    updateTodo: function updateTodo() {
      // (完成編輯)當按下 enter 後執行：
      this.leaveEditMode();
    },
    cancelUpdateTodo: function cancelUpdateTodo(todo) {
      // (取消編輯)當按下 esc 後執行並回復到原先的內容：
      this.leaveEditMode();
      todo.content = this.beforeContent; //將原先的內容重新寫回(所以才要傳入todo參數)。
    },
    leaveEditMode: function leaveEditMode() {
      // 離開【編輯模式】：
      this.editModeId = null;
    }
  }
}).mount('#app');