<template>
   <div id="cta-detail">
      <div class="shopDetail">
          <img :src="item.picUrl">

      </div>
      <div class="info">
          <div class="title">
              商品名称：{{item.name}}
          </div>
          <div class="title">
              商品价格: <span class="price">{{item.price}} ￥</span>
          </div>
          <button @click="addCarts">加入购物车</button>
      </div>

   </div>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex';

export default {
  name: 'shopDetail',
  data() {
    return {
      item: {},
    };
  },
  created() {
    this.item = this.$route.query.item;
    this.$store.commit('shop/modifyTopHeader', '商品详情');
  },
  computed: {
    ...mapGetters('shop', ['cartList']),
  },
  methods: {
    ...mapMutations('shop', ['addCart']),
    addCarts() {
      if (this.isAddCart() < 0) {
        this.addCart({ number: 1, ...this.item });
      }
    },
    isAddCart() {
      const cartLists = this.cartList;
      console.log(this.cartList.length);
      return cartLists.findIndex(aitem => aitem.id === this.item.id);
    },
  },
};
</script>
<style scoped lang="scss">
#cta-detail {
  width: 100%;
  overflow: hidden;
  padding: 3% 5%;
  box-sizing: border-box;
  .shopDetail {
    width: 55%;
    float: left;
    img {
      width: 100%;
    }
  }
  .info {
    float: right;
    width: 35%;
    text-align: left;
    .title {
      line-height: 30px;
      .price {
        color: #f00;
      }
    }
    button {
      margin-top: 100px;
    }
  }
}
</style>
