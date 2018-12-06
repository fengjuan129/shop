<template>
   <div id="container">
      <Header />
      <router-view></router-view>
      <div id="cta-footer">
          <router-link to="/">
              列表首页
          </router-link>
          <router-link to="/shopCart">
               购物车
          </router-link>
      </div>
   </div>
</template>
<script>
import Header from './header.vue';

export default {
  name: 'index',
  components: {
    Header,
  },
};
</script>
<style scoped lang="scss">
#container {
  margin: -20px;
  #cta-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    height: 40px;
    background: #f00;
    justify-content: space-between;
    align-items: center;
    a {
      color: #000;
      text-decoration: none;
      width: 50%;
      padding-left: 100px;
    }
  }
}
</style>
