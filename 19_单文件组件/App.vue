// use <v 快速生成默认模板
<template>
  <div>
      <School />
      <Student />
  </div>
</template>

<script>
// 引入组件
    import School from './School'
    import Studnet from './School'

export default {
    name:"App",
    template:`App`,
    components:{
        School, 
        Student
    }
}
</script>