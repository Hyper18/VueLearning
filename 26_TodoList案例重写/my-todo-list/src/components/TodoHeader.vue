<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="commit" />
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "TodoHeader",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    commit() {
      // 校验
      if (!this.title.trim()) return alert("任务名称不能为空或空格！");
      // 包装
      const todo = { id: nanoid(), taskName: this.title, completed: false };
      // 通知
      this.addTodo(todo);
      // 清空
      this.title = "";
    },
  },
  props: ["addTodo"],
};
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>