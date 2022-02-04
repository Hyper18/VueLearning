<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>姓名:{{ name }}</h2>
    <h2>性别:{{ sex }}</h2>
    <h2>年龄:{{ age }}</h2>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      msg: "我是一名学生",
    };
  },
  // props: ["name", "sex", "age"], // 简单声明接收

  /* props: {
    // 接收同时对数据类型进行限制
    name: String,
    sex: String,
    age: Number,
  }, */
  props: {
    //接收的同时对数据:进行类型限制+默认值的指定+必要性的限制
    name: {
      type: String,
      required: true,
    },
    sex: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      default: 18,
    },
  },
};
</script>