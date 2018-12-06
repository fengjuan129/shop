<template>
   <div id="cat-list">
      <div v-if ="!isLoad" class="loading">
        正在加载
      </div>
      <div v-else id="list">
          <router-link  v-for="item in list" class="list-item" :oid="item.id" :key="item.id" :to="{name:'shopDetail',params:{id:item.id},query:{item}}">
            <img :src="item.picUrl">
            <div class="item-title">{{item.name}}</div>
            <div class="item-price">
                价格:<span class="price">{{item.price}} ￥</span>
            </div>
          </router-link>
      </div>
   </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'shopList',
  data() {
    return {
      isLoad: false,
      list: [],
    };
  },
  created() {
    this.$store.commit('shop/modifyTopHeader', '商品列表1');
    this.getList();
  },
  computed: {},
  methods: {
    getList() {
      axios({
        method: 'get',
        url: '/v1/auth/shop/loadList',
      })
        .then(res => {
          this.isLoad = true;
          this.list = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
  },
};
</script>
<style scoped lang="scss">
#list {
  display: flex;
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  .list-item {
    display: block;
    width: 200px;
    text-decoration: none;
    color: #000;

    img {
      width: 100%;
    }
    .item-title {
      line-height: 30px;
      text-align: left;
      font-size: 14px;
    }
    .item-price {
      line-height: 30px;
      text-align: left;
      font-size: 14px;
      .price {
        color: #f00;
      }
    }
  }
}
</style>
