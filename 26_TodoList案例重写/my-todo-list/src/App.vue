<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <TodoHeader :addTodo="addTodo" />
        <TodoList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo" />
        <TodoFooter
          :todos="todos"
          :checkAllTodo="checkAllTodo"
          :clearAllCompletedTodo="clearAllCompletedTodo"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";

export default {
  name: "App",
  components: {
    TodoHeader,
    TodoList,
    TodoFooter,
  },
  data() {
    return {
      todos: [
        { id: 1, taskName: "撰写代码", completed: true },
        { id: 2, taskName: "测试", completed: true },
        { id: 3, taskName: "部署上线", completed: true },
        { id: 4, taskName: "总结", completed: false },
      ],
    };
  },
  methods: {
    // 添加一个todo事项
    addTodo(todoObj) {
      this.todos.unshift(todoObj);
    },
    // 勾选or取消勾选一个todo事项
    checkTodo(id) {
      this.todos.forEach((todoObj) => {
        if (todoObj.id === id) todoObj.completed = !todoObj.completed;
      });
    },
    // 删除一个todo事项
    deleteTodo(id) {
      this.todos = this.todos.filter((todoObj) => {
        return todoObj.id !== id;
      });
    },
    // 全选or取消全选todo
    checkAllTodo(isCompleted) {
      this.todos.forEach((todoObj) => {
        todoObj.completed = isCompleted;
      });
    },
    clearAllCompletedTodo() {
      this.todos = this.todos.filter((todoObj) => {
        return todoObj.completed !== true;
      });
    },
  },
};
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
