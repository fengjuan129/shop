<template>
   <div id="cta-cart">
      <div id="cart-list">
        <div class="cart-itembox" v-for="item in cartList" :key="item.id" >
          <div class="checkbox">
            <input type="checkbox" v-model="select" :value="item.id">
          </div>
          <router-link class="cart-item"  :to="{ name:'shopDetail',params:{id:item.id}, query:{item}}">
              <div class="item-info">
                <div class="img-box">
                  <img :src="item.picUrl">
                </div>

                <div class="info">
                  <p>{{item.name}}</p>
                  <p class="price">{{item.price |formatPrice }}</p>
                </div>
              </div>
          </router-link>
          <div class="button-group">
              <div class="sub" @click.stop="subNum(item.id)">-</div>
              <div class="content">{{item.number}}</div>
              <div class="add" @click.stop="addNum(item.id)">+</div>
          </div>
        </div>
      </div>
      <div id="cart-footer">
          <div class="left"><input type="checkbox" v-model="ischeckall" @click="checkall"> 全选</div>
          <div class="right">
            合计:<span class="allPrice">{{allSelectPrice|formatPrice}}</span>
            结算:<span class="allPrice">{{allSelectNum}}</span>
          </div>
      </div>
   </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'shopCart',
  data() {
    return {
      select: [],
      ischeckall: false,
      allSelectNum: 0,
      allSelectPrice: 0,
    };
  },
  created() {},
  computed: {
    ...mapGetters('shop', ['cartList']),
  },
  methods: {
    ...mapMutations('shop', ['updataNumber', 'delCart']),
    subNum(id) {
      const index = this.findIndexById(id);
      const num = this.cartList[index].number;
      if (num - 1 === 0) {
        // eslint-disable-next-line no-alert
        const msg = window.confirm('是否确定删除该商品');
        if (msg) {
          this.delCart(index);
        }
      } else {
        const data = {
          index,
          key: 'number',
          value: num - 1,
        };
        this.updataNumber(data);
      }
    },
    addNum(id) {
      const index = this.findIndexById(id);
      const num = this.cartList[index].number;
      const data = {
        index,
        key: 'number',
        value: num + 1,
      };
      this.updataNumber(data);
    },
    findIndexById(id) {
      return this.cartList.findIndex(item => item.id === id);
    },
    // 全选
    checkall() {
      this.select = [];
      if (!this.ischeckall) {
        this.select = [];
        this.cartList.forEach(element => {
          this.select.push(element.id);
        });
      }
      this.ischeckall = !this.ischeckall;
      this.allSelect();
    },
    // 单选改变事件
    singleSelect() {
      this.ischeckall = this.select.length === this.cartList.length;
      this.allSelect();
    },
    allSelect() {
      const that = this;
      that.allSelectNum = 0;
      that.allSelectPrice = 0;
      this.select.forEach(value => {
        that.cartList.forEach(item => {
          if (item.id === value) {
            that.allSelectPrice += item.price * item.number;
            that.allSelectNum += 1;
          }
          return true;
        });
      });
    },
  },
  watch: {
    // 若使用watch监听：this.select改变即可触发select事件
    select: function() {
      this.ischeckall = this.select.length === this.cartList.length;
      this.allSelect();
    },
  },
  filters: {
    formatPrice(value) {
      if (!value) return '';
      return `${value.toFixed(2)}￥`;
    },
  },
};
</script>
<style scoped lang="scss">
#cta-cart {
  position: relative;
  width: 100%;
  height: 100%;
  background: #fff;
  #cart-list {
    width: 100%;
    height: 100%;
    padding-bottom: 50px;
    box-sizing: border-box;
    .cart-itembox {
      position: relative;
      .checkbox {
        position: absolute;
        top: 10px;
        left: 10px;
      }
      .cart-item {
        display: block;
        width: 100%;
        text-decoration: none;
        color: #000;
        .item-info {
          display: flex;
          width: 100%;
          flex-direction: row;
          box-sizing: border-box;
          padding-left: 40px;
          .img-box {
            width: 30%;
            margin: 0 10px;
            img {
              width: 100%;
            }
          }
          .price {
            color: #f00;
          }
        }
      }
      .button-group {
        position: absolute;
        bottom: 0;
        right: 10px;
        display: flex;
        flex-direction: row;
        .add,
        .sub {
          width: 20px;
          height: 20px;
          border: 1px solid #e5e5e5;
        }
        .content {
          width: 30px;
          height: 20px;
          border-top: 1px solid #e5e5e5;
          border-bottom: 1px solid #e5e5e5;
        }
      }
    }
  }
  #cart-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 40px;
    width: 100%;
    background: #ccc;
    display: flex;
    flex-direction: row;
    line-height: 40px;
    .left {
      float: left;
      text-align: left;
      margin-left: 10px;
      width: 30%;
    }
    .right {
      width: 60%;
      float: right;
      text-align: right;
      margin-right: 0;
    }
  }
}
</style>
