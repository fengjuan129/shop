<template>
   <div id="container">
      <Header />

        <router-view class="main"></router-view>

      <div id="cta-footer">
          <router-link to="/" >
              列表首页
          </router-link>
          <router-link to="/shopCart">
               购物车
               <span v-if="cartList.length>0" class="cartNum">({{cartList.length}})</span>
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
  computed: {
    cartList() {
      return this.$store.state.shop.cartList;
    },
  },
};
</script>
<style scoped lang="scss">
#container {
  margin: -20px;
  .main {
    display: block;
    width: 100%;
    height: 100%;
  }
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
