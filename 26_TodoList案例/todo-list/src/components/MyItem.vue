<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)" />
      <!-- 不推荐的写法：虽然更方便，但修改了props传入的属性，违反原则
      -->
      <!-- <input type="checkbox" v-model="todo.done" /> -->
      <span>{{ todo.name }}</span>
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: "MyItem",
  // 声明接收todo对象
  props: ["todo"],
  methods: {
    handleCheck(id) {
      console.log(id);
      // 通知App组件将对应的todo对象的done值取反
      // this.checkTodo(id);
      this.$bus.$emit("checkTodo", id);
    },
    // 删除
    handleDelete(id) {
      console.log(id);
      if (confirm("确定删除吗？")) {
        // this.deleteTodo(id);
        this.$bus.$emit("deleteTodo", id);
      }
    },
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

/* 鼠标悬浮在上方时显示浅灰色 */
li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}
</style>
