export default {
  install(Vue) {
    //配置全局过滤器
    Vue.filter("mySliceGlobal", function (val) {
      return val.slice(0, 4);
    });
  },
};
